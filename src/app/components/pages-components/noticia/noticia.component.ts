import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, Comment } from 'src/app/services/interface';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
})
export class NoticiaComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _dbCallService: DBCallsService,
    public _authService: AuthService
  ) {
    this.loadNoticia();
  }

  noticia: any;
  noticiaId: any;
  result!: Subscription;

  imageSource: string = '';
  imageLoaded: boolean = false;

  ngOnDestroy(): void {
    this.result.unsubscribe();
  }

  ngOnInit() {
    this.imageSource = './assets/images/thumbnail-360x240.png';
    console.log('noticia', this.noticia);
  }

  onImageLoad() {
    this.imageLoaded = true;
    this.imageSource = this.noticia.image;
  }

  onImageError() {
    this.imageSource = './assets/images/thumbnail-360x240.png';
    this.imageLoaded = true;
  }

  loadNoticia() {
    this.noticiaId =
      this.router.getCurrentNavigation()?.extras?.state?.['noticiaId'];
    this.result = this._dbCallService.retrievePost(this.noticiaId).subscribe(
      (result: Post) => {
        this.noticia = result;
        console.log('noticia', this.noticia);
      },
      (error: any) => {
        console.error('Error getting posts from DB:', error);
      }
    );
  }

  removeDeletedCommentFromUi(commentId: string) {
    const updatedComments = this.noticia.comments.filter(
      (item: Comment) => item.id !== parseInt(commentId)
    );
    this.noticia.comments = updatedComments;
  }

  updateCommentInUI(updatedComment: any) {
    const commentId = parseInt(updatedComment.commentId);
    const updatedText = updatedComment.updatedText;
    this.noticia.comments.forEach((comment: Comment) => {
      if (comment.id === commentId) {
        comment.text = updatedText;
      }
    });
  }

  addNewCommentToUI(newComment: any) {
    console.log('newComment', newComment);
    let user: any;
    let newCommentData;
    this._authService.retrieveLoggedInUserInfo().then((res) => {
      user = res;
      console.log('user', user);
      newCommentData = {
        id: newComment.commentId,
        text: newComment.commentText,
        user: {
          id: user.id,
          fullname: user.fullname,
          departments: user.departments,
        },
      };

      this.noticia.comments.push(newCommentData);
    });
  }

  ngAfterViewInit(): void {}
}
