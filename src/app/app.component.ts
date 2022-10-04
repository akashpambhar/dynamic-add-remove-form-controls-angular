import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';

  constructor(private fb: FormBuilder) { }

  form1 = this.fb.group({
    // other controls

    dynamic_field: this.fb.array([])
  })

  get dynamic_field() {
    return this.form1.controls['dynamic_field'] as FormArray;
  }

  addField() {
    const field = this.fb.control('');
    this.dynamic_field.push(field);
  }

  removeField(i: number) {
    this.dynamic_field.removeAt(i);
  }
}
