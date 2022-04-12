//#region Imports

import { ComponentFactory, ComponentFactoryResolver, Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { generateRandomString } from '../../utils/random-string';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class WindowsService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  public modalsList: BehaviorSubject<CreateWindowInterface[]> = new BehaviorSubject<CreateWindowInterface[]>([]);

  public create(component: Type<any>, options?: any): string {
    const id = generateRandomString(6);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.modalsList.next([...this.modalsList.value, { id, component: componentFactory, options }]);
    return id;
  }

  public destroy(id: string): void {
    const modal = this.modalsList.value.find(m => m.id === id);
    this.modalsList.value.splice(this.modalsList.value.indexOf(modal), 1);
    this.modalsList.next(this.modalsList.value);
  }
}

export interface CreateWindowInterface {
  id: string;
  component: ComponentFactory<any>;
  options?: {
    componentProps: Record<string, any>;
  };
}
