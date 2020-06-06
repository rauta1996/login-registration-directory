import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  submitted = false;
  regForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.fb.group({
      username:'',
      email:'',
      password:''
    })
  }
  register(data){
    localStorage.setItem("Data",stringify(this.regForm.value));
    this.regForm.reset(data);
  }
}
