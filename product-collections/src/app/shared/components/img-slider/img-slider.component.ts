import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MediaCollection } from '../../interfaces/MediaCollection'

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],

  animations: [
    trigger('move', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => left', [
        style({ transform: 'translateX(100%)' }),
        animate(200)
      ]),
      transition('left => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ]),
      transition('void => right', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('right => void', [
        animate(200, style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ImgSliderComponent implements OnInit {
  @Input() mediaCollection: Array<MediaCollection>;
  @Output() selectedImage: string;
  disableSliderBtns: boolean = false;
  state = 'void';
  previousParentElement: HTMLElement;
  previousFirstElementChild: HTMLElement;
  constructor() { }

  ngOnInit() {}
  imageRotator(arr: Array<MediaCollection>, reverse: boolean) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  }
  moveLeft() {
    if (this.disableSliderBtns) {
      return;
    }
    this.state = 'right';
    this.imageRotator(this.mediaCollection, true);
  }

  moveRight() {
    if (this.disableSliderBtns) {
      return;
    }
    this.state = 'left';
    this.imageRotator(this.mediaCollection, false);
  }

  onFinish($event, isImageSelected:boolean) {
    if(isImageSelected){
     if($event.element.nextElementSibling.getAttribute('style') == null){
      $event.element.nextElementSibling.style.opacity = '1';
      this.previousParentElement = $event.element.nextElementSibling;
     }
    }
    this.state = 'void';
    this.disableSliderBtns = false;
  }

  onStart($event) {
    this.disableSliderBtns = true;
  }
  selectedImg($event) {
    if (this.previousParentElement !== undefined && this.previousParentElement) {
      this.previousParentElement.style.opacity = '0';
    }
    if ($event) {
      $event.target.parentElement.style.opacity = '1';
      this.previousParentElement = $event.target.parentElement;      
    }    
  }
}
