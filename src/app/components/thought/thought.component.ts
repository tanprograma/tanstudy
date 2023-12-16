import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/quote';
import { QuoteService } from 'src/app/services/quote.service';
import { Thought } from 'src/interfaces';
import { ThoughtService } from 'src/app/services/thought.service';
@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  isLoading = false;
  thoughts: Thought[] = [];
  constructor(private thoughtService: ThoughtService) {}
  ngOnInit(): void {
    this.getThought();
  }
  loading() {
    this.isLoading = !this.isLoading;
  }
  getThought() {
    const thoughts = this.thoughtService.thoughts;
    if (!thoughts.length) {
      this.loading();
      this.thoughtService.getThoughts().subscribe((thoughts) => {
        this.thoughtService.thoughts = thoughts;
        this.thoughts = thoughts;
        this.isLoading = false;
      });
    }
    this.thoughtService.getThoughts().subscribe((thoughts) => {
      this.thoughtService.thoughts = thoughts;
      this.thoughts = thoughts;
    });
  }
}
