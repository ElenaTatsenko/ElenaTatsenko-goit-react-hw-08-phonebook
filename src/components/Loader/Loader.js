import { ColorRing } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderBox >
            <ColorRing />
        </LoaderBox>
  );
};

export default Loader;
