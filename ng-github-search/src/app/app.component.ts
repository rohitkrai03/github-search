import { Component } from '@angular/core';

import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private githubService: GithubService) {}

  handleSearch(username: string) {
    this.githubService.getUserData(username);
  }

}
