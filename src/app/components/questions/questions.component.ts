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
    this.topicService.getTopics().subscribe((topics) => {
      this.topics = topics;
    });
  }
  getQuestions() {
    this.questionService.getQuestions().subscribe((questions) => {
      this.questions = questions;
      this.filtered = questions;
    });
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
    return new Date(datestring).getTime();
  }
  filterTopic(topic: any) {
    this.topic = topic;
    this.filter();
  }
  filter() {
    this.index = 0;
    if (this.date.length && this.topic.length) {
      const topic_id = this.getTopicID();

      const d = this.getDate();
      this.filtered = this.questions.filter((q) => {
        return q.topic == topic_id && (q.created_at || Date.now()) >= d;
      });
      return;
    }
    if (this.date.length) {
      const date = this.getDate();
      this.filtered = this.questions.filter((q) => {
        return (q.created_at || Date.now()) >= date;
      });
      return;
    }
    if (this.topic.length) {
      const topic_id = this.getTopicID();

      this.filtered = this.questions.filter((q) => {
        return q.topic == topic_id;
      });
      return;
    }
    this.filtered = this.questions;
  }
  cardSubtopics() {
    const subtopics: any = [];
    this.topics.forEach((t) => {
      subtopics.splice(0, 0, ...(t.subtopics || []));
    });
    return subtopics.length;
  }
}
