import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-component-alert',
  templateUrl: './component-alert.page.html',
  styleUrls: ['./component-alert.page.scss'],
})
export class ComponentAlertPage implements OnInit {

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async abrirAlertSimples() {
    let alertSimples = await this.alertCtrl.create({
      header: 'Alert Simples',
      subHeader: 'Sub Header',
      message: 'Essa é a mensagem do Alert Simples',
      buttons: ['OK']
    });
    await alertSimples.present();
  }

}
