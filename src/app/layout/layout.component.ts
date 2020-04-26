import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../common/service/datashare.service';
declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public datashareService: DatashareService) { }

  ngOnInit() {
  }

}
