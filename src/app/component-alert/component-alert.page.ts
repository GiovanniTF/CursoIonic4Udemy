import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-component-alert',
  templateUrl: './component-alert.page.html',
  styleUrls: ['./component-alert.page.scss'],
})
export class ComponentAlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

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

  async abrirAlertMultiplosBotoes() {
    let alertMultiple = await this.alertCtrl.create({
      header: 'Alert multiple Buttons',
      message: 'Essa é a mensagem do Alert Multiplos Botões',
      buttons: ['Cancelar', 'Abrir Modal', 'Excluir']
    });
    await alertMultiple.present();
  }

  async abrirAlertConfirmacao() {
    let alertConfirmacao = await this.alertCtrl.create({
      header: 'Alert Confirmação',
      message: 'Deseja cancelar o pedido <b>XPTO</b>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Pedido cancelado: XPTO')
          }
        },
        {
          text: 'Pagar',
          handler: () => {
            console.log('Pago com sucesso!')
          }
        }
      ]
    });
    await alertConfirmacao.present();
  }

  async abrirAlertPrompt() {
    let alertPrompt = await this.alertCtrl.create({
      header: 'Acesso Restrito',
      inputs: [
        {
          name: 'login',
          type: 'text',
          placeholder: 'Informe seu login'
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Digite sua senha'
        }
      ],
      buttons: [
        {
          text: 'Novo',
          cssClass: 'secondary',
          role : 'cancel',
          handler: () => {
            console.log('Aqui vai abrir a tela de cadastro de novos usuarios!')
          }
        },
        {
          text: 'Entrar',
          handler: (data) => {
            console.log('Seja Bem Vindo', data)
          }
        }
      ]
    });
    await alertPrompt.present();
  }

  async abrirRadio(){
    let alert = await this.alertCtrl.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel')
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data)
          }
        }
      ]
    });

    await alert.present();
  }

  async abrirCheckbox(){
    let alert = await this.alertCtrl.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel')
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data)
          }
        }
      ]
    });

    await alert.present();
  }

}
