import { useArticle } from '../../context/wrapper';

export const Home = () => {
  const { openNodeCreate, startOpenTags, finishOpenTags } = useArticle();

  return (
    <div>
      <div>Home</div>
      <div>{openNodeCreate.isOpened ? 'start' : 'finish'}</div>
      <button onClick={() => startOpenTags()}>start</button>
      <button onClick={() => finishOpenTags()}>finish</button>
    </div>
  );
};
