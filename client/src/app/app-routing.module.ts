import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyLayoutComponent } from './core/layouts/empty/empty-layout.component';
import { MasterpageComponent } from './core/layouts/masterpage/masterpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'employee',
        loadChildren: () =>
          import('./employee/employee.module').then((m) => m.EmployeeModule),
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
