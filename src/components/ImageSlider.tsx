import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./ImageSlider.css"; // Import your CSS file

// Import your images
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }} // Auto slide every 6 seconds
      style={{ width: "80%", maxWidth: "800px" }}  // Prevents overflow
    >
      <SwiperSlide>
        <div className="image-container">
          <img src={image1} alt="Slide 1" className="slider-image" />
          <span className="tooltip">This is Slide 1</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image-container">
          <img src={image2} alt="Slide 2" className="slider-image" />
          <span className="tooltip">This is Slide 2</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="image-container">
          <img src={image3} alt="Slide 3" className="slider-image" />
          <span className="tooltip">This is Slide 3</span>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default ImageSlider;
