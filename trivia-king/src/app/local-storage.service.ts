import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  static saveToLocalStorage(name: string, data: any) {
    try {
      const serialized = JSON.stringify(data);
      localStorage.setItem(name, serialized);
    } catch (err) {
      console.log(err);
    }
  }

  static loadFromLocalStorage<T>(name: string): T | undefined {
    try {
      const serialized = localStorage.getItem(name);
      if (serialized === null || serialized === undefined) {
        return undefined;
      }

      return <T>JSON.parse(serialized);
    } catch(err) {
      console.log(err);
      return undefined;
    }
  }

  saveToLocalStorage(name: string, data: any) {
    LocalStorageService.saveToLocalStorage(name, data);
  }

  loadFromLocalStorage<T>(name: string): T | undefined {
    return LocalStorageService.loadFromLocalStorage<T>(name);
  }
}
