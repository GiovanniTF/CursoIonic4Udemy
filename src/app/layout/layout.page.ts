import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(
    private navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  openLayoutHeaderFooter(){
    this.navCtrl.navigateForward('layout-header-footer');
  }

  openTabs(){
    this.navCtrl.navigateForward('layout-tabs')
  }

  openMenu(){
    this.navCtrl.navigateForward('layout-menu')
  }

  openSplitPane(){
    this.navCtrl.navigateForward('layout-split-pane')
  }
}
