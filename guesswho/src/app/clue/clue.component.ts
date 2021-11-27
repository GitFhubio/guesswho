import { Component, Input, OnInit } from '@angular/core';
import { Vip } from '../models/vip';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.scss']
})
export class ClueComponent implements OnInit {
@Input() param:any;
@Input() quest:string="";
// showAnswer:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
//   unveil(){
//  this.showAnswer=true;
//   }

}
