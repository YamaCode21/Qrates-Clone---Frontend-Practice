import { Component, Input } from '@angular/core';

@Component({
	selector: 'oc-footer-options-column',
	templateUrl: './footer-options-column.component.html',
	styleUrls: ['./footer-options-column.component.scss'],
})
export class FooterOptionsColumnComponent {
	@Input() title: string = '';
	@Input() options: string[] = [];
}
