import { Component, VERSION } from "@angular/core";
import { StandardService } from "./standard.service";

@Component({
  selector: "custom",
  template: `
    <p>This is {{ text }}.</p>
  `,
  providers: [StandardService]
})
export class CustomComponent {
  constructor(private service: StandardService) {}

  ngOnInit() {
    this.text =
      "a custom component with value " + this.service.getData().attribute2;
  }

  text = "";
}
