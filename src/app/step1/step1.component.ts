import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  password1: string = '';
  showPassword: boolean = false;
  stepOneForm: FormGroup;
  togglePasswordVisibility(event: Event) {
    event?.preventDefault();
    this.showPassword = !this.showPassword;
  }
  onSubmitBtn() {
    if (this.stepOneForm.valid) {
      console.log(this.stepOneForm.value);
    } else {
      console.log('Form is Invalid yet');
    }
  }

  constructor(private fb: FormBuilder) {
    this.stepOneForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      checkbox: ['', [Validators.required, Validators.requiredTrue]],
    });
  }
  get fullname() {
    return this.stepOneForm.get('fullName');
  }
  get email() {
    return this.stepOneForm.get('email');
  }
  get password() {
    return this.stepOneForm.get('password');
  }

  ngOnInit(): void {
    // localStorage.setItem('fullname', this.stepOneForm.get('fullname')?.value);
    // document.getElementById('fullname').innerHTML =
    //   localStorage.getItem('fullname');
  }
}
