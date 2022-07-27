import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

interface MenuItem {
  id?: number;
  label?: string;
  icon?: string;
  link?: string;
  subItems?: any;
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
  isLayout?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  appMode = environment.title;
  appModeTextType: any = 'success';

  public menuItems: Array<MenuItem> = [];

  constructor() {
    let menuString = localStorage.getItem('menu') || '';
    this.menuItems = JSON.parse(menuString)?.data || [];
    console.log(this.menuItems);
  }

  ngOnInit() {
    switch (this.appMode) {
      case 'Development': {
        this.appModeTextType = 'success';
        break;
      }
      case 'Testing': {
        this.appModeTextType = 'warning';
      }
    }
  }
}
