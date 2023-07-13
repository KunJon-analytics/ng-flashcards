import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFlash } from './flash.model';

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

@Injectable({ providedIn: 'root' })
export class FlashService {
  flashs: IFlash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: getRandomNumber(),
    },
  ];

  flashs$ = new BehaviorSubject<IFlash[]>(this.flashs);

  constructor() {}

  addFlash(flash: { question: string; answer: string }) {
    this.flashs = [
      ...this.flashs,
      {
        ...flash,
        show: false,
        id: getRandomNumber(),
      },
    ];
    this.flashs$.next(this.flashs);
  }

  toggleFlash(id: number) {
    this.flashs = this.flashs.map((flash) => {
      return flash.id === id ? { ...flash, show: !flash.show } : flash;
    });
    this.flashs$.next(this.flashs);
  }

  deleteFlash(id: number) {
    this.flashs = this.flashs.filter((flash) => flash.id !== id);
    this.flashs$.next(this.flashs);
  }

  rememberedChange(id: number, flag: IFlash['remembered']) {
    this.flashs = this.flashs.map((flash) => {
      return flash.id === id ? { ...flash, remembered: flag } : flash;
    });
    this.flashs$.next(this.flashs);
  }

  updateFlash(id: number, flashInput: { question: string; answer: string }) {
    this.flashs = this.flashs.map((flash) => {
      return flash.id === id ? { ...flash, ...flashInput } : flash;
    });
    this.flashs$.next(this.flashs);
  }

  getFlash(id: number) {
    const index = this.flashs.findIndex((flash) => flash.id === id);
    return this.flashs[index];
  }
}
