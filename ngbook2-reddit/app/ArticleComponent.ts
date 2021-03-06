
import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";

import { ArticleModel } from "./ArticleModel";

@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    inputs: [ 'article' ],
    template: `
        <div class="four wide column center aligned votes">
            <div class="ui statistic">
                <div class="value">
                    {{ article.votes }}
                </div>
                <div class="label">
                    Points
                </div>
            </div>
        </div>
        <div class="twelve wide column">
            <a class="ui large header" href="{{ article.link }}">
                {{ article.title }}
            </a>
            <div class="meta">({{ article.domain() }})</div>
            <ul class="ui big horizontal list voters">
                <li class="item">
                    <a href (click)="voteUp()">
                        <i class="arrow up icon"></i>
                        upvote
                    </a>
                </li>
                <li class="item">
                    <a href (click)="voteDown()">
                        <i class="arrow down icon"></i>
                        downvote
                    </a>
                </li>
            </ul>
        </div>
    `
})
export class ArticleComponent {
    article: ArticleModel;
    
    constructor() {
    }
    
    voteUp() : boolean {
        this.article.voteUp();
        return false;
    }
    
    voteDown() : boolean {
        this.article.voteDown();
        return false;
    }
}