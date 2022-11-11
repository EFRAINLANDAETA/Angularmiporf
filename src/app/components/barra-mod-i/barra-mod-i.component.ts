import { Component,  Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-mod-i',
  templateUrl: './barra-mod-i.component.html',
  styleUrls: ['./barra-mod-i.component.css']
})
export class BarraModIComponent implements OnInit {
  @Input() progressi: number = 0;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgressi = document.getElementById("progressi") as HTMLElement;
     scrollProgressi.style.background = `conic-gradient(from 270deg, rgb(10, 214, 10) ${this.progressi}%, rgb(101, 227, 236, 0.3) ${this.progressi}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}
