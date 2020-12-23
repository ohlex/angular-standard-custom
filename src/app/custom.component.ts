import { Component, VERSION } from "@angular/core";
import { BackendService } from "./backend.service";

@Component({
  selector: "custom",
  template: `
    <p>This is {{ text }}.</p>
  `,
  providers: [BackendService]
})
export class CustomComponent {
  constructor(private service: BackendService) {}

  ngOnInit() {
    this.text =
      "a custom component with value " + this.service.getData().attribute2;
  }

  text = "";
}
