import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResizableModule } from 'angular-resizable-element';
import { WindowComponent } from './window.component';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    ResizableModule,
  ],
    declarations: [
        WindowComponent
    ],
    exports: [
        WindowComponent
    ],
})
export class WindowModule { }
