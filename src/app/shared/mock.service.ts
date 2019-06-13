import { Injectable } from '@angular/core';

export interface Disk {
  name: string;
  folders: object[];
}

export interface Machine {
  id: string;
  name: string;
  value: number;
  total: number;
  color: string;
}

@Injectable({
  providedIn: 'root'
})

export class MockService {

  constructor() { }
}
