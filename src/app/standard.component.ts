import { Component, VERSION } from "@angular/core";
import { BackendService } from "./backend.service";

@Component({
  selector: "standard",
  template: `
    <p>This is {{ text }}.</p>
  `,
  providers: [BackendService]
})
export class StandardComponent {
  constructor(private service: BackendService) {}

  ngOnInit() {
    this.text = "a standard component with value " + this.service.getData().attribute1;
  }

  text = "";
}
