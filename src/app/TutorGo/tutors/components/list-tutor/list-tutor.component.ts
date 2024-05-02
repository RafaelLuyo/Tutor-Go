import { Component } from '@angular/core';

@Component({
  selector: 'app-list-tutor-component',
  templateUrl: './list-tutor.component.html',
  styleUrls: ['./list-tutor.component.css']
})
export class ListTutorComponent {
  title: string = 'Tutores';


  tutores: any[] = [
    { nombre: 'Esteban Soler', precio: 15, estrellas: 4, curso: 'Programming', imagenUrl: 'https://media.discordapp.net/attachments/957560427049525259/1234657641741946940/0c7c46cf8ce0506b6c50c540136fa5fe.png?ex=66338248&is=663230c8&hm=cab197eafa4bee86385bb57e2856beeeccaa394b602c8d0996b5c2fc61f0a1a5&=&format=webp&quality=lossless' },
    { nombre: 'Kendall Suarez', precio: 10, estrellas: 5, curso: 'Mathematics', imagenUrl: 'https://media.discordapp.net/attachments/957560427049525259/1234657641741946940/0c7c46cf8ce0506b6c50c540136fa5fe.png?ex=66338248&is=663230c8&hm=cab197eafa4bee86385bb57e2856beeeccaa394b602c8d0996b5c2fc61f0a1a5&=&format=webp&quality=lossless' },
    { nombre: 'Sergio Costa', precio: 20, estrellas: 5, curso: 'Programming', imagenUrl: 'https://media.discordapp.net/attachments/957560427049525259/1234657641741946940/0c7c46cf8ce0506b6c50c540136fa5fe.png?ex=66338248&is=663230c8&hm=cab197eafa4bee86385bb57e2856beeeccaa394b602c8d0996b5c2fc61f0a1a5&=&format=webp&quality=lossless' },
  ];
}
