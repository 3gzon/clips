import { Component, OnInit, ContentChildren, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss']
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs = {};
  constructor() {}

  ngAfterContentInit() {
    console.log(this.tabs, 'test');
  }
}
