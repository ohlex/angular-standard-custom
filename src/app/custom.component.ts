import { Component, VERSION } from "@angular/core";
import { CustomService, CustomData } from "./custom.service";

@Component({
  selector: "custom",
  template: `
    <p>This is {{ text }}.</p>
  `,
  providers: [CustomService]
})
export class CustomComponent {
  constructor(private service: CustomService) {}

  ngOnInit() {
    this.text =
      "a custom component with value " + this.service.getData().attribute3;
  }

  text = "";
}
