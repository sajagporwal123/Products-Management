import { Component, OnInit, Renderer2 } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }
  isDisabled: Boolean = false;
  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }
  menuToggle = () => {
    // console.log('this.isDisabled',this.isDisabled);
    // this.renderer[this.isDisabled ? 'addClass' : 'removeClass']('sidebar', 'active');
    // this.isDisabled = !this.isDisabled;
    // this.renderer.addClass('')
  }
}
