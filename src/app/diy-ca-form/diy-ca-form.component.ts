import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MerchantService } from '../merchant/merchant.service';
@Component({
  selector: 'app-diy-ca-form',
  templateUrl: './diy-ca-form.component.html',
  styleUrls: ['./diy-ca-form.component.css'],
})
export class DiyCaFormComponent {
  title = 'Angular Form Validation Tutorial';

  diyForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required]),
  });

  constructor(
    private merchantService: MerchantService,
    private router: Router
  ) {}

  get name() {
    return this.diyForm.get('name');
  }

  get email() {
    return this.diyForm.get('email');
  }

  get mobile() {
    return this.diyForm.get('mobile');
  }

  createMerchant() {
    console.warn('Form submitted', this.diyForm.value);
    this.merchantService.create(this.diyForm.value).subscribe({
      next: (data) => {
        alert(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
