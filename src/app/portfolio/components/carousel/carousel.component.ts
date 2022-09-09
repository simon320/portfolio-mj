import { Component, Input, Output, EventEmitter } from '@angular/core';

interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {


  @Input() images: carouselImages[] = [];
  @Input() indicators: boolean = false;
  @Input() controls: boolean = true;
  @Input() showCarousel: boolean = false;
  @Input() indexImg!: number;
  @Output() outputCarousel = new EventEmitter();

  selectedIndex = 0;

  ngOnChanges(): void {
    this.selectImage( this.indexImg )
  }

  selectImage( index: number ): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    console.log(this.selectedIndex)
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length -1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  close(){
    this.outputCarousel.emit(false);
  }

}
