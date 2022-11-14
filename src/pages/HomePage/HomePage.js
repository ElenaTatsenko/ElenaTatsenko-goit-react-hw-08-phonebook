import { Image } from "./HomePage.styled";
import homeBg from '../../components/images/homeBg.jpg'

const HomePage = () => {

    return (
        <div>
            <h1>Create your personal world</h1>
            <Image src={homeBg} alt="Phone book" />
        </div>
    )
};

export default HomePage;