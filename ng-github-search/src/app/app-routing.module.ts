import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { GistsListComponent } from './components/gists-list/gists-list.component';

export const routeConfig: Routes = [
  {
      path: '',
      children: [
          {
              path: 'profile',
              component: ProfileComponent
          },
          {
              path: 'repos',
              component: ReposListComponent
          },
          {
            path: 'gists',
            component: GistsListComponent
          }
      ]
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routeConfig) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
