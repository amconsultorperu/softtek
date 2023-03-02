import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyLayoutComponent } from './layouts/empty/empty-layout.component';
import { RouterModule } from '@angular/router';
import { MasterpageComponent } from './layouts/masterpage/masterpage.component';

@NgModule({
  declarations: [EmptyLayoutComponent, MasterpageComponent],
  imports: [CommonModule, RouterModule],
  exports: [EmptyLayoutComponent, MasterpageComponent],
})
export class CoreModule {}
