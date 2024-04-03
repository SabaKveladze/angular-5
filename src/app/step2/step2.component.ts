import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  stepTwoForm: FormGroup;
  countries = [
    { name: 'Georgia', code: 'GE' },
    { name: 'United Kingdom', code: 'UK' },
    { name: 'Canada', code: 'CA' },
    { name: 'Australia', code: 'AU' },
  ];
  onSubmitBtn() {
    if (this.stepTwoForm.valid) {
      console.log(this.stepTwoForm.value);
    } else {
      console.log('Form is Invalid yet');
    }
  }
  selectedCountry: any;

  constructor(private fb: FormBuilder) {
    this.stepTwoForm = this.fb.group({
      mobilenom: [
        '',
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.minLength(12),
        ],
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(25),
        ],
      ],
      country: ['', [Validators.required]],
    });
  }
  get mobilenom() {
    return this.stepTwoForm.get('mobilenom');
  }
  get address() {
    return this.stepTwoForm.get('address');
  }
  get country() {
    return this.stepTwoForm.get('country');
  }

  ngOnInit(): void {}
}
