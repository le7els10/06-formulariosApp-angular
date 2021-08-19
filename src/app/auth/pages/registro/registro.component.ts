import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  myForm: FormGroup = this._fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this._validationService.namePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this._validationService.emailPattern),
        ],
        [this._emailValidator],
      ],
      user: ['', [Validators.required, this._validationService.cantBe]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      pass2: ['', [Validators.required]],
    },
    {
      validators: [this._validationService.camposIguales('pass', 'pass2')],
    }
  );

  constructor(
    private _fb: FormBuilder,
    private _validationService: ValidatorService,
    private _emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.myForm.reset({
      // email: 'le7els10@gmail.com',
      email: 'test1@test.com',
    });
  }

  campoNoValido = (campo: string) => {
    return this.myForm.get(campo)?.invalid && this.myForm.get(campo)?.touched;
  };

  submitForm = () => {
    this.myForm.markAllAsTouched();
  };
}
