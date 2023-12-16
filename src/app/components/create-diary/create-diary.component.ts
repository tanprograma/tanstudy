import { Component, OnInit } from '@angular/core';
import { Question } from 'src/question';
import { Subtopic } from 'src/subtopic';
import { Topic } from 'src/topic';
import { TopicService } from 'src/app/services/topic.service';
import {
  faEdit,
  faSave,
  faFolderOpen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from 'src/app/services/question.service';
import { Diary } from 'src/interfaces';
import { DiaryService } from 'src/app/services/diary.service';
@Component({
  selector: 'app-create-diary',
  templateUrl: './create-diary.component.html',
  styleUrls: ['./create-diary.component.css'],
})
export class CreateDiaryComponent implements OnInit {
  loading = false;
  editIcon = faEdit;
  deleteIcon = faTimes;
  saveIcon = faSave;
  openIcon = faFolderOpen;

  diaries: Diary[] = [];
  diary: string = '';
  constructor(
    private topicService: TopicService,
    private diaryService: DiaryService
  ) {}
  ngOnInit(): void {}

  add() {
    if (!this.diary.length) return;
    this.diaries.splice(0, 0, { content: this.diary });
    this.clear();
  }
  clear() {
    this.diary = '';
    // this.topic = '';
    // this.subtopic = '';
  }
  deleteAll() {
    this.diaries = [];
  }
  deleteOne(item: Diary) {
    this.diaries = this.diaries.filter((i) => {
      return i != item;
    });
  }
  saveOne(i: Diary) {
    if (i._id != undefined) return;
    const payload: Diary = i;
    this.loading = true;
    this.diaryService.createDiary(payload).subscribe((diary) => {
      this.diaries.map((i) => {
        if (i.content == diary.content) {
          i._id = diary._id;
        }
        return i;
      });

      this.loading = false;
    });
  }
  saveAll() {
    const payload = this.diaries.filter((i) => {
      return i._id == undefined;
    });
    if (!payload.length) return;

    this.loading = true;
    this.diaryService.createDiaries(payload).subscribe((diaries) => {
      diaries.forEach((element) => {
        this.diaries.map((i) => {
          if (i.content == element.content) {
            i._id = element._id;
          }
        });
      });

      this.loading = false;
    });
  }
  // getTopicID(topic: any) {
  //   return this.topics.find((i) => {
  //     return i.topic == topic;
  //   })?._id;
  // }

  // getPayload(i: string) {
  //   return {
  //     content: this.diary,
  //   };
  // }
}
