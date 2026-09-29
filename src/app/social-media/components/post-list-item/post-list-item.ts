import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { TitleCasePipe } from '@angular/common';

@Component({
    imports: [TitleCasePipe],
    selector: 'app-post-list-item',
    styleUrl: './post-list-item.scss',
    templateUrl: './post-list-item.html',
})
export class PostListItem {
    @Input() post !: Post; 
}
