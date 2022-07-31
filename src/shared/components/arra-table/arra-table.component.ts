import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'arra-table',
  templateUrl: './arra-table.component.html',
  styleUrls: ['./arra-table.component.scss'],
})
export class ArraTableComponent implements OnInit {
  @Input('dataTable$') dataTable$!: Observable<any>;
  @Input('headerColumns') headerColumns!: Array<any>;
  @Output('tableParamChanged')
  tableParamChanged: EventEmitter<NzTableQueryParams> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handletTableParamChanged(event: NzTableQueryParams) {
    this.tableParamChanged.emit(event);
  }
}
