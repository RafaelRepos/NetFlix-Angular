import { sectionFilmsInterface } from './../../models/films.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() public films!: sectionFilmsInterface;
  public numeros: any = [
    {src:"src/assets/images/numeros/1.png"},
    {src:"src/assets/images/numeros/2.png"},
    {src:"src/assets/images/numeros/3.png"},
    {src:"src/assets/images/numeros/4.png"},
    {src:"src/assets/images/numeros/5.png"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
