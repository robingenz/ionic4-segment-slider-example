import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  segment: number;
  @ViewChild("slides") slides;

  constructor() {
    this.segment = 0;
  }

  public async setSegment(activeIndex: Promise<number>) {
    this.segment = await activeIndex;
  }
}
