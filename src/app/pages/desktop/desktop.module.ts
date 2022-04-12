import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WindowsRootModule } from '../../components/windows-root/windows-root.module';

import { DesktopPageRoutingModule } from './desktop-routing.module';

import { DesktopPage } from './desktop.page';
import { ToolBarModule } from '../../components/tool-bar/tool-bar.module';
import { WindowModule } from '../../components/window/window.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesktopPageRoutingModule,
    ToolBarModule,
    WindowModule,
    WindowsRootModule,
  ],
  declarations: [DesktopPage]
})
export class DesktopPageModule {}
