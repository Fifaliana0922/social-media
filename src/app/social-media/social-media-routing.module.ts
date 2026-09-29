import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostList } from "./components/post-list/post-list";
import { PostResolver } from "./resolvers/posts.resolver";


const routes: Routes = [
    { path: "", component: PostList, resolve: { posts: PostResolver } }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialMediaRoutingModule { }