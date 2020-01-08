import { SetState } from './set/reducer'

export interface SimpleAction {
  type: string;
}

export interface Action<Payload> extends SimpleAction {
  payload: Payload;
}

export interface State {
  set: SetState;
}
