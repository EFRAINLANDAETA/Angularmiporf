import { Component,  Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-mod-g',
  templateUrl: './barra-mod-g.component.html',
  styleUrls: ['./barra-mod-g.component.css']
})
export class BarraModGComponent implements OnInit {
  @Input() progressg: number = 0;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgressg = document.getElementById("progressg") as HTMLElement;
     scrollProgressg.style.background = `conic-gradient(from 270deg, rgb(10, 214, 10) ${this.progressg}%, rgb(101, 227, 236, 0.3) ${this.progressg}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}