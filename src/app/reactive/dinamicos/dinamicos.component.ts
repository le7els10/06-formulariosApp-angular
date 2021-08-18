import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  myForm: FormGroup = this._fb.group({
    name: ['el pepe', [Validators.required, Validators.minLength(3)]],
  });
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

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
    console.log(this.myForm.value);

    this.myForm.reset();
  };
}
