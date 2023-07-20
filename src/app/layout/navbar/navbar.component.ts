import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'oc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('sublist') subListRef!: ElementRef;
  @ViewChild('dropdown') dropDowntRef!: ElementRef;

  toggleSublistVisibility() {
    const subListElement: HTMLElement = this.subListRef.nativeElement;
    const dropDowntElement: HTMLElement = this.dropDowntRef.nativeElement;
    subListElement.classList.toggle('active');
    dropDowntElement.classList.toggle('active');
  }
}