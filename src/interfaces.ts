export interface Field {
  _id?: string;

  name: string;
}
export interface Topic {
  _id?: string;

  topic: string;
  field: string;
  subtopics?: { subtopic: string; _id?: string }[];
}
export interface Diary {
  _id?: string;
  created?: string | Date;
  content: string;
}
export interface Review {
  _id?: string;
  created?: string | Date;
  topic: string;
  points: string[];
}
export interface Thought {
  _id?: string;
  created?: string | Date;
  topic: string;
  points: string[];
}
export interface Plan {
  _id?: string;
  created?: string | Date;
  topic: string;
  points: { item: string; completed?: boolean }[];
}
export interface Todo {
  _id?: string;
  created?: string | Date;
  topic: string;
  points: { item: string; completed?: boolean }[];
}
// export interface Review {
//   _id?: string;
//   created?: string | Date;
//   topic: string;
//   points: string[];
// }
