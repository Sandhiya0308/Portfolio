import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'AboutMe',
        pathMatch: 'full'
    },
    {
        path: 'AboutMe',
        loadComponent: () =>
            import('./about-me/about-me.component').then(m => AboutMeComponent)
    },
    {
        path: 'Projects',
        loadComponent: () =>
            import('./projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'resume',
        loadComponent: () =>
            import('./resume/resume.component').then(m => m.ResumeComponent)
    },
    {
        path: 'navbar',
        loadComponent: () =>
            import('./navbar/navbar.component').then(m => m.NavbarComponent)
    }
];