import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
	selector: 'oc-nav-item',
	templateUrl: './nav-item.component.html',
	styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
	@Input() text: string = '';
	@Input() subListItems: string[] = [];
	@Input() activeSubList: boolean = false;

	@ViewChild('sublist') subListRef!: ElementRef;
	@ViewChild('dropdown') dropDowntRef!: ElementRef;

	toggleSublistVisibility() {
		const subListElement: HTMLElement = this.subListRef.nativeElement;
		const dropDowntElement: HTMLElement = this.dropDowntRef.nativeElement;
		subListElement.classList.toggle('active');
		dropDowntElement.classList.toggle('active');
	}
}
