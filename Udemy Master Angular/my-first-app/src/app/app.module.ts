import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

// Decorator
@NgModule({
  // We have to register our own components
  declarations: [AppComponent, ServerComponent, ServersComponent],
  // Add other modules to this module.
  imports: [BrowserModule],
  providers: [],
  // Which component should be aware of at the point where the whole application starts
  bootstrap: [AppComponent], // No touchy
})
export class AppModule {}
