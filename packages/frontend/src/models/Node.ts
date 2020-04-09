export interface Node {
  id: string;
  text: string;

  children: Node[];
  parents: Node[];
}
