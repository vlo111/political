import { ArticleActionType, ArticleState } from './types';

const initState = {
  isOpened: false,
};

export enum ITEM {
  OPEN_TAGS = 'openNodeCreate',
}

export enum ArticleAction {
  OPEN_TAGS_START = 'OPEN_TAGS_START',
  OPEN_TAGS_FINISH = 'OPEN_TAGS_FINISH',
}

export const articleInitialState: ArticleState = {
  openNodeCreate: initState,
};

export const articleReducer: (state: ArticleState, action: ArticleActionType) => ArticleState = (state, action) => {
  const { type, payload } = action;

  const start: (item: ITEM) => ArticleState = (item: ITEM) => ({
    ...state,
    [item]: {
      ...state[item],
      ...payload,
      isOpened: true,
    },
  });

  const end = (item: ITEM) => ({
    ...state,
    [item]: { ...state[item], isOpened: false },
  });

  switch (type) {
    case ArticleAction.OPEN_TAGS_START:
      return start(ITEM.OPEN_TAGS);
    case ArticleAction.OPEN_TAGS_FINISH:
      return end(ITEM.OPEN_TAGS);
    default:
      return state;
  }
};
