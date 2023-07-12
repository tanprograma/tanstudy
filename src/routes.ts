import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { AdminComponent } from './app/components/admin/admin.component';
import { CreateFormatComponent } from './app/components/create-format/create-format.component';
import { CreateTopicComponent } from './app/components/create-topic/create-topic.component';
import { CreateSubtopicComponent } from './app/components/create-subtopic/create-subtopic.component';
import { CreateQuestionComponent } from './app/components/create-question/create-question.component';
import { QuestionsComponent } from './app/components/questions/questions.component';
import { LoginComponent } from './app/components/login/login.component';
import { MainAppComponent } from './app/components/main-app/main-app.component';
import { QuotesComponent } from './app/components/quotes/quotes.component';
import { CreateQuoteComponent } from './app/components/create-quote/create-quote.component';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainAppComponent },
  { path: 'mainapp', component: MainAppComponent },

  {
    path: 'app',
    component: HomeComponent,
    children: [
      { path: 'questions', component: QuestionsComponent },
      { path: 'quotes', component: QuotesComponent },

      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: 'create-format', component: CreateFormatComponent },
          { path: 'create-topic', component: CreateTopicComponent },
          { path: 'create-subtopic', component: CreateSubtopicComponent },
          { path: 'create-question', component: CreateQuestionComponent },
          { path: 'create-quote', component: CreateQuoteComponent },
        ],
      },
    ],
  },
];
