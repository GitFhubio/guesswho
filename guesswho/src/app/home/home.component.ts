import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainService } from '../main.service';
import { Vip } from '../models/vip';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  quest:string;
  par:any;
  visible:boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myinput:string="";
  random:Vip=new Vip();
  finale:(string|boolean)[]=[];
  score:number=100000;
  tiles: Tile[] = [];
  clicked:boolean=false;
  constructor(public mservice:MainService) { }

  ngOnInit(): void {
    this.randomVip();
  }

  randomVip(){
    this.mservice.downloadVips().subscribe({next: (res) => {
      this.random= res.result[Math.floor(Math.random() * res.result.length)]},
       complete: () => {
        this.tiles= [
        {quest:'è nato/a nel ' ,text: '1', cols: 3, rows: 1, color: 'lightblue',par:this.random.birth_year,visible:false},
        {quest:'è di sesso ', text: '2', cols: 1, rows: 2, color: 'violet',par:this.random.genre,visible:false},
        {quest:'è nato/a a ',text: '3', cols: 1, rows: 1, color: 'lightpink',par:this.random.birth_place,visible:false},
        {quest:'ha i capelli di colore ',text: '4', cols: 2, rows: 1, color: '#DDBDF1',par:this.random.hair_color,visible:false},
        {quest:'attualmente ' ,text: '5', cols: 1, rows: 2, color: '#FFFFE0',par:this.random.job,visible:false},
        {quest:'sposato ', text: '6', cols: 1, rows: 2, color: '#F5DEB3',par:this.random.married,visible:false},
        {quest:'personaggio di fantasia ',text: '7', cols: 2, rows: 1, color: 'gold',par:this.random.fantasy,visible:false},
        {quest:'vivo ',text: '8', cols: 1, rows: 1, color: '#E6E6FA',par:this.random.alive,visible:false},
        {quest:'ha la pelle ',text: '9', cols: 1, rows: 1, color: '#FFA07A',par:this.random.skin,visible:false},
      ];}})
  }
  // reveal(el:HTMLSpanElement){
  // el.style.display="block";
  // this.score=this.score - 10000;
  // }
 show(ind:number){
 this.tiles.forEach((element,index) => {
   if(ind==index){
     element.visible=true;
   }
 });
   this.score=this.score - 10000;
  }
  answer(){
    let randompersona = this.random.name?.toLowerCase() +" "+this.random.lastname?.toLowerCase();
    console.log(randompersona,this.myinput);
  if(randompersona == this.myinput.toLowerCase()){
    this.finale[0] ="Complimenti, hai vinto " +this.score+"$ !";
    this.finale[1]=true;
  }
  else {
    this.finale[0]="Hai perso. Il personaggio misterioso era "+randompersona+" !";
    this.finale[1]=false;
  }
  setTimeout(() => {
    window.location.reload();
  }, 5000);
  }

    // genre?:string;
    // birth_place?:string;
    // hair_color?:string;
    // job?:string;
    // married?:boolean;
    // fantasy?:boolean;
    // alive?:boolean;
    // skin?:string;


}
