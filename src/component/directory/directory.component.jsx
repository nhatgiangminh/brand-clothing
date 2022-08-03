import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = ({ directories }) => {
  return (
    <DirectoryContainer>
      {directories.map((category) => (
        <DirectoryItem directory={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};
export default Directory;
