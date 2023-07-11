import { Component } from '@angular/core';
import { Quote } from 'src/quote';
import { QuoteService } from 'src/app/services/quote.service';
import {
  faEdit,
  faSave,
  faFolderOpen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css'],
})
export class CreateQuoteComponent {
  loading = false;
  deleteIcon = faTimes;
  editIcon = faEdit;
  saveIcon = faSave;
  openIcon = faFolderOpen;

  quotes: Quote[] = [];
  created_quotes: Quote[] = [];
  author: string = '';
  quote: string = '';
  constructor(private quoteService: QuoteService) {}

  getquotes() {
    this.loading = true;
    this.quoteService.getQuotes().subscribe((quotes) => {
      this.quotes = quotes;
      this.loading = false;
    });
  }
  add() {
    this.created_quotes.splice(0, 0, {
      quote: this.quote,
      author: this.author.length ? this.author : '',
    });
    this.clear();
  }
  clear() {
    this.quote = '';
    this.author = '';
  }
  deleteAll() {
    this.created_quotes = [];
  }
  deleteOne(item: Quote) {
    this.created_quotes = this.created_quotes.filter((i) => {
      return i != item;
    });
  }
  saveOne(i: Quote) {
    if (i._id != undefined) return;
    this.loading = true;
    this.quoteService.createQuote(i).subscribe((quote) => {
      this.created_quotes.map((i) => {
        if (i.quote == quote.quote) {
          i._id = quote._id;
        }
        return i;
      });
      this.quotes.splice(0, 0, quote);
      this.loading = false;
    });
  }
  saveAll() {
    const payload = this.created_quotes.filter((i) => {
      return i._id == undefined;
    });
    if (!payload.length) return;
    this.loading = true;
    this.quoteService.createQuotes(payload).subscribe((quotes) => {
      quotes.forEach((element) => {
        this.created_quotes.map((i) => {
          if (i.quote == element.quote) {
            i._id = element._id;
          }
          return i;
        });
      });
      this.quotes.splice(0, 0, ...quotes);
      this.loading = false;
    });
  }
}
