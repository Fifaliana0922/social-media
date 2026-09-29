import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostListItem } from '../post-list-item/post-list-item';
import { AsyncPipe } from '@angular/common';

@Component({
    imports: [PostListItem, AsyncPipe],
    selector: 'app-post-list',
    styleUrl: './post-list.scss',
    templateUrl: './post-list.html',
})
export class PostList implements OnInit {
    private route = inject(ActivatedRoute)

    posts$ !: Observable<Post[]>;

    ngOnInit(): void {
        this.posts$ = this.route.data.pipe(
            map(data => data["posts"])
        );
    }
}
