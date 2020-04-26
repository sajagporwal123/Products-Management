import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS, MenuItem } from './sidebar.menu';
import { DatashareService } from '../../common/service/datashare.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuList: MenuItem[] = MENU_ITEMS;
  constructor(public datashareService: DatashareService) { }

  ngOnInit() {

  }

}
