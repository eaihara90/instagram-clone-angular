import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
    public username: { name: string, age?: number };
    
    constructor(public route: ActivatedRoute, public router: Router) { }

    ngOnInit(): void {
        const name = this.route.snapshot.params['username'];
        
        this.username = { name: name };

        this.route.params.subscribe((_params: Params) => {
            this.username = { name: _params['username'] };
            this.isActive();
        });
    }

    public isActive() {
        console.log(this.route);
    }
}