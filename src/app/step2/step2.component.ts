import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  countries = [
    { name: 'Georgia', code: 'GE' },
    { name: 'United Kingdom', code: 'UK' },
    { name: 'Canada', code: 'CA' },
    { name: 'Australia', code: 'AU' },
  ];

  selectedCountry: any;

  constructor() {}

  ngOnInit(): void {}
}
