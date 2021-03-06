import { Component, OnInit } from "@angular/core";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

import { Router } from "@angular/router-deprecated";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: [ 'app/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    
    constructor(private _router: Router,
        private _heroService: HeroService) {
        
    }
    
    ngOnInit() {
        console.log(this._heroService);
        this._heroService.getHeroes().then(
            heroes => {
                console.log(heroes); 
                this.heroes = heroes.slice(1, 5) 
            }    
        );
    }
    
    gotoDetail(hero: Hero) {
        let link = [ 'HeroDetail', { id: hero.id} ];
        this._router.navigate(link);
    }
}