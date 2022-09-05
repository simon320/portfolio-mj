import { Component, OnInit, Input } from '@angular/core';

interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {


  @Input() images: carouselImages[] = [];
  @Input() indicators: boolean = true;

  selectedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  selectImage( index: number ) {
    this.selectedIndex = index;
  }

}
