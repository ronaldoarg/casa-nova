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

	popup: any;

	constructor(private renderer: Renderer2) {
		this.popup = {
			title: `Muito obrigado(a)`,
			subtitle: `Somos muito sortudos por termos tanta gente massa como você a nossa volta. Não vemos a hora de poder te receber na nossa nova casinha e retribuir todo esse carinho <3`
		}
	}

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
