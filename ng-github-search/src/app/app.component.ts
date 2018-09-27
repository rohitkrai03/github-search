import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gists: Observable<any>;

  constructor (private githubService: GithubService) {}

  handleSearch(username: string) {
    this.githubService.getUserData(username)
      .subscribe();
  }

}
