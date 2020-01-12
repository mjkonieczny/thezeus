import { Source } from './Source'

export interface Note {
  name: string;
  text: string;

  sources: Source[];
}
