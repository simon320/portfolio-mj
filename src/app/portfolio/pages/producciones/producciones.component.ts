import { Component } from '@angular/core';

@Component({
  selector: 'app-producciones',
  templateUrl: './producciones.component.html',
  styleUrls: ['./producciones.scss']
})
export class ProduccionesComponent {

  carousel: boolean = false;
  indexImg: number = 0;

  images = [
    {
      imageSrc: '../../../../assets/producciones/prod-1.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-2.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-3.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-4.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-5.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-6.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-7.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-8.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-9.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-10.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-11.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-12.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-13.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-14.jpg',
      imageAlt: 'foto'
    },
    {
      imageSrc: '../../../../assets/producciones/prod-15.jpg',
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
