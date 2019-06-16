import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {

  constructor() { }

  public checkMobileView(): boolean {
    return window.innerWidth < 640 ? true : false;
  }

  public checkSmallTabletView(): boolean {
    return window.innerWidth < 960 ? true : false;
  }
}
