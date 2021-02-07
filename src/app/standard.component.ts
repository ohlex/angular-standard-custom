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

  text = "a";
  

  ngOnInit() {
    const obs = this.service.getObservable();
    obs.subscribe(x => {
      console.log(x);
      this.text = "c";
      this.text = 'a standard component with value ' + x["url"];
    });
    this.text = "b";
  }

 
}
