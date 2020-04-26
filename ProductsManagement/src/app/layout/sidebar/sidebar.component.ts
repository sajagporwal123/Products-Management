import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS, MenuItem } from './sidebar.menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuList: MenuItem[] = MENU_ITEMS;
  isMenuClose: Boolean = true;
  constructor() { }

  ngOnInit() {

  }

}
