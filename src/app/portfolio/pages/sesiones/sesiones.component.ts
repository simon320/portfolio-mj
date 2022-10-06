import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.scss']
})
export class SesionesComponent {

  @ViewChild('scroll') scroll!: ElementRef;

  carousel: boolean = false;
  indexImg: number = 0;

  images = [
    {
      imageSrc: '../../../../assets/sesiones/sesiones-1.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-2.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-3.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-4.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-5.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-6.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-7.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-8.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-9.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-10.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-11.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-12.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-13.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-14.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-15.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-16.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-17.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/sesiones/sesiones-18.png',
      imageAlt: 'foto'
    }
  ]

  showCarousel( index: number) {
    this.carousel = true;
    this.indexImg = index;
  }

  hideCarousel(e: boolean){
    this.carousel = e;
  }

  scrollTop() {
    this.scroll.nativeElement.scrollTop = 0;
  }
}
