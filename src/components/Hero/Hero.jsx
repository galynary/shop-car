import { SharedLayout } from '../SharedLayout/SharedLayout';
import img from '../../image/car-1200-1.png';

const Hero = () => (
  <>
    <SharedLayout />
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-description">
          <p className="hero-text">Mercedes Benz</p>
          <h2 className="hero-title">
            Your key to luxury and perfection, where every detail is created for
            your comfort and style
          </h2>
        </div>
        <div className="wrap-img">
          <img className="hero-img" src={img} alt="car" />
        </div>
      </div>
    </div>
  </>
);

export default Hero;
