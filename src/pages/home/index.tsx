import { useArticle } from '../../context/wrapper';

export const Home = () => {
  const { openNodeCreate, startOpenNodeCreate, finishOpenNodeCreate } = useArticle();

  return (
    <div>
      <div>Home</div>
      <div>{openNodeCreate.isOpened ? 'start' : 'finish'}</div>
      <button onClick={() => startOpenNodeCreate()}>start</button>
      <button onClick={() => finishOpenNodeCreate()}>finish</button>
    </div>
  );
};
