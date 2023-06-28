import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CategoriesApiResponse,
  DepartmentData,
  Post,
  PostResponse,
  User,
} from './interface';

@Injectable({
  providedIn: 'root',
})
export class DBCallsService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.appData.baseApiUrl;

  //************** API CALS *****************/

  listPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>(
      `${this.baseUrl}/posts/?title=asd&page=1`
    );
  }

  retrievePost(postId: string) {
    return this.http.get<Post>(`${this.baseUrl}/posts/${postId}/`);
  }

  listFavoritePosts(pageNr: string): Observable<Post> {
    const params = new HttpParams().append('page', pageNr);
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
    return this.http.get<Post>(`${this.baseUrl}/posts/saved/`, { params });
  }

  async saveFavoritePost(postId: string): Promise<User> {
    const response = await this.http
      .post<any>(`${this.baseUrl}/save-post/`, { post: postId })
      .toPromise();
    return response;
  }

  async deleteFavoritePost(postId: string): Promise<User> {
    const response = await this.http
      .delete<any>(`${this.baseUrl}/save-post/${postId}/remove/`)
      .toPromise();
    return response;
  }

  getAllDepartments(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      const departments: any[] = [];
      let pageNr = 1;
      let result: any;

      const fetchDepartments = () => {
        const params = new HttpParams().append('page', pageNr.toString());
        this.http
          .get<DepartmentData>(`${this.baseUrl}/departments/`, { params })
          .subscribe(
            (res) => {
              result = res;
              departments.push(...result.results);
              pageNr++;
              if (result.next) {
                fetchDepartments();
              } else {
                resolve(departments);
              }
            },
            (error) => {
              reject(error);
            }
          );
      };

      fetchDepartments();
    });
  }

  async postNewComment(postId: string, comment: string) {
    const data = { text: comment };
    const response = await this.http
      .post<any>(`${this.baseUrl}posts/${postId}/create_comment/`, data)
      .toPromise();
    return response;
  }

  async getAllCategories(): Promise<CategoriesApiResponse> {
    const response = await this.http
      .get<any>(`${this.baseUrl}/categories/`)
      .toPromise();
    return response;
  }

  async filterByCategories(categories: string[]): Promise<any> {
    let params = new HttpParams();

    categories.forEach((category) => {
      params = params.append('categories', category);
    });

    const response = await this.http
      .get<any>(`${this.baseUrl}/posts/`, { params })
      .toPromise();
    return response;
  }

  async deleteComment(commentId: string) {
    const response = await this.http
      .delete<any>(`${this.baseUrl}comments/${commentId}/delete/`)
      .toPromise();
    return response;
  }

  async updateComment(commentId: string, updatedComment: string) {
    const data = {
      text: updatedComment,
    };
    const response = await this.http
      .put<any>(`${this.baseUrl}comments/${commentId}/edit/`,  data )
      .toPromise();
    return response;
  }
}
