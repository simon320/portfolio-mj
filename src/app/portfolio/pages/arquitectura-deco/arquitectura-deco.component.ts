import { Component, HostListener, Inject, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-arquitectura-deco',
  templateUrl: './arquitectura-deco.component.html',
  styleUrls: [ './arquitectura-deco.scss' ]
  
})
export class ArquitecturaDecoComponent implements OnInit {

  windowScroller!: boolean;

  constructor( @Inject(DOCUMENT) private document: Document ) { }
  scrollToTop(): void {
    (function smoothscroll(): void {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if( currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })()
  }


  ngOnInit(): void {
  }



  backToTop() {
    console.log('Hola')
    window.scrollTo(0,0);
  }

}
