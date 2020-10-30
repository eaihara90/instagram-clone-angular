import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-posts',
    templateUrl: './user-posts.component.html',
    styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
    
    private posts: string[] = [
        'Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5', 'Post 6', 'Post 7', 'Post 8'
    ];

    public rows: any[] = [];

    ngOnInit(): void {
        const rows = Math.round(this.posts.length / 3);

        for (let i = 0; i < rows; i++) {
            this.rows[i] = this.posts.splice(0, 3);
        }
        
        console.log(this.rows)
    }
}