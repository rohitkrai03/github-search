import { Component, OnInit } from '@angular/core';
import { GithubStore } from '../../store/github.store';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {

  constructor(
    private store: GithubStore
  ) { }

  ngOnInit() {
  }

}
