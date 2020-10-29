import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedPageComponent } from './page/feed-page.component';

const routes: Routes = [
    { path: '', component: FeedPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeedPageRouting { }