import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  public apps = [
    {
      pageUri: '',
      appIconUrl: '',
    },
    {
      pageUri: '',
      appIconUrl: '',
    },
    {
      pageUri: '',
      appIconUrl: '',
    },
    {
      pageUri: '',
      appIconUrl: '',
    },
    {
      pageUri: '',
      appIconUrl: '',
    },
  ]

  public openApp(app): void {
    console.log('Open app!');
  }

  public openMenu(): void {
    console.log('Open menu!')
  }

}
