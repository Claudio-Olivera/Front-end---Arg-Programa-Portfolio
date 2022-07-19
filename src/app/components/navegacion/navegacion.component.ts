import { Component, OnInit } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  isMenuCollapsed:any=true
  
  constructor() { }
  
  ngOnInit(): void {
  }

  get public() { 
    return this.isMenuCollapsed 
  }

}
