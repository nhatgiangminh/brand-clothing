import {
  DirectoryBodyContainer,
  BackgroundImage,
  DirectoryItemContainer,
} from './directory-item.styles.js';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ directory }) => {
  const { id, imageUrl, title, route } = directory;
  const navigate = useNavigate();
  const navigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={navigateHandler} key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
