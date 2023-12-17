import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Quote } from 'src/quote';
import { QuoteService } from 'src/app/services/quote.service';
@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css'],
})
export class MainTitleComponent implements OnInit, OnDestroy {
  signOutIcon = faSignOut;
  loading = false;
  quotes: Quote[] = [];
  quote: { quote: string; author?: string } = {
    quote: '',
    author: '',
  };
  interval: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private quoteService: QuoteService
  ) {}
  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes;

      this.runQuotes();
    });
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
    }, 150000);
  }
  setQuote(quote: Quote) {
    this.quote.quote = quote.quote;
    this.quote.author = quote.author;
  }

  logout() {
    this.loginService.logout();
  }
}
