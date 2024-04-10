'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css'
// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';

import Review from './Review';

import data from './ReviewData'
import BtnLink from '../reusable/btn-link';

const Reviews = () => {

  function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

  }

  return (
    <section className='flex flex-col gap-8 p-4 py-12'>
      <h6 className="text-3xl lg:text-6xl font-bold text-center">Opinie naszych Klientów</h6>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        loop={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      
      >
        {
          data.map((review) => (
              <SwiperSlide key={generateRandomString()}>
                <Review
                  img={review.img}
                  name={review.name}
                  opinion={review.opinion}
                  rate={review.rate}
                  link={review.link}
                />
              </SwiperSlide>
          ))
        }
        
        
      </Swiper>

      <div className="flex mx-auto">
        <BtnLink link='https://g.page/r/CeZo3bnybob7EBM/review' >Dodaj coś od siebie</BtnLink>
      </div>
    </section>
  );
}

export default Reviews

