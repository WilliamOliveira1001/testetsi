import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/ChatMessageDto';

@Injectable({
  providedIn: 'root',
})

export class WebSocketService {
  
  websocket!: WebSocket;
  chatMessage: ChatMessageDto[] = [];

  constructor() {}

  public openWebSocket() {
    this.websocket = new WebSocket('http://localhost:8080/chat');
    this.websocket.onopen = (event) => {
      console.log('Open', event);
    };
    this.websocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data)
      this.chatMessage.push(chatMessageDto)
    };
    this.websocket.onclose = (event) => {
      console.log('Close: ', event);
    };
  }
  public sendMessage(chatMessageDto: ChatMessageDto){
    console.log(chatMessageDto)
    this.websocket.send(JSON.stringify(chatMessageDto))
  }
  public closeWebSocket(){
    this.websocket.close()
  }
}