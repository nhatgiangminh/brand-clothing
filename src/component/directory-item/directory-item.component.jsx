import {
  DirectoryBodyContainer,
  BackgroundImage,
  DirectoryItemContainer,
} from './directory-item.styles.js';

const DirectoryItem = ({ directory }) => {
  const { id, imageUrl, title } = directory;
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
