import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./modules/feed-page/feed-page.module').then(mod => mod.FeedPageModule) },
    { path: ':username', loadChildren: () => import('./modules/user-page/user-page.module').then(mod => mod.UserPageModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }