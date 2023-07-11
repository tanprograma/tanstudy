import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';

import { CreateFormatComponent } from './components/create-format/create-format.component';

import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateSubtopicComponent } from './components/create-subtopic/create-subtopic.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { CreateQuoteComponent } from './components/create-quote/create-quote.component';
import { QuotesComponent } from './components/quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTopicComponent,
    CreateQuestionComponent,

    CreateFormatComponent,

    HomeComponent,
    AdminComponent,
    LinkItemComponent,
    ViewItemComponent,
    CreateSubtopicComponent,
    QuestionsComponent,
    FooterComponent,
    MainNavigationComponent,
    MainTitleComponent,
    CardComponent,
    LoginComponent,
    LoaderComponent,
    AvatarComponent,
    MainAppComponent,
    CreateQuoteComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
