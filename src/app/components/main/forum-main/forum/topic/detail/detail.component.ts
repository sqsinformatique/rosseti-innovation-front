import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  topic = {
      id: 0,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
  };

  chat = [
    {
      message: 'название предложения должно быть кратким',
      time: '14ч 20м 12.11.20',
      direct: 'to',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'признать его рационализаторским, принять к использованию и выдать удостоверение на рационализаторское предложение',
      time: '14ч 20м 12.11.20',
      direct: 'from',
      avatar: '/assets/img/icons/avatar.png'
    },
    {
      message: 'название предложения должно быть кратким, точно отражать суть и соответствовать описанию',
      time: '14ч 20м 12.11.20',
      direct: 'from',
      avatar: '/assets/img/icons/avatar.png'
    },
    {
      message: 'Программа должна позволять создавать и редактировать типовой текст письма”',
      time: '14ч 20м 12.11.20',
      direct: 'to',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'Ответственному работнику должен быть предоставлен достуОп с полными правами для полноценной работы ',
      time: '14ч 20м 12.11.20',
      direct: 'to',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'Цифровое управление компанией',
      time: '14ч 20м 12.11.20',
      direct: 'from',
      avatar: '/assets/img/icons/avatar.png'
    },
    {
      message: 'признать его удостоверение на предложение',
      time: '14ч 20м 12.11.20',
      direct: 'to',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'признать его рационализаторским, принять к использованию и выдать удостоверение на рационализаторское предложение',
      time: '14ч 20м 12.11.20',
      direct: 'from',
      avatar: '/assets/img/icons/avatar.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
