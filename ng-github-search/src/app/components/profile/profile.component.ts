import { Component, OnInit } from '@angular/core';
import { GithubStore } from '../../store/github.store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private store: GithubStore
  ) { }

  ngOnInit() {
  }

}
