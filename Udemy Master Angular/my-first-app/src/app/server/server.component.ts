// Imports
import { Component } from '@angular/core';

// Tell Angular this is a Component, by adding a Decorator
// A decorator allows us to enhance the class
// A decorator always has @ at the beginning
@Component({
  // Configuration
  selector: 'app-server', // The HTML tag, must be unique
  templateUrl: 'server.component.html', // HTML template
})
export class ServerComponent {}
