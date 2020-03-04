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
  slides = [{ imgLink: "../../assets/img/product/3.webp", position: 'absolute', title: "PARLO", text: "fasfasfasfasfasfasfasfasfdsafasf", hide: false, show: true },
  { imgLink: "../../assets/img/1.webp", position: 'unset', title: "hedheh", text: "hahahahah", hide: true, show: false }];


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

    console.log(this.cur)
    console.log(this.slides.length)
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
  animate(e) {
    console.log("i am started", e)
  }
  animate2(e) {
    console.log("i am ended", e)
  }



}