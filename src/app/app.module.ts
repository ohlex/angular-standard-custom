import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { StandardComponent } from "./standard.component";
import { CustomComponent } from "./custom.component";

@NgModule({
  imports: [BrowserModule, HttpClientModule,],
  declarations: [AppComponent, CustomComponent, StandardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
