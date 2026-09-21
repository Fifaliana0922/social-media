import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "social-media",
        loadChildren: () => import('./social-media/social-media-module').then(sm => sm.SocialMediaModule)
    },
    {
        path: "**",
        redirectTo: "social-media"
    },
];
