import {Navigation, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper"

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

function Carousel() {
  return (

            <div className='h-[600px] bg-white'>
                <Swiper loop={true}
                    spaceBetween={0}
                    modules={[Navigation, Autoplay]}
                    navigation 
                    autoplay={{
                        delay: 4500
                    }} className="h-[50%]">
                    <SwiperSlide>
                        <img src={"/carousel_1.jpg"} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"/carousel_2.jpg"} alt="" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={"/carousel_3.jpg"} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"/carousel_4.jpg"} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={"/carousel_5.jpg"} alt="" />
                    </SwiperSlide>
                </Swiper>
            <div className='h-[50%] bg-gradient-to-b from-stone-900'/>
        </div>
  )         
}

export default Carousel