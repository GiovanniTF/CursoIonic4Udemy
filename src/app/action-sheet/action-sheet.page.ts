import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async openActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Exemplos Action Sheet',
      buttons: [
        {
          text: 'Excluir',
          role: 'desctructive',
          icon: 'trash',
          handler: () => {
            console.log("Excluir");
          }
        },
        {
          text: 'Compartilhar',
          icon: 'share',
          handler: () => {
            console.log("Compartilhar");
          }
        },
        {
          text: 'Assistir',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log("Assistir");
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log("Cancelar");
          }
        }
      ]
    });

    await actionSheet.present();
  }
}
