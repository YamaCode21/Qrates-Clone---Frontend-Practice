import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'oc-studio-section',
	templateUrl: './studio-section.component.html',
	styleUrls: ['./studio-section.component.scss'],
})
export class StudioSectionComponent implements OnInit {
	sliderImages = [
		'assets/images/slider_1.webp',
		'assets/images/slider_2.webp',
		'assets/images/slider_3.webp',
		'assets/images/slider_4.webp',
		'assets/images/slider_5.webp',
		'assets/images/slider_6.webp',
		'assets/images/slider_7.webp',
		'assets/images/slider_8.webp',
	];

	currentImageIndex = 0;

	ngOnInit() {
		this.startSliderAnimation();
	}

	startSliderAnimation() {
		setInterval(() => {
			this.currentImageIndex =
				(this.currentImageIndex + 1) % this.sliderImages.length;
		}, 1500);
	}
}
