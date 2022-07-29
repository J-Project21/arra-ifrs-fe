import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  formCode = 'Form';
  formTitle = 'Form Title';
  formSubtitle = 'Form Description';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.formCode = this.activatedRoute.snapshot.params['formCode'];
  }
}
