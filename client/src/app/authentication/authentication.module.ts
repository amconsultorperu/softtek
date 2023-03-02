import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const authenticationRoutes = [
  {
    path: 'signin',
    component: SigninComponent,
  },
];

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authenticationRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}
