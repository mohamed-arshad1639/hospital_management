import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    email:['',[Validators.required,Validators.email]],
    query:['',[Validators.required,Validators.pattern('[A-Za-z0-9.,/ ]*')]],
    phone:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    msg:['',[Validators.required]]
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
