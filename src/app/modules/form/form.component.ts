import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/services/form.service';
import { from, Observable, tap } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formCode!: string;
  formControl$!: Observable<any>;
  tableData$!: Observable<any>;

  tableParam: NzTableQueryParams = {
    pageIndex: 1,
    pageSize: 10,
    sort: [],
    filter: [],
  };

  constructor(
    private formService: FormService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formControl$ = this.activatedRoute.params.pipe(
      switchMap((par) => {
        this.formCode = par['formCode'];
        return this.formService.getFormInfo(this.formCode).pipe(
          tap((form: any) => {
            console.log(form);
            this.tableData$ = this.formService
              .getData(this.formCode, {
                pageIndex: this.tableParam.pageIndex,
                pageSize: this.tableParam.pageSize,
                sort: null,
                filter: null,
              })
              .pipe(
                map((res: any) => {
                  return {
                    data: res['data'],
                    countData: res['totalRecord'],
                    pageSize: this.tableParam.pageSize,
                    pageIndex: this.tableParam.pageIndex,
                  };
                })
              );
          }),
          map((form: any) => {
            return {
              code: this.formCode,
              title: form['formName'],
              columns: form['grid'],
              description: form['formDescription'] || '',
            };
          })
        );
      })
    );
  }

  handleParamChanged(event: NzTableQueryParams) {
    console.log(event);
    this.tableParam = event;
    // this.tableData$ = this.formService.getData(this.formCode, event).pipe(
    //   map((res: any) => {
    //     return {
    //       data: res['data'],
    //       countData: res['totalRecord'],
    //       pageSize: this.tableParam.pageSize,
    //       pageIndex: this.tableParam.pageIndex,
    //     };
    //   })
    // );
  }
}
