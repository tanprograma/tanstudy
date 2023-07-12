import { Component, OnInit } from '@angular/core';
import { Question } from 'src/question';
import { QuestionService } from 'src/app/services/question.service';
import { TopicService } from 'src/app/services/topic.service';
import { Topic } from 'src/topic';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  isLoading = false;
  index: number = 0;
  leftIcon = faArrowLeft;
  rightIcon = faArrowRight;
  date: string = '';
  topic: string = '';
  topics: Topic[] = [];
  questions: Question[] = [];
  filtered: Question[] = [];
  player = false;
  constructor(
    private topicService: TopicService,
    private questionService: QuestionService
  ) {}
  loading() {
    this.isLoading = !this.isLoading;
  }
  switchPlayer() {
    this.player = !this.player;
  }
  next() {
    if (this.index == this.filtered.length - 1) return;
    this.index += 1;
  }
  prev() {
    if (this.index == 0) return;
    this.index -= 1;
  }
  ngOnInit(): void {
    this.getTopics();
    this.getQuestions();
  }
  getTopics() {
    this.topics = this.topicService.topics;
    this.topicService.getTopics().subscribe((topics) => {
      this.topicService.topics = topics;
      this.topics = topics;
    });
  }
  getQuestions() {
    this.questions = this.questionService.questions;
    this.filtered = this.sortTime(this.questions);
    if (!this.questions.length) {
      this.isLoading = true;
    }

    this.questionService.getQuestions().subscribe((questions) => {
      this.questions = questions;
      this.filtered = this.sortTime(questions);
      this.isLoading = false;
    });
  }
  clearTopicFilter() {
    this.topic = '';
    this.filter();
  }
  clearDateFilter() {
    this.date = '';
    this.filter();
  }
  clearAllFilter() {
    this.topic = '';
    this.date = '';
    this.filter();
  }

  getTopicID() {
    return this.topics.find((t) => {
      return t.topic == this.topic;
    })?._id;
  }
  getDate() {
    const datestring = new Date(this.date).toLocaleDateString();
    const d: Date = new Date(datestring);
    return {
      min: d.getTime(),
      max: this.getMaxDate(d),
    };
  }
  checkTime(testTime: any): boolean {
    const d = this.getDate();
    return testTime >= d.min && testTime < d.max;
  }

  getMaxDate(date: Date) {
    const d = date.setDate(date.getDay() + 1);
    return d;
  }
  filterTopic(topic: any) {
    if (!topic.length) return;
    this.topic = topic;
    this.filter();
  }
  filter() {
    this.index = 0;
    if (this.date.length && this.topic.length) {
      const topic_id = this.getTopicID();

      const filtered = this.questions.filter((q) => {
        return q.topic == topic_id && this.checkTime(q.created_at);
      });
      this.filtered = this.sortTime(filtered);
      return;
    }
    if (this.date.length) {
      const filtered = this.questions.filter((q) => {
        return this.checkTime(q.created_at);
      });
      this.filtered = this.sortTime(filtered);
      return;
    }
    if (this.topic.length) {
      const topic_id = this.getTopicID();

      const filtered = this.questions.filter((q) => {
        return q.topic == topic_id;
      });
      this.filtered = this.sortTime(filtered);
      return;
    }
    this.filtered = this.sortTime(this.questions);
  }
  cardSubtopics() {
    const subtopics: any = [];
    this.topics.forEach((t) => {
      subtopics.splice(0, 0, ...(t.subtopics || []));
    });
    return subtopics.length;
  }
  sortTime(items: Question[]) {
    return items.sort((a: any, b: any) => {
      if (a.created_at > b.created_at) {
        return 1;
      }
      if (a.created_at < b?.created_at) {
        return -1;
      }
      return 0;
    });
  }
}
