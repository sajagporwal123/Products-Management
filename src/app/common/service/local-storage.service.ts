import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getItem = (key: string) => {
    return JSON.parse(localStorage.getItem(key));
  }
  setItem = (key: string, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}
