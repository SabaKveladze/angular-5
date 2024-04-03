import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility(event: Event) {
    event?.preventDefault();
    this.showPassword = !this.showPassword;
  }

  constructor() {}

  ngOnInit(): void {}
}
