import { Component, Input } from '@angular/core';

@Component({
	selector: 'oc-nav-sub-item',
	templateUrl: './nav-sub-item.component.html',
	styleUrls: ['./nav-sub-item.component.scss'],
})
export class NavSubItemComponent {
	@Input() text: string = '#';
	@Input() link: string = '';
	@Input() subListItems: string[] = [];
}
