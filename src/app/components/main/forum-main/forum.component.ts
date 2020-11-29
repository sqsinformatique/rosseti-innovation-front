import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html'
})

export class ForumComponent implements OnInit {
  topicList = [
    {
      id: 0,
      img: '/assets/img/icons/line-1.png',
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11',
      like: 21,
      comment: 12,
      hashTags: [
        'Управление',
        'Технологии',
        'Процесс'
      ]
    },
    {
      id: 1,
      img: '/assets/img/icons/line-2.png',
      name: 'Цифровое управление компанией',
      favorite: false,
      date: '15.11',
      like: 125,
      comment: 25,
      hashTags: [
        'Сети',
        'Экономика',
        'ЛЭП'
      ]
    },
    {
      id: 2,
      img: '/assets/img/icons/line-3.png',
      name: 'Дополнительные сервисы',
      favorite: false,
      date: '25.11',
      like: 25,
      comment: 125,
      hashTags: [
        'Фильтр',
        'Технологии',
        'Воздух'
      ]
    },
    {
      id: 3,
      img: '/assets/img/icons/line-4.png',
      name: 'Комплексная система информационной безопасности',
      favorite: false,
      date: '12.10',
      like: 31,
      comment: 154,
      hashTags: [
        'Кризис',
        'Технологии',
        'Сети'
      ]
    },
    {
      id: 4,
      img: '/assets/img/icons/line-1.png',
      name: 'Управление технологическим процессом. Цифровая сеть ...',
      favorite: false,
      date: '12.11',
      like: 1,
      comment: 15,
      hashTags: [
        'Кризис',
        'Экономика',
        'Процесс'
      ]
    },
    {
      id: 5,
      img: '/assets/img/icons/line-2.png',
      name: 'Цифровое управление компанией',
      favorite: false,
      date: '15.11',
      like: 25,
      comment: 125,
      hashTags: [
        'Кризис',
        'Трансформатор',
        'Процесс'
      ]
    },
    {
      id: 6,
      img: '/assets/img/icons/line-3.png',
      name: 'Дополнительные сервисы',
      favorite: false,
      date: '25.11',
      like: 5,
      comment: 1,
      hashTags: [
        'Кризис',
        'Трансформатор',
        'Процесс'
      ]
    },
    {
      id: 7,
      img: '/assets/img/icons/line-3.png',
      name: 'Комплексная система информационной безопасности',
      favorite: false,
      date: '12.10',
      like: 4,
      comment: 15,
      hashTags: [
        'Кризис',
        'Трансформатор',
        'Управление'
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
