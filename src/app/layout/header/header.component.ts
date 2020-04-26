import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../../common/service/datashare.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private datashareService: DatashareService) { }
  isDisabled = false;
  ngOnInit() {
  }
  menuToggle = () => {
    this.datashareService.toggle();
  }
}
