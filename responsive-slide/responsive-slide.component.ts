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

  ngOnInit() {
    this.ResponsiveSlideHandle();
  }

  ResponsiveSlideHandle() {

    const rslides = document.getElementById('rslides');

    this.GenerateSlide(rslides);

    setInterval(() => {
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
    this.IncrementCount();
  }

  ResetCount() {
    this.count = 0;
  }

  IncrementCount() {
    this.count++;
  }

  AddClass(element, _class) {
    element.classList.add(_class);
  }

  RemoveClass(element, _class) {
    setTimeout(() => {
      element.classList.remove(_class);
    }, 900);
  }

}
