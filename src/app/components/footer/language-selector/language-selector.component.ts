import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'oc-language-selector',
	templateUrl: './language-selector.component.html',
	styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
	@ViewChild('selector') selectorRef!: ElementRef;
	@ViewChild('dropdown') dropDowntRef!: ElementRef;

	toggleOptionsVisibility() {
		const selectorElement: HTMLElement = this.selectorRef.nativeElement;
		const dropDowntElement: HTMLElement = this.dropDowntRef.nativeElement;
		selectorElement.classList.toggle('active');
		dropDowntElement.classList.toggle('active');
	}
}
