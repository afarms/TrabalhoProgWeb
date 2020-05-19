import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    /*styles: [`
       .author{
           display: inline-block;
           font-style: italic;
           font-size: 12px;
           width: 80%;
       }
       .config {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;   
       } 
    `]*/
})
export class AppComponent {
    mostrarElemento: boolean = true;

    valorNgSwitch: number;

    nomeNgSwitch: string = "";
    onMudaMostrarElemento(){
        this.mostrarElemento = !this.mostrarElemento;
    }
    messageBinding: Message = new Message("Texto da Mensagem","RafaelMoreira");   
    messageBindingAlias: Message = new Message("Texto da Mensagem Alias","RafaelMoreiraAlias");
    messageS: Message[] = [new Message("Texto da Mensagem vetor 1","RafaelMoreiraVetor01"),
                            new Message("Texto da Mensagem veto 2","RafaelMoreiraVetor02"),
                            new Message("Texto da Mensagem vetor 3","RafaelMoreiraVetor03")
    ]
}
