export interface Topic {
  topic: string;
  subtopics?: { subtopic: string; _id?: string }[];
  _id?: string;
}
