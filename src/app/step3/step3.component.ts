import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  stepThreeForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.stepThreeForm = this.fb.group({
      bank: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(12),
        ],
      ],
    });
  }
  get bank() {
    return this.stepThreeForm.get('bank');
  }
  ngOnInit(): void {}
}
