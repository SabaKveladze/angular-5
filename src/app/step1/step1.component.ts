import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  password: string = '';
  showPassword: boolean = false;
  stepOneForm: FormGroup;
  togglePasswordVisibility(event: Event) {
    event?.preventDefault();
    this.showPassword = !this.showPassword;
  }

  constructor(private fb: FormBuilder) {
    this.stepOneForm = this.fb.group({
      fullName: [''],
      email: [''],
    });
  }

  ngOnInit(): void {}
}
