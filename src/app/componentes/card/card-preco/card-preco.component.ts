import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-preco',
  templateUrl: './card-preco.component.html',
  styleUrls: ['./card-preco.component.css']
})
export class CardPrecoComponent implements OnInit {

  @Input()
  gameType:string ='Digital PS4'
  @Input()
  gamePrice:string = '169,90'
  constructor () {}


  ngOnInit(): void {

  }

}
