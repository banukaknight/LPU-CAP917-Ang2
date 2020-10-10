import { Component, OnInit } from '@angular/core';
//by bk
import {Class1} from '../class1';

@Component({
  selector: 'app-form3-validate',
  templateUrl: './form3-validate.component.html',
  styleUrls: ['./form3-validate.component.css']
})
export class Form3ValidateComponent implements OnInit {

  myObj1 = new Class1("Dave Chappel","123456789","Galle","23215324","International",true);


  constructor() { }

  ngOnInit(): void {
  }

}
