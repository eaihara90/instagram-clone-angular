import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserPageComponent } from './page/user-page.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserPageRoutes } from './user-page.routing';
import { UserTaggedComponent } from './components/user-tagged/user-tagged.component';

@NgModule({
    declarations: [
        UserPageComponent,
        UserPostsComponent,
        UserTaggedComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        UserPageRoutes
    ]
})
export class UserPageModule { }
