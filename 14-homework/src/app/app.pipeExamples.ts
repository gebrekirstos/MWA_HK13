import {Component} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
    selector:'my-app2',
    template:`<h1 [ngStyle]="{'background-color':'yellow'}"> My Second Angular 2 App </h1>
    <h2> {{name | uppercase}} </h2>
    `
})
export class PipeComponent{
    private name;
    constructor(){
        this.name="gere";
    }
}