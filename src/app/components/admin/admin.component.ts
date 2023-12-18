import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  items: { name: string }[] = [
    { name: 'format' },
    { name: 'topic' },
    { name: 'subtopic' },
    { name: 'quote' },
    { name: 'question' },
    { name: 'diary' },
    { name: 'plan' },
    { name: 'thought' },
    { name: 'review' },
    { name: 'field' },
    { name: 'todo' },
  ];
  linkstyle = {
    padding: '1px 0 1px 5%',

    // 'border-radius': '5px',

    'border-left': '5px solid blue',
  };
  selected: any;
  select(item: any) {
    this.selected = item;
  }
  setUrl(name: string) {
    return { name: name, url: `/app/admin/create-${name}` };
  }
}
