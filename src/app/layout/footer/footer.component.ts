import { Component } from '@angular/core';

@Component({
	selector: 'oc-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	column1: string[] = [
		'Why Qrates?',
		'Crowdfunding',
		'Make & Sell',
		'Our Services',
		'Artist Toolkit',
		'Referral Program',
	];

	column2: string[] = [
		'Discover',
		'Records',
		'Stories',
		'Lists',
		'Artists & Labels',
	];

	column3: string[] = ['About Qrates', 'Careers', 'Partners'];

	column4: string[] = ['Support Center', 'Contact Us', 'Returns', 'Shipping'];
}
