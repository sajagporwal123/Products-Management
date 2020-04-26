import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  isMenuOpen = true;
  constructor() { }

  toggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
