import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { StandardComponent } from "./standard.component";
import { CustomComponent } from "./custom.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CustomComponent, StandardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
