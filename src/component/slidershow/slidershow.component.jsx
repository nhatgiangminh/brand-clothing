import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slidershow.styles.scss';
import slider0 from '../../assets/slider0.png';
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.avif';
import slider3 from '../../assets/slider3.avif';

const sliderProp = {
  autoPlay: true,
  infiniteLoop: true,
  dynamicHeight: true,
};
const SliderShow = () => {
  return (
    <div className='carousel-container'>
      <Carousel {...sliderProp}>
        <img className='image-container' src={slider0} alt='' />
        <img className='image-container' src={slider1} alt='' />
        <img className='image-container' src={slider2} alt='' />
        <img className='image-container' src={slider3} alt='' />
      </Carousel>
    </div>
  );
};
export default SliderShow;
