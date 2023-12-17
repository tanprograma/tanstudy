import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/interfaces';
import { TopicService } from 'src/app/services/topic.service';
import {
  faEdit,
  faSave,
  faFolderOpen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FieldService } from 'src/app/services/field.service';
import { Field } from 'src/interfaces';
@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css'],
})
export class CreateTopicComponent implements OnInit {
  loading = false;
  deleteIcon = faTimes;
  editIcon = faEdit;
  saveIcon = faSave;
  openIcon = faFolderOpen;

  topics: Topic[] = [];
  fields: Field[] = [];
  created_topics: Topic[] = [];

  topic: string = '';
  field: string = '';
  constructor(
    private topicService: TopicService,
    private fieldService: FieldService
  ) {}
  ngOnInit(): void {
    this.getTopics();
  }
  getTopics() {
    this.loading = true;
    this.topicService.getTopics().subscribe((topics) => {
      this.topics = topics;
      this.fieldService.getFields().subscribe((fields) => {
        this.fields = fields;
        this.loading = false;
      });
    });
  }
  add() {
    const found = this.topics.find((i) => {
      return i.topic == this.topic.toLowerCase();
    });
    if (found) return;
    this.created_topics.splice(0, 0, {
      topic: this.topic,
      field: this.field,
    });
    this.clear();
  }
  clear() {
    this.topic = '';
    this.field = '';
  }
  deleteAll() {
    this.created_topics = [];
  }
  deleteOne(item: Topic) {
    this.created_topics = this.created_topics.filter((i) => {
      return i != item;
    });
  }
  saveOne(i: Topic) {
    if (i._id != undefined) return;
    this.loading = true;
    this.topicService.createTopic(i).subscribe((topic) => {
      this.created_topics.map((i) => {
        if (i.topic == topic.topic) {
          i._id = topic._id;
        }
        return i;
      });
      this.topics.splice(0, 0, topic);
      this.loading = false;
    });
  }
  saveAll() {
    const payload = this.created_topics.filter((i) => {
      return i._id == undefined;
    });
    if (!payload.length) return;
    this.loading = true;
    this.topicService.createTopics(payload).subscribe((topics) => {
      topics.forEach((element) => {
        this.created_topics.map((i) => {
          if (i.topic == element.topic) {
            i._id = element._id;
          }
          return i;
        });
      });
      this.topics.splice(0, 0, ...topics);
      this.loading = false;
    });
  }
}
