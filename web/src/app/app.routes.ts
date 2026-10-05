import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Journey } from './pages/journey/journey';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'journey',
    component: Journey,
  },
];