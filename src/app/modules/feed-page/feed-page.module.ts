import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPageRouting } from './feed-page.routing';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FeedPageRouting,
        RouterModule
    ]
})
export class FeedPageModule { }