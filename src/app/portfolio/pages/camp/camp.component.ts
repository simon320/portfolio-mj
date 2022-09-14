import { Component } from '@angular/core';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent {

  carousel: boolean = false;
  indexImg: number = 0;

  images = [
    {
      imageSrc: '../../../../assets/camp/camp-1.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-2.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-3.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-4.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-5.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-6.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-7.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-8.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-9.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-10.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-11.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-12.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-13.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-14.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-15.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-16.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-17.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-18.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-19.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-20.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-21.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-22.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-23.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-24.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/camp/camp-25.jpg',
      imageAlt: 'foto'
    },
  ]

  showCarousel( index: number): void {
    this.carousel = true;
    this.indexImg = index;
  }

  hideCarousel(e: boolean): void {
    this.carousel = e;
  }
}
