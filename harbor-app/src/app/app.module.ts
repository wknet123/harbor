import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import { SignInComponent } from './sign-in/sign-in.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { DetailComponent } from './detail/detail.component';
import { RepositoryComponent } from './repository/repository.component';
import { ReplicationComponent } from './replication/replication.component';
import { UserComponent } from './user/user.component';
import { LogComponent } from './log/log.component';

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        BaseLayoutComponent,
        DashboardComponent,
        ProjectComponent,
        DetailComponent,
        RepositoryComponent,
        ReplicationComponent,
        UserComponent,
        LogComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
