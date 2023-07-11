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
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'mainapp', component: MainAppComponent },

  {
    path: 'app',
    component: HomeComponent,
    children: [
      { path: 'questions', component: QuestionsComponent },

      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: 'create-format', component: CreateFormatComponent },
          { path: 'create-topic', component: CreateTopicComponent },
          { path: 'create-subtopic', component: CreateSubtopicComponent },
          { path: 'create-question', component: CreateQuestionComponent },
        ],
      },
    ],
  },
];
