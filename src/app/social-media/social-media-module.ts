import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';
import { PostResolver } from './resolvers/posts.resolver';
import { SocialMediaRoutingModule } from './social-media-routing.module';

@NgModule({
    declarations: [],
    imports: [CommonModule,SocialMediaRoutingModule],
    providers:[
        PostService,
        PostResolver
    ]
})
export class SocialMediaModule { }
