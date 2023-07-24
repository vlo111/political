import { ArticleAction } from './manager';

export interface IIsOpen {
  isOpened?: boolean;
}

export interface IOpenNodeState extends IIsOpen {
  id: string;
}

export type ArticleState = {
  openNodeCreate?: IIsOpen;
};

export interface ArticleActionType {
  type: ArticleAction;
  payload: ArticleState;
}
