import { ArticleActionType, ArticleState } from './types';

const initState = {
  isOpened: false,
};

export enum ITEM {
  OPEN_CREATE_NODE = 'openNodeCreate',
}

export enum ArticleAction {
  OPEN_CREATE_NODE_START = 'OPEN_CREATE_NODE_START',
  OPEN_CREATE_NODE_FINISH = 'OPEN_CREATE_NODE_FINISH',
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
    case ArticleAction.OPEN_CREATE_NODE_START:
      return start(ITEM.OPEN_CREATE_NODE);
    case ArticleAction.OPEN_CREATE_NODE_FINISH:
      return end(ITEM.OPEN_CREATE_NODE);
    default:
      return state;
  }
};
