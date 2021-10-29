import { Component, OnInit } from '@angular/core';
import { Header } from './header.type';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	header: Header;

	constructor() {
		this.header = {
			title: `Casa nova Gigi & Naldin`,
			subtitle: `oi, amigos! :) como muitos já sabem, chegou a hora em que decidimos ter nosso cantinho e nada
						mais justo que ele tenha a nossa cara. a vontade era de fazer um encontro pra celebrar essa nova fase com drinks e
						comidinhas, mas, por falta de vacina, isso não vai ser possível (pelo menos por enquanto), daí que abrimos esse
						espaço caso queiram/possam nos presentear e ajudar na construção da nossa casinha. estamos com saudade e ansiosos
						pra te receber assim que possível! <3 `
		}
	}

	ngOnInit() {
	}

}
