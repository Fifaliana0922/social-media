import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { Post } from "../models/post.model";
import { PostService } from "../services/post.service";
import { Observable } from "rxjs";

@Injectable()

export class PostResolver implements Resolve<Post[]>{
    private postService = inject(PostService);

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]>{
        return this.postService.getPosts();
    }
}