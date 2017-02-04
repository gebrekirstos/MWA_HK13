
import { Component, Input } from '@angular/core';

@Component({
  selector : 'custom',
  templateUrl : './custom/custom.component.html'
})

export class CustomListComponent {
  @Input() stringList : string[];

}
