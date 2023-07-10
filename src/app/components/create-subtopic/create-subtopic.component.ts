import { Component } from '@angular/core';
import { Subtopic } from 'src/subtopic';
import { Topic } from 'src/topic';
import { SubtopicService } from 'src/app/services/subtopic.service';
import { TopicService } from 'src/app/services/topic.service';
import {
  faEdit,
  faSave,
  faFolderOpen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-create-subtopic',
  templateUrl: './create-subtopic.component.html',
  styleUrls: ['./create-subtopic.component.css'],
})
export class CreateSubtopicComponent {
  loading = false;
  deleteIcon = faTimes;
  editIcon = faEdit;
  saveIcon = faSave;
  openIcon = faFolderOpen;

  // subtopics: { subtopic: string; _id?: string }[] = [];

  created_subtopics: { subtopic: string; _id?: string }[] = [];
  topic: string = '';
  topics: Topic[] = [];
  subtopics: { subtopic: string; _id?: string }[] = [];
  subtopic: string = '';
  constructor(
    private subtopicService: SubtopicService,
    private topicService: TopicService
  ) {}
  ngOnInit(): void {
    this.getTopics();
  }
  // getSubtopics() {
  //   this.loading = true;
  //   this.created_subtopicservice.getSubtopics().subscribe((subtopics) => {
  //     this.created_subtopics = subtopics;
  //     this.loading = false;
  //   });
  // }
  getTopics() {
    this.loading = true;
    this.topicService.getTopics().subscribe((topics) => {
      this.topics = topics;
      this.loading = false;
    });
  }
  add() {
    const found = this.created_subtopics.find((i) => {
      return i.subtopic == this.subtopic.toLowerCase();
    });
    if (found) return;
    this.created_subtopics.splice(0, 0, {
      subtopic: this.subtopic,
    });
    this.clear();
  }
  clear() {
    this.subtopic = '';
  }
  deleteAll() {
    this.created_subtopics = [];
  }
  deleteOne(item: Subtopic) {
    this.created_subtopics = this.created_subtopics.filter((i) => {
      return i != item;
    });
  }
  saveOne(i: Subtopic) {
    if (i._id != undefined) return;

    this.loading = true;
    this.subtopicService.createSubtopic(this.topic, i).subscribe((subtopic) => {
      this.created_subtopics.map((i) => {
        if (i.subtopic == subtopic.subtopic) {
          i._id = subtopic._id;
        }
      });
      this.topics
        .find((t) => {
          return t.topic == this.topic;
        })
        ?.subtopics?.splice(0, 0, subtopic);

      this.loading = false;
    });
  }
  saveAll() {
    const payload = this.created_subtopics.filter((i) => {
      return i._id == undefined;
    });
    if (!payload.length) return;

    this.loading = true;
    this.subtopicService
      .createSubtopics(this.topic, payload)
      .subscribe((subtopics) => {
        subtopics.forEach((element) => {
          this.created_subtopics.map((i) => {
            if (i.subtopic == element.subtopic) {
              i._id = element._id;
            }
            return i;
          });
        });
        this.topics
          .find((t) => {
            return t.topic == this.topic;
          })
          ?.subtopics?.splice(0, 0, ...subtopics);

        this.loading = false;
      });
  }
  select(value: string) {
    this.topic = value;

    console.log(this.topic);
    const subtopics = this.topics.find((i) => {
      return i.topic == this.topic;
    })?.subtopics;
    if (!subtopics) return;

    this.subtopics = subtopics;
  }
}
