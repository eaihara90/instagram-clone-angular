import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserPageRoutes } from './user-page.routing';
import { UserPageComponent } from './page/user-page.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserTaggedComponent } from './components/user-tagged/user-tagged.component';
import { PostComponent } from './components/user-posts/post/post.component';

@NgModule({
    declarations: [
        UserPageComponent,
        UserPostsComponent,
        UserTaggedComponent,
        PostComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        UserPageRoutes
    ]
})
export class UserPageModule { }
