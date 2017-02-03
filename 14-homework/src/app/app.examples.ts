import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template:`
    <h1 *ngIf="showHeading"> My First Angular 2 App </h1>
    <ul>
        <li myList *ngFor="let color of colors">
            {{color | uppercase}}
        </li>
    </ul>
    `
})
export class CompExamples{
    private showHeading;
    private name;
    private colors;
    constructor(){
        this.showHeading=true;
        this.name="gere";
        this.colors=["Red","Blue","Green"];
    }
}