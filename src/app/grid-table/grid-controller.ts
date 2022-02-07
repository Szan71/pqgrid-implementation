import { Injector } from '@angular/core';
import { AppController } from './../app-controller';

export class GridController extends AppController{
  constructor(public override injector: Injector){
    super(injector);
  };
}