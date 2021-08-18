import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('el pepe'),
  //   price: new FormControl(1500),
  //   exists: new FormControl(5),
  // });

  myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.min(0), Validators.required]],
    exists: [, [Validators.min(0), Validators.required]],
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.setValue({
      name: 'el pepe',
      price: 5000,
      exists: 5,
    });
  }

  validateFields = (field: string) => {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  };

  guardar = () => {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
  };
}
