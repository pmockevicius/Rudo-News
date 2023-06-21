import { initializeApp } from "@angular/fire/app";
import { getDatabase } from "firebase/database";

export const environment = {
    production: false,
    appData: {
      baseApiUrl: '/api',
      grant_type: 'password',
      client_id: "MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0",
      client_secret: "eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u"
    }
    
};
