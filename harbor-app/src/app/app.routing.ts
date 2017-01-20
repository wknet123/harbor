import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { DetailComponent } from './detail/detail.component';
import { RepositoryComponent } from './repository/repository.component';
import { ReplicationComponent } from './replication/replication.component';
import { UserComponent } from './user/user.component';
import { LogComponent } from './log/log.component';
import { AuthGuard } from './service/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'detail', redirectTo: 'detail/repository', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'project', component: ProjectComponent },
      {
        path: 'detail',
        component: DetailComponent,
        children: [
          { path: 'repository', component: RepositoryComponent },
          { path: 'replication', component: ReplicationComponent },
          { path: 'user', component: UserComponent },
          { path: 'log', component: LogComponent }
        ]
      }
    ],
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [ AuthGuard ]
})
export class AppRoutingModule {}