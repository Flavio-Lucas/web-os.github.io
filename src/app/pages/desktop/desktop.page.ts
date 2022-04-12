import { Component, OnInit } from '@angular/core';
import { WindowsService } from '../../services/windows/windows.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.page.html',
  styleUrls: ['./desktop.page.scss'],
})
export class DesktopPage implements OnInit {

  constructor(
    private readonly windowsService: WindowsService,
  ) { }

  ngOnInit() {}

  public openApp(app: any) {
    const id = this.windowsService.create(app.component);
  }

}
