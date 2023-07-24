import { IIsOpen } from './reducer/types';

export type ArticleReducerSetState = {
  startOpenTags: VoidFunction;
  finishOpenTags: VoidFunction;
};

export type ArticleReducerState = {
  openNodeCreate: IIsOpen;
};

export interface ArticleContextType extends ArticleReducerSetState, ArticleReducerState {}
