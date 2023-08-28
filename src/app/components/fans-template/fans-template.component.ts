import { Component, Input } from '@angular/core';

@Component({
  selector: 'oc-fans-template',
  templateUrl: './fans-template.component.html',
  styleUrls: ['./fans-template.component.scss']
})
export class FansTemplateComponent {
  @Input() type: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() textbtn1: string = '';
  @Input() textbtn2: string = '';
  @Input() backgroundColor: string = '';
  @Input() img1: string = '';
  @Input() alt1: string = '';
  @Input() flexDirection: string = '';
}
