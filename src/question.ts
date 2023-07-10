export interface Question {
  question: string;
  topic?: string;
  format?: string;
  subtopic?: string;
  choices?: { choice: string; isAnswer: boolean }[];
  _id?: string;
  created_at?: number;
}
