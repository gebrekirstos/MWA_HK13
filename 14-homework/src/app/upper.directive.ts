import {Directive, ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective implements AfterViewInit{

  constructor(private element : ElementRef) {}

  ngAfterViewInit() {
    var items = this.element.nativeElement.innerText;
    this.element.nativeElement.innerText = items.toUpperCase();
  }
}
