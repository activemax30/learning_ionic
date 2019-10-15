import { Component, OnInit } from '@angular/core';
import {trigger, keyframes, animate, transition} from '@angular/animations';
import * as kf from './keyframes' ;

@Component({
  selector: 'app-oahu',
  templateUrl: './oahu.page.html',
  styleUrls: ['./oahu.page.scss'],
  animations: [
    trigger('cardAnimator', [
      // transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      // transition('* => jello', animate(1000, keyframes(kf.jello))),
      // transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      // transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      // transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ])
  ]
})
export class OahuPage implements OnInit {
  animationState: string;

  constructor() { }

  ngOnInit() {
  }
  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
