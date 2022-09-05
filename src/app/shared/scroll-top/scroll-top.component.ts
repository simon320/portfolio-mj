import { Component, HostListener, Inject, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styles: [
  ]
})
export class ScrollTopComponent implements OnInit {

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

}
