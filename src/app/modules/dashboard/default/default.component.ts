import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  moduleName = 'Test Module';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.moduleName = this.activatedRoute.snapshot.params['moduleName'];
  }
}
