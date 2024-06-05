import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  alumno = { photoUrl: 'https://media.discordapp.net/attachments/957560427049525259/1235403332529684500/image.png?ex=66343e83&is=6632ed03&hm=21409966f2efe12c13d5af89f8e66c9aeae2845538d8aa94f00639968f33acc6&=&format=webp&quality=lossless', name: 'Juan Perez' };
  estudiante = { photoUrl: 'https://media.discordapp.net/attachments/957560427049525259/1235403360081805372/image.png?ex=66343e89&is=6632ed09&hm=44b072a78b4715333051a5b6beaae3c50d2c03724501c02b03bc06decafbe959&=&format=webp&quality=lossless', name: '...' };
  chatHistory: { sender: string, text: string }[] = [];
  newMessage: string = '';
  currentProfessor!: { photoUrl: string, name: string };

  constructor() {
    this.currentProfessor = { photoUrl: 'https://media.discordapp.net/attachments/957560427049525259/1235403332529684500/image.png?ex=66343e83&is=6632ed03&hm=21409966f2efe12c13d5af89f8e66c9aeae2845538d8aa94f00639968f33acc6&=&format=webp&quality=lossless', name: 'Esteban Soler' };
    this.chatHistory.push({ sender: 'Esteban Soler', text: 'Buenas tardes, me presento soy Esteban Soler, tu nuevo tutor.' });
  }

  sendMessage(message: string) {
    if (message.trim() !== '') {
      this.chatHistory.push({ sender: 'Juan Perez', text: message });
      this.newMessage = '';
    }
  }
}
