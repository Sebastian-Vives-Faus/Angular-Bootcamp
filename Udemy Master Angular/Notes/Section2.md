## The Basics

The **app-root** in the index.html file is really a _component_, composed of the combination of:

- app.component.css
- app.component.html
- app.component.spec.ts

**main.ts** is the main code that gets executed.

```ts
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
```

This passes the _AppModule_ component.
AppModule refers to **app.module.ts**.

1. **main.ts** get's started.
2. we bootstrap an Angular application **app.module.ts** application.
3. we pass this module as an _argument_.

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
```

4. Angular now analyzes the _app component_ (app.component.ts), the setup we pass there (the selector **app-root**).
5. Angular is able to handle the **app-root** in index.html

### Components

Key feature in angular.
We start with the APP component (root), then we nest our other components.
For example: header, footer, areas, etc.
Build components.

#### Creating a new Component

New components will be created under **/app** folder.
A new component will be a new folder, called how we want to name our new component.
The component will generally be named componentname.component.ts
A component is basically a TypeScript Class

First Steps:
**server.component.ts**

```ts
// Imports
import { Component } from "@angular/core";

// Tell Angular this is a Component, by adding a Decorator
// A decorator allows us to enhance the class
// A decorator always has @ at the beginning
@Component({
  // Configuration
  selector: "app-server", // The HTML tag, must be unique
  templateUrl: "server.component.html", // HTML template
})
export class ServerComponent {}
```

**server.component.html**

```html
<p>The Server Component</p>
```

**app.module.ts**

```ts
import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";

// Decorator
@NgModule({
  // We have to register our own components
  declarations: [AppComponent, ServerComponent],
  // Add other modules to this module.
  imports: [BrowserModule],
  providers: [],
  // Which component should be aware of at the point where the whole application starts
  bootstrap: [AppComponent], // No touchy
})
export class AppModule {}
```

**app.component.html**

```html
<h3>Im in the AppComponent!</h3>
<hr />
<!-- Server Component -->
<app-server></app-server>
```

### Create new Component using the CLI

> ng generate component _name_
> ng g c _name_

It automatically creates the folder, TypeScript, HTML and CSS, and imports it into my app.module.ts

### Inline HTML Template

```ts
@Component({
  selector: "app-servers",
  template: `
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
  `, // MUST HAVE
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
```

With more than 3-5 lines of code, it is recommended to use a **template HTML file**

### Selector by Attribute

```ts
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
```

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <h3>Im in the AppComponent!</h3>
      <hr />
      <!-- <app-servers></app-servers> -->
      <div app-servers></div>
    </div>
  </div>
</div>
```
