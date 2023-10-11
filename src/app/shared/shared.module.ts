import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [MenuComponent, SearchInputComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, SearchInputComponent],
})
export class SharedModule {}
