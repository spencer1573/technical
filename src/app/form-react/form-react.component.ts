import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.css']
})
export class FormReactComponent implements OnInit {
  theForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.theForm = this.fb.group({
      name: ['', Validators.required ],
    });
  }
  ngOnInit() {
  }

}
