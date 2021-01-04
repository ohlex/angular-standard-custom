import { Component, VERSION } from "@angular/core";
import { StandardService } from "./standard.service";

@Component({
  selector: "standard",
  template: `
    <p>This is {{ text }}.</p>
  `,
  providers: [StandardService]
})
export class StandardComponent {
  constructor(private service: StandardService) {}

  ngOnInit() {
    this.text = "a standard component with value " + this.service.getData().attribute1;
  }

  text = "";
}
