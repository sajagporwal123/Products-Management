import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }
  setItem = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}
