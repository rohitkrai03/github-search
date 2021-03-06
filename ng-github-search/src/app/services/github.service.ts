import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { GithubStore } from '../store/github.store';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseApiUrl = 'http://api.github.com';

  constructor(
    private http: HttpClient,
    private store: GithubStore
  ) { }

  getUserData(username: string) {
    this.getProfile(username)
      .subscribe(user => this.store.addProfile(user));
    this.getGists(username)
      .subscribe(gists => this.store.addGists(gists));
    this.getRepos(username)
      .subscribe(repos => this.store.addRepos(repos));
  }

  getProfile(username: string): Observable<any> {
    const userUrl = `${this.baseApiUrl}/users/${username}`;
    return this.http.get(userUrl)
      .pipe(
        tap(user => console.log('fetched user', user)),
        catchError(this.handleError('getUserData', []))
      );
  }

  getGists(username: string): Observable<any> {
    const gistUrl = `${this.baseApiUrl}/users/${username}/gists`;
    return this.http.get(gistUrl)
      .pipe(
        tap(gists => console.log('fetched gists', gists)),
        catchError(this.handleError('getGistByUsername', []))
      );
  }

  getRepos(username: string): Observable<any> {
    const repoUrl = `${this.baseApiUrl}/users/${username}/repos`;
    return this.http.get(repoUrl)
      .pipe(
        tap(repos => console.log('fetched repos', repos)),
        catchError(this.handleError('getGistByUsername', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
