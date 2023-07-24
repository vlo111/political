import React, { useCallback, useMemo, useReducer } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { ArticleAction, articleReducer, articleInitialState } from './reducer/manager';
import { ArticleContextType } from './types';
import { IIsOpen } from './reducer/types';

export const ArticleWrapper: React.FC = () => {
  const [state, dispatch] = useReducer(articleReducer, articleInitialState);

  const handleAction = useCallback((type: ArticleAction, payload = {}) => dispatch({ type, payload }), [dispatch]);

  const callbacks = useMemo(
    () => ({
      startOpenNodeCreate: (payload: IIsOpen) => handleAction(ArticleAction.OPEN_CREATE_NODE_START, payload),
      finishOpenNodeCreate: () => handleAction(ArticleAction.OPEN_CREATE_NODE_FINISH),
    }),
    [handleAction]
  );

  const context = useMemo(() => ({ ...callbacks, ...state }), [callbacks, state]);

  return <Outlet context={context} />;
};

export const useArticle: () => ArticleContextType = () => useOutletContext<ArticleContextType>();
