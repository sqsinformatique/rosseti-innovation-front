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
      message: 'Цифровое управление компанией',
      time: '14ч20м 12.11.20',
      direct: 'from',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'Цифровое управление компанией',
      time: '14ч20м 12.11.20',
      direct: 'to',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'Цифровое управление компанией',
      time: '14ч20м 12.11.20',
      direct: 'from',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'Цифровое управление компанией',
      time: '14ч20м 12.11.20',
      direct: 'to',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'Цифровое управление компанией',
      time: '14ч20м 12.11.20',
      direct: 'to',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'Цифровое управление компанией',
      time: '14ч20м 12.11.20',
      direct: 'from',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'Цифровое управление компанией',
      time: '14ч20м 12.11.20',
      direct: 'to',
      avatar: '/assets/img/icons/chat-avatar.png'
    },
    {
      message: 'Цифровое управление компанией',
      time: '14ч20м 12.11.20',
      direct: 'from',
      avatar: '/assets/img/icons/chat-avatar.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
