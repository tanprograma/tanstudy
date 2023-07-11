import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/quote';
import { QuoteService } from 'src/app/services/quote.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  isLoading = false;
  quotes: Quote[] = [];
  constructor(private quoteService: QuoteService) {}
  ngOnInit(): void {
    this.getQuotes();
  }
  loading() {
    this.isLoading = !this.isLoading;
  }
  getQuotes() {
    this.quotes = this.quoteService.quotes;
    if (!this.quotes.length) {
      this.loading();
    }
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quoteService.quotes = quotes;
      this.quotes = quotes;
      this.isLoading = false;
    });
  }
}
