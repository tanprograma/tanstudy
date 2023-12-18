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
import { CreateDiaryComponent } from './app/components/create-diary/create-diary.component';
import { CreateReviewComponent } from './app/components/create-review/create-review.component';
import { CreateThoughtComponent } from './app/components/create-thought/create-thought.component';
import { CreatePlanComponent } from './app/components/create-plan/create-plan.component';
import { DiaryComponent } from './app/components/diary/diary.component';
import { PlanComponent } from './app/components/plan/plan.component';
import { ThoughtComponent } from './app/components/thought/thought.component';
import { ReviewComponent } from './app/components/review/review.component';
import { CreateFieldComponent } from './app/components/create-field/create-field.component';
import { CreateTodoComponent } from './app/components/create-todo/create-todo.component';
import { TodoComponent } from './app/components/todo/todo.component';
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
      { path: 'diary', component: DiaryComponent },
      { path: 'plans', component: PlanComponent },
      { path: 'todos', component: TodoComponent },
      { path: 'thoughts', component: ThoughtComponent },
      { path: 'reviews', component: ReviewComponent },

      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: 'create-format', component: CreateFormatComponent },
          { path: 'create-topic', component: CreateTopicComponent },
          { path: 'create-subtopic', component: CreateSubtopicComponent },
          { path: 'create-question', component: CreateQuestionComponent },
          { path: 'create-quote', component: CreateQuoteComponent },
          { path: 'create-diary', component: CreateDiaryComponent },
          { path: 'create-plan', component: CreatePlanComponent },
          { path: 'create-review', component: CreateReviewComponent },
          { path: 'create-thought', component: CreateThoughtComponent },
          { path: 'create-field', component: CreateFieldComponent },
          { path: 'create-todo', component: CreateTodoComponent },
        ],
      },
    ],
  },
];
