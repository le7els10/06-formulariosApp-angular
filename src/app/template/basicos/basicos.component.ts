import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  validProduct = () => {
    return (
      this.myForm?.controls.producto?.invalid &&
      this.myForm?.controls.producto?.touched
    );
  };

  validPrice = () => {
    return (
      this.myForm?.controls.precio?.invalid &&
      this.myForm?.controls.precio?.touched
    );
  };

  guardar = () => {
    console.log(this.myForm);
    this.myForm.resetForm({
      precio: 0,
      existencias: 0,
    });
  };
}
