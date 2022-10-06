import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {

  @ViewChild('scroll') scroll!: ElementRef;

  carousel: boolean = false;
  indexImg: number = 0;

  images = [
    {
      imageSrc: '../../../../assets/personal/personal-1.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/personal-2.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/personal-3.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/personal-4.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/personal-5.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/personal-6.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/personal-7.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/personal-8.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/personal-9.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/personal-10.jpg',
      imageAlt: 'foto',
    }
  ]

  showCarousel( index: number): void {
    this.carousel = true;
    this.indexImg = index;
  }

  hideCarousel(e: boolean): void {
    this.carousel = e;
  }

  scrollTop() {
    this.scroll.nativeElement.scrollTop = 0;
  }
}
