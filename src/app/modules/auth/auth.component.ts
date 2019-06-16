import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from 'src/app/core/services';

@Component({
  selector: 'pilt-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public breakpoint: number;
  constructor(private breakpointsService: BreakpointsService) { }

  ngOnInit() {
    this.breakpoint = (this.breakpointsService.checkSmallTabletView()) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (this.breakpointsService.checkSmallTabletView()) ? 1 : 2;
  }
}
