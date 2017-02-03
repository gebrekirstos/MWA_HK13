import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'myList',
  host:{
     '(myList)':'ref.nativeElement.value=$event.target.value.toUpperCase()',
  }
})
export class UpperCaseText{
    constructor(private ref:ElementRef){

    }
}