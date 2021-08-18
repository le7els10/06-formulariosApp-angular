import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  @ViewChild('myForm') myForm!: NgForm;

  validProduct = () => {
    return (
      this.myForm?.controls.name?.invalid && this.myForm?.controls.name?.touched
    );
  };

  guardar = () => {
    console.log('here');
  };
}
