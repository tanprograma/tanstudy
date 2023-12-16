import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/quote';
import { QuoteService } from 'src/app/services/quote.service';
import { Diary } from 'src/interfaces';
import { DiaryService } from 'src/app/services/diary.service';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  isLoading = false;
  diary: { date: string; entries: Diary[] }[] = [];
  constructor(private diaryService: DiaryService) {}
  ngOnInit(): void {
    this.getDiary();
  }
  loading() {
    this.isLoading = !this.isLoading;
  }
  getDiary() {
    const res = this.diaryService.diaries;
    if (res.length == 0) {
      this.loading();
      this.diaryService.getDiaries().subscribe((diaries) => {
        console.log({ diaries });
        this.diaryService.diaries = diaries;
        this.setDiary(diaries);
        this.isLoading = false;
      });
    }
    this.diaryService.getDiaries().subscribe((diaries) => {
      console.log(diaries);
      this.diaryService.diaries = diaries;
      this.setDiary(diaries);
      this.isLoading = false;
    });
  }
  setDiary(diaries: Diary[]) {
    this.diary = Object.values(
      diaries.reduce((acc: any, current: Diary) => {
        const date = this.getDate(current);
        const key: string = `d_${date.getTime()}`;
        if (acc[key] == undefined) {
          acc[key] = { date: this.getDateString(date), entries: [current] };
          return acc;
        }
        acc[key].entries = [...acc[key].entries, current];
        return acc;
      }, {})
    );
  }
  getDate(item: Diary): Date {
    if (typeof item.created == 'string') return new Date(item.created);
    return item.created ? item.created : new Date();
  }
  getDateString(date: Date) {
    return `${date.getUTCDate()}-${
      date.getUTCMonth() + 1
    }-${date.getUTCFullYear()}`;
  }
}
