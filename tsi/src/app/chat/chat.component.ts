import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from '../models/ChatMessageDto';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  constructor(public webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }
  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket()
  }

  sendMenssage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message)
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset()
  }
}
