import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
login(obj:NgForm){
  console.log(obj.value);
}
  constructor() { }

  ngOnInit(): void {
  }

}
