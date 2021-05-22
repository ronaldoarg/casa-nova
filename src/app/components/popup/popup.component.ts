import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() qrcode: string;
  @Input() isVisible: boolean;
  @Output() update: EventEmitter<boolean> = new EventEmitter();

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.isVisible) {
      this.renderer.addClass(document.body, 'no-overflow');
    } else {
      this.renderer.removeClass(document.body, 'no-overflow');
    }
  }

}
