import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css'],
})
export class MainTitleComponent implements OnInit, OnDestroy {
  signOutIcon = faSignOut;

  quotes: { quote: string; author?: string }[] = [
    {
      quote: 'be thou my vision',
      author: 'irish saying',
    },
    {
      quote: 'imagination is important than knowledge',
      author: 'albert einstein',
    },
    {
      quote: 'with strong determination nothing is impossible',
      author: 'adolf hitler',
    },
    { quote: 'love more, hate less', author: 'kija mnada' },
  ];
  quote: { quote: string; author?: string } = {
    quote: '',
    author: '',
  };
  interval: any;
  ngOnInit(): void {
    this.setQuote(this.quotes[0]);

    this.runQuotes();
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  runQuotes() {
    let iteration: number = 0;
    this.interval = setInterval(() => {
      if (iteration == this.quotes.length) {
        iteration = 0;
      }
      this.setQuote(this.quotes[iteration]);

      iteration += 1;
    }, 300000);
  }
  setQuote(quote: { quote: string; author?: string }) {
    this.quote.quote = quote.quote;
    this.quote.author = quote.author;
  }
}
