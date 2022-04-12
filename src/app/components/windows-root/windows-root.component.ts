import { AfterViewInit, Component, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { window } from 'rxjs/operators';
import { CreateWindowInterface, WindowsService } from '../../services/windows/windows.service';

@Component({
  selector: 'app-windows-root',
  templateUrl: './windows-root.component.html',
  styleUrls: ['./windows-root.component.scss'],
})
export class WindowsRootComponent implements AfterViewInit, OnDestroy {

  @ViewChild('modalRender', { read: ViewContainerRef })
  public modalRender: ViewContainerRef;

  public isOpenModal = false;

  public componentRef: ComponentRef<any>;

  private modalListSubscription: Subscription;

  private windows: {
    componentRef: ComponentRef<any>;
    window: CreateWindowInterface;
  }[] = [];

  constructor(
    private readonly windowsService: WindowsService,
  ) {}

  public ngAfterViewInit(): void {
    this.modalListSubscription = this.windowsService.modalsList.subscribe(windowsList => {
      windowsList.forEach((windowComponent, index) => {
        if (!this.windows.find(w => w.window.id === windowComponent.id)) {
          this.windows.push({
            window: windowComponent,
            componentRef: this.modalRender.createComponent(windowComponent.component),
          });
        }

        this.windows[index].componentRef.instance.windowId = windowComponent.id;
      });

      this.windows.forEach((windowComponent, index) => {
        if (!windowsList.find(w => w.id === windowComponent.window.id)) {
          windowComponent.componentRef.destroy();
          this.windows.splice(index, 1);
        }
      });

      this.closeOpenAnimation(true);
    });
  }

  public ngOnDestroy() {
    this.modalListSubscription.unsubscribe();
  }

  public closeOpenAnimation(isOpening: boolean): void {
    this.isOpenModal = isOpening;
  }

  public destroy(windowId: string): void {
    this.windowsService.destroy(windowId);
  }
}
