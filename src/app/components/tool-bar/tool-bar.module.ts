import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolBarComponent } from './tool-bar.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ToolBarComponent
    ],
    exports: [
        ToolBarComponent
    ],
})
export class ToolBarModule { }
