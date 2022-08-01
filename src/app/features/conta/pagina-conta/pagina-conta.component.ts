import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-conta',
  templateUrl: './pagina-conta.component.html'
})
export class PaginaContaComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Angular Template');
  }

}
