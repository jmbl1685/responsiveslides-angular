import { Component, OnInit } from "@angular/core";
import { ResponsiveSlideInterface } from "./models/ResponsiveSlideInterface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  slides: Array<ResponsiveSlideInterface>;

  constructor() {

    this.slides = [
      {
        image: "assets/img/img_001.jpg",
        animateClass: "fadeInRight",
        title: "Where there is love there is life.",
      },
      {
        image: "assets/img/img_002.jpg",
        title: "Once you choose hope, anything’s possible.",
        animateClass: "fadeInUp"
      },
      {
        image: "assets/img/img_003.jpg",
        title: "I will go anywhere as long as it is forward",
        animateClass: "zoomIn"
      },
      {
        image: "assets/img/img_004.jpg",
        title: "You change your life by changing your heart",
        animateClass: "flipInX"
      },
      {
        image: "assets/img/img_005.jpg",
        title: "The best way to pay for a lovely moment is to enjoy it",
        animateClass: "fadeInUp"
      }
    ]

  }


}
