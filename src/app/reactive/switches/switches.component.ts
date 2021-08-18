import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent {
  myForm: FormGroup = this._fb.group({});

  constructor(private _fb: FormBuilder) {}
}
