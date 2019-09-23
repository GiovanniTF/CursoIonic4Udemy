import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-componentes',
  templateUrl: './layout-componentes.page.html',
  styleUrls: ['./layout-componentes.page.scss'],
})
export class LayoutComponentesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  openPage(namePage: string) {
    this.navCtrl.navigateForward(namePage);
  }

}
