import { Component } from '@angular/core';

@Component({
  selector: 'app-arquitectura-deco',
  templateUrl: './arquitectura-deco.component.html',
  styleUrls: [ './arquitectura-deco.scss' ]
  
})
export class ArquitecturaDecoComponent {

  carousel: boolean = false;
  indexImg: number = 0;

  images = [
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-1.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-2.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-3.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-4.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-5.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-6.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-7.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-8.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-9.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-10.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-11.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-12.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-13.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-14.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/arquitectura/arquitectura-15.jpg',
      imageAlt: 'foto'
    },
  ]

  showCarousel( index: number) {
    this.carousel = true;
    this.indexImg = index;
  }

  hideCarousel(e: boolean){
    this.carousel = e;
  }

}
