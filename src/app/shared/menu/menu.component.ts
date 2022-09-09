import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild('menuNav') menuNav!: ElementRef;

  constructor( private render: Renderer2) {}

  showMenu(): void {
    const menuNav = this.menuNav.nativeElement;
    this.render.addClass(menuNav, 'show-menu');
  }

  hideMenu(){
    const menuNav = this.menuNav.nativeElement;
    this.render.removeClass(menuNav, 'show-menu');
  }

}
