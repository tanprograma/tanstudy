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
@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
})
export class CreateQuestionComponent implements OnInit {
  loading = false;
  editIcon = faEdit;
  deleteIcon = faTimes;
  saveIcon = faSave;
  openIcon = faFolderOpen;
  topic: string = '';
  subtopic: string = '';
  topics: Topic[] = [];
  subtopics: Subtopic[] = [];
  questions: Question[] = [];
  question: string = '';
  constructor(
    private topicService: TopicService,
    private questionService: QuestionService
  ) {}
  ngOnInit(): void {
    this.getTopics();
  }
  getTopics() {
    this.topicService.getTopics().subscribe((topics) => {
      this.topics = topics;
    });
  }
  getSubtopics(v: string) {
    this.topic = v;

    const subtopics = this.topics.find((i) => {
      return i.topic == this.topic;
    })?.subtopics;
    if (!subtopics) return;
    this.subtopics = subtopics;
  }
  setSubtopic(v: string) {
    this.subtopic = v;
  }
  add() {
    if (!this.question.length || !this.topic.length || !this.subtopic.length)
      return;
    this.questions.splice(0, 0, {
      question: this.question,
      topic: this.topic,
      subtopic: this.subtopic,
    });
    this.clear();
  }
  clear() {
    this.question = '';
    // this.topic = '';
    // this.subtopic = '';
  }
  deleteAll() {
    this.questions = [];
  }
  deleteOne(item: Question) {
    this.questions = this.questions.filter((i) => {
      return i != item;
    });
  }
  saveOne(i: Question) {
    if (i._id != undefined) return;
    const payload: Question = this.getPayload(i);
    this.loading = true;
    this.questionService.createQuestion(payload).subscribe((question) => {
      this.questions.map((i) => {
        if (i.question == question.question) {
          i._id = question._id;
        }
        return i;
      });

      this.loading = false;
    });
  }
  saveAll() {
    const payload = this.questions.filter((i) => {
      return i._id == undefined;
    });
    if (!payload.length) return;
    const mod_payloads = payload.map((x) => {
      return this.getPayload(x);
    });
    this.loading = true;
    this.questionService
      .createQuestions(mod_payloads)
      .subscribe((questions) => {
        questions.forEach((element) => {
          this.questions.map((i) => {
            if (i.question == element.question) {
              i._id = element._id;
            }
          });
        });

        this.loading = false;
      });
  }
  getTopicID(topic: any) {
    return this.topics.find((i) => {
      return i.topic == topic;
    })?._id;
  }
  getSubtopicID(topic: any, subtopic: any) {
    return this.topics
      .find((i) => {
        return i.topic == topic;
      })
      ?.subtopics?.find((x) => {
        return x.subtopic == subtopic;
      })?._id;
  }
  getPayload(i: Question) {
    return {
      question: i.question,
      topic: this.getTopicID(i.topic),
      subtopic: this.getSubtopicID(i.topic, i.subtopic),
    };
  }
}
