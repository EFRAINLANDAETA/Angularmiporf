import { Component,  Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-mod-h',
  templateUrl: './barra-mod-h.component.html',
  styleUrls: ['./barra-mod-h.component.css']
})
export class BarraModHComponent implements OnInit {
  @Input() progressh: number = 0;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgressh = document.getElementById("progressh") as HTMLElement;
     scrollProgressh.style.background = `conic-gradient(from 270deg, rgb(10, 214, 10) ${this.progressh}%, rgb(101, 227, 236, 0.3) ${this.progressh}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}