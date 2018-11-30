import { Component, OnInit, Input } from '@angular/core';
import { ResponsiveSlideInterface } from 'src/app/models/ResponsiveSlideInterface';

@Component({
  selector: 'ResponsiveSlide',
  templateUrl: './responsive-slide.component.html',
  styleUrls: ['./responsive-slide.component.css']
})
export class ResponsiveSlideComponent implements OnInit {

  @Input()
  slides: Array<ResponsiveSlideInterface>;

  @Input()
  interval: number;

  title: string;
  count: number = 0;

  slideInterval: any;

  ngOnInit() {
    this.ResponsiveSlideHandle();    
    this.DestroyLoadImage();
  }

  ResponsiveSlideHandle() {

    const rslides = document.getElementById('rslides');

    this.GenerateSlide(rslides);

    this.slideInterval = setInterval(() => {
      this.IncrementCount();
      this.GenerateSlide(rslides);
      if (this.count >= this.slides.length) {
        this.ResetCount();
      }

    }, this.interval);

  }

  AnimateTitleHandle(value) {
    const rstitle = document.getElementById('rstitle');
    this.AddClass(rstitle, value);
    this.RemoveClass(rstitle, value);
  }

  GenerateSlide(rslides) {
    this.AnimateTitleHandle(this.slides[this.count].animateClass);
    rslides.style.backgroundImage = `url(${this.slides[this.count].image})`;
    this.title = this.slides[this.count].title;
  }

  ResetCount() {
    this.count = 0;
  }

  IncrementCount() {
    this.count++;
    if (this.count >= this.slides.length)
      this.ResetCount();
  }

  DecrementCount() {
    this.count--;
    if (this.count < 0)
      this.count = this.slides.length - 1
  }

  AddClass(element, _class) {
    element.classList.add(_class);
  }

  RemoveClass(element, _class) {
    setTimeout(() => {
      element.classList.remove(_class);
    }, 900);
  }

  ArrowSlidePrevious() {
    this.DecrementCount();
    const rslides = document.getElementById('rslides');
    this.GenerateSlide(rslides);
  }

  ArrowSlideNext() {
    this.IncrementCount();
    const rslides = document.getElementById('rslides');
    this.GenerateSlide(rslides);
  }

  SlideMouseOver(){
    clearInterval(this.slideInterval)
  }

  SlideMouseLeave(){
    this.ResponsiveSlideHandle();  
  }

  DestroyLoadImage(){
    document.getElementById('loadimage').remove();
  }

}
