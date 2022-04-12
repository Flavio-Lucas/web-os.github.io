import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { WindowsService } from '../../services/windows/windows.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent implements AfterViewInit {

  @ViewChild('windowElement')
  public windowElement: ElementRef<HTMLElement>;

  @Input()
  public windowId: string;

  public windowPosition = { x: 0, y: 0 };

  constructor(
    private readonly windowsService: WindowsService,
  ) { }

  public closeWindow(): void {
    this.windowsService.destroy(this.windowId);
  }

  public ngAfterViewInit(): void {}

  public onMoveEnd(event: any): void {
    const position = event.source.element.nativeElement.getBoundingClientRect();
    const windowHeight = this.windowElement.nativeElement.offsetHeight;
    const windowWidth = this.windowElement.nativeElement.offsetWidth;

    this.windowPosition = {
      x: position.x - 80,
      y: position.y,
    };

    if (position.y < 0) {
      this.windowPosition.y = 0;
      this.windowPosition.x = 0;
      this.fullScreen();
    }
    if (position.y > (window.innerHeight - windowHeight)) {
      this.windowPosition.y = (window.innerHeight - windowHeight);
    }
    if (position.x < 80) {
      this.windowPosition.x = 0;
    }
    if (position.x > (window.innerWidth - windowWidth) - 80) {
      this.windowPosition.x = (window.innerWidth - windowWidth) - 80;
    }
  }

  public minimize(): void {
    if (this.windowElement.nativeElement.offsetWidth > 500) {
      this.windowElement.nativeElement.style.width = '500px';
    }
    if (this.windowElement.nativeElement.offsetHeight > 500) {
      this.windowElement.nativeElement.style.height = '500px';
    }
  }

  public fullScreen(): void {
    this.windowElement.nativeElement.style.transform = 'translate3d(0, 0, 0)';
    this.windowElement.nativeElement.style.width = 'calc(100vw - var(--toolbar-width))';
    this.windowElement.nativeElement.style.height = '100vh';
  }

  public moveListener;

  onResizeEnd(event: ResizeEvent): void {
    this.windowElement.nativeElement.style.width = (event.rectangle.right - event.rectangle.left) + 'px';
    this.windowElement.nativeElement.style.height = (event.rectangle.bottom - event.rectangle.top) + 'px';
  }

}
