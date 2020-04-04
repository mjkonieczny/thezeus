export interface Node {
  id: string;
  text: string;

  adjacents: Node[];
}
