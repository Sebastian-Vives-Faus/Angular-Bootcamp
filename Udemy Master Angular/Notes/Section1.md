### Updating NPM:

> npm install -g npm

### Updating the CLI

> npm uninstall -g angular-cli @angular/cli
> npm cache verify
> npm install -g @angular/cli

### Creating an Angular CLI Project

> ng new my-first-app --no-strict

### Starting the Angular Project

> ng serve

Server run locally in port 4200

### What's the deal with Angular?

- Angular allows us to mix _static HTML code_ and _dynamic things_ we want to output.
- Structure of Angular:
  - Template: HTML Code
  - Styling: Css Code
  - Module: Where we tell Angular which pieces belong to our app. (Imports)
  - Component:

### Using NgModule:

1. Import { FormsModule } from '@angular/forms' in app.module.ts

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule], //< added FormsModule here
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

2. Now you can use it inside the template HTML:

```html
<input [(ngModel)]="name" />
<p>{{ name }}</p>
```

### Installing Bootstrap 3:

> npm i --save bootstrap@3

Then, we go to **angular.json** and:

```json
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
```
