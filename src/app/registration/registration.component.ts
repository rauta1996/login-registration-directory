import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

}
