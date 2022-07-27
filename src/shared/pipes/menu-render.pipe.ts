import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'renderMenu' })
export class RenderMenuPipe implements PipeTransform {
  transform(value: Array<MenuItem>): string {
    return this.renderMenu(value);
  }

  renderMenu(menuItem: Array<MenuItem>): string {
    let result = `
    <li nz-submenu nzTitle="Form" nzIcon="form">
      <ul>
        <li nz-menu-item nzMatchRouter>
          <a>Basic Form</a>
        </li>
      </ul>
    </li>
    `;
    menuItem.forEach((element) => {
      if (element.subItems.length > 0) {
      }
    });
    return result;
  }
}

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
