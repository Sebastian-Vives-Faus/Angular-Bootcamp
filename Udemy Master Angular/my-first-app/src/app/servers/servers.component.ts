import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
  `, // MUST HAVE
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
