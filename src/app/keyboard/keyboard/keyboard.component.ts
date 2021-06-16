import { Component, OnInit, OnDestroy, HostListener, HostBinding, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  @HostBinding('class.shown')
   shown: boolean = false;

   keyboardSubscription!: Subscription;

  constructor(public el: ElementRef,  public keyboard: KeyboardService) {
    keyboard.shift = true;
  }

  ngOnInit() {
    this.onShift();
    this.keyboardSubscription = this.keyboard.keyboardRequested.subscribe(show => {
      if (show) {
        this.shown = true;
      }
      else {
        this.shown = false;
      }
    });
  }

  ngOnDestroy() {
    this.keyboardSubscription.unsubscribe();
  }

  onShift() {
    this.keyboard.shift = true;
  }

  onAlt() {
    this.keyboard.alt = !this.keyboard.alt;
    this.keyboard.shift = false;
  }

  onBackspace() {
    this.keyboard.fireBackspacePressed();
  }

  onEnter() {
    this.keyboard.fireEnterPressed();
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('click', ['$event'])
  onMouseEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}