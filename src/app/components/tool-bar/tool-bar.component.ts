import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WindowComponent } from '../window/window.component';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {

  constructor() { }

  public apps = [
    {
      id: 0,
      pageUri: '',
      appIconUrl: '',
      component: WindowComponent,
    },
    {
      id: 1,
      pageUri: '',
      appIconUrl: '',
      component: WindowComponent,
    },
    {
      id: 2,
      pageUri: '',
      appIconUrl: '',
      component: WindowComponent,
    },
    {
      id: 3,
      pageUri: '',
      appIconUrl: '',
      component: WindowComponent,
    },
    {
      id: 4,
      pageUri: '',
      appIconUrl: '',
      component: WindowComponent,
    },
  ];

  @Output()
  public openApp: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  public onOpenApp(app: any): void {
    this.openApp.emit(app);
  }

  public openMenu(): void {
    console.log('Open menu!');
  }

}
