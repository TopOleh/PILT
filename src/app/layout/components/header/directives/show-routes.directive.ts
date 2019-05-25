import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[piltShowRoutes]'
})
export class ShowRoutesDirective {

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    const childRoutes = this._elementRef.nativeElement.querySelector('.pilt-navigation__dropdown');
    this.renderer.setStyle(childRoutes, 'display', 'block');
  }

  @HostListener('mouseleave') onMouseLeave() {
    const childRoutes = this._elementRef.nativeElement.querySelector('.pilt-navigation__dropdown');
    this.renderer.setStyle(childRoutes, 'display', 'none');
  }

}
