import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "./user.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;
  users: any[];

  constructor(private formBuilder: FormBuilder,
              // private dialogref: MatDialogRef<ContactComponent>,
              private service: UserService) {
    this.myForm = formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl(''),
      title: new FormControl(''),
      message: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(res => {
      this.users = res;
    });
  }
  submit(){
    console.log(this.myForm);

    this.service.createUser(this.myForm.getRawValue()).subscribe( res => {
      alert(res.firstName);
      // this.dialogref.close();

    });

  }

}
