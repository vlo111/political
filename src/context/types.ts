import { IIsOpen } from './reducer/types';

export type ArticleReducerSetState = {
  startOpenNodeCreate: VoidFunction;
  finishOpenNodeCreate: VoidFunction;
};

export type ArticleReducerState = {
  openNodeCreate: IIsOpen;
};

export interface ArticleContextType extends ArticleReducerSetState, ArticleReducerState {}
