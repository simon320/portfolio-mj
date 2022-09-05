import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  title = 'carousel';

  images = [
    {
      imageSrc: '../../../../assets/personal/DSC_7993.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/DSC_7994.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/DSC_9610.jpg',
      imageAlt: 'foto',
    },
    {
      imageSrc: '../../../../assets/personal/DSC_9611.jpg',
      imageAlt: 'foto',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
