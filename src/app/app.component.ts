import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProfileViewer';
  private apiBaseUrl = `http://surajsarkar.pythonanywhere.com/api/user?name=`;
  repoTopic: Array<string> = ["skillup", "trail", "building", "samurai"];

  userDetails: any = {};

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type" : "application/json",
      "Access-Control-Allow-Origin": "http://localhost:5000/api/user"
    })
  }

  constructor(private httpClint: HttpClient){}

  username: string = "";
  initialScreen: boolean = true;
  user_present: boolean = false;
  loading: boolean = false;
  
  search(){
    this.initialScreen = true;
    this.loading = true;
    console.log(`Username: ${this.username}`);
    const url =  `${this.apiBaseUrl}${this.username}`;
    console.log(`URL: ${url}`);
    
    this.httpClint.get(url, this.httpOptions).subscribe((content) => {
      this.userDetails = content;
      this.loading = false;
      this.initialScreen = false;
      this.user_present = this.userDetails.user_present;
    });
  }


}
