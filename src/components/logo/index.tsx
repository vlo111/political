import { PATHS } from 'helpers/constants';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Home } from '../icons/home.svg';

type Props = {
  margin?: string;
};

export const Logo = ({ margin }: Props) => {
  const navigate = useNavigate();

  return <Home style={{ cursor: 'pointer', ...(margin ? { margin } : {}) }} onClick={() => navigate(PATHS.ROOT)} />;
};
