import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  public cantBe = (control: FormControl): ValidationErrors | null => {
    const valor = control.value?.trim().toLowerCase();

    if (valor === 'sharp') {
      return { cant: true };
    }

    return null;
  };

  public camposIguales = (pass1: string, pass2: string) => {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const campo1 = formGroup.get(pass1)?.value;
      const campo2 = formGroup.get(pass2)?.value;

      if (campo1 !== campo2) {
        formGroup.get(pass2)?.setErrors({ noEqual: true });
        return { noEqual: true };
      }
      return null;
    };
  };
}
