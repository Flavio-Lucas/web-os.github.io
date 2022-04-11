import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WindowComponent } from './window.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        WindowComponent
    ],
    exports: [
        WindowComponent
    ],
})
export class WindowModule { }
