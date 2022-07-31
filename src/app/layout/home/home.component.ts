import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

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
  currentUser = {
    userName: 'Anonymous',
    groupName: 'Anonymous',
  };

  isCollapsed = false;
  appMode = environment.title;
  appModeTextType: any = 'success';

  onFullscreen = false;
  element: any;

  public menuItems: Array<MenuItem> = [];

  constructor(@Inject(DOCUMENT) private document: any, private router: Router) {
    this.element = document.documentElement;

    let menuString = localStorage.getItem('menu') || '';
    this.currentUser.userName = localStorage.getItem('username') || 'Anonymous';
    this.currentUser.groupName = localStorage.getItem('group') || 'Anonymous';

    this.menuItems = JSON.parse(menuString)?.data || [];
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

  toggleFullscreen() {
    this.onFullscreen = !this.onFullscreen;
    if (
      !document.fullscreenElement &&
      !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement
    ) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
