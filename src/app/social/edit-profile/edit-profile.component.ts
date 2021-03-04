import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from "../service/communicator.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  personalInfoGroup: FormGroup;
  boarderInfoGroup: FormGroup;
  addressDetailsGroup: FormGroup;

  constructor(
    private comm : CommunicatorService
  ) { }

  ngOnInit(): void {
    this.personalInfoGroup = new FormGroup({
      fname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      contact: new FormControl('', [Validators.required])
    });

    this.addressDetailsGroup = new FormGroup({
      street: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      dist: new FormControl('',[Validators.required]),
      pin: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required])
    });

    this.boarderInfoGroup = new FormGroup({
      app_id: new FormControl('',[Validators.required]),
      doa: new FormControl('',[Validators.required]),
      course: new FormControl('',[Validators.required]),
      dept: new FormControl('',[Validators.required]),
      session_start: new FormControl('', [Validators.required]),
      session_end: new FormControl('')
    })
  }

  public initSignup() {

  }

  public savePersonalDetails(){
    console.log(this.personalInfoGroup.value);
  }
  public saveAddressDetails(){
    console.log(this.addressDetailsGroup.value);
  }
  public saveBoarderDetails(){
    console.log(this.boarderInfoGroup.value);
  }
}
