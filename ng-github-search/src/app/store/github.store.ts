import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class GithubStore {
  private _profile: BehaviorSubject<any> = new BehaviorSubject({});
  private _repos: BehaviorSubject<any> = new BehaviorSubject([]);
  private _gists: BehaviorSubject<any> = new BehaviorSubject([]);

  get profile() {
    return this._profile.asObservable();
  }

  get repos() {
    return this._repos.asObservable();
  }

  get gists() {
    return this._gists.asObservable();
  }

  addProfile(profile) {
    this._profile.next(profile);
  }

  addRepos(repos) {
    this._repos.next(repos);
  }

  addGists(gists) {
    this._gists.next(gists);
  }
}
