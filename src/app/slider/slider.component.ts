import { Component, OnInit } from '@angular/core';
import { SlideInLeft, SlideInRight } from '../animate';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [SlideInLeft, SlideInRight]
})
export class SliderComponent implements OnInit {
  cur = 0;
  slides = [{ imgLink: "assets/img/men-jacket/1.webp", position: 'absolute', title: "SPRING DENIM", text: "Starting at $22.90", hide: false, show: true, link: "products/men/denim-jeans" },
  { imgLink: "assets/img/1.webp", position: 'unset', title: "SPRING COLLECTION", text: "Starting at $10.00", hide: true, show: false, link: "products/women/all" }];


  constructor() { }

  ngOnInit() {
  }
  prev() {
    if (this.cur - 1 === -1) {
      this.slides[this.cur].hide = true;
      this.slides[this.cur].show = false;
      this.cur = this.slides.length - 1;
      this.slides[this.cur].hide = false;
      this.slides[this.cur].show = true;

    } else {
      this.slides[this.cur].hide = true;
      this.slides[this.cur].show = false;
      this.slides[this.cur - 1].hide = false;
      this.slides[this.cur - 1].show = true;
      this.cur -= 1;
    }
  }
  next() {

    if (this.cur + 1 === this.slides.length) {
      this.slides[this.cur].hide = true;
      this.slides[this.cur].show = false;
      this.cur = 0;
      this.slides[this.cur].hide = false;
      this.slides[this.cur].show = true;

    } else {
      this.slides[this.cur].hide = true;
      this.slides[this.cur].show = false;
      this.slides[this.cur + 1].hide = false;
      this.slides[this.cur + 1].show = true;
      this.cur += 1;
    }

  }




}