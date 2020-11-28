import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html'
})

export class ForumComponent implements OnInit {
  topicList = [
    {
      id: 0,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
    },
    {
      id: 1,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
    },
    {
      id: 2,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
    },
    {
      id: 3,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
    },
    {
      id: 0,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
    },
    {
      id: 0,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
    },
    {
      id: 0,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
    },
    {
      id: 0,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
    },
    {
      id: 0,
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
