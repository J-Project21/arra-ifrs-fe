import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'form-handler',
  templateUrl: './form-handler.component.html',
  styleUrls: ['./form-handler.component.scss'],
})
export class FormHandlerComponent implements OnInit {
  @Input('formCode') formCode!: string;

  constructor(
    private formService: FormService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formCode = this.activatedRouter.snapshot.params['formCode'];
    this.formService.getFormInfo(this.formCode).subscribe((res) => {
      console.log(res);
    });
  }
}
