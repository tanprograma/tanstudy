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
  setDiary(diaries: { created: string }[]) {
    this.diary = Object.values(
      diaries.reduce((acc: any, current: { created: string }) => {
        const date = new Date(current.created);
        const key: string = `d_${date.getMonth()}_${date.getDate()}_${date.getFullYear()}`;
        if (!acc[key]) {
          acc[key] = { date: this.getDateString(date), entries: [current] };
          return acc;
        }
        acc[key].entries = [...acc[key].entries, current];
        return acc;
      }, {})
    );
  }

  getDateString(date: Date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
}
