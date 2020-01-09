import { Note } from './Note'

export interface Set {
  name: string;
  description: string;
  subsets: Set[];
  notes: Note[];
}
