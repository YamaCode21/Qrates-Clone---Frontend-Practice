import { Component, Input } from '@angular/core';

@Component({
	selector: 'oc-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
	@Input() text: string = '';
	@Input() type: string = 'primary';
}
