import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserPageComponent } from './page/user-page.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserTaggedComponent } from './components/user-tagged/user-tagged.component';

const routes: Routes = [
    { path: ':username', component: UserPageComponent, children: [
        { path: '', component: UserPostsComponent },
        { path: 'tagged', component: UserTaggedComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserPageRoutes { }