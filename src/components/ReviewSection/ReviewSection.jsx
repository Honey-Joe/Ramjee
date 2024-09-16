import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewData } from "../../assets/API/ReviewData";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-[100%]">
        <div className="w-[90%] mx-auto my-32">
            <div className="my-5">
            <div className="flex items-center">
            <div className="px-5 py-[5px] rounded-3xl bg-[#1176F0] relative left-3"></div>
            <div className="px-4 py-2 border-[1px] border-[#1176F0] rounded-3xl">
              <p className="font-[Pro] font-bold text-base text-center">
                Testimonial
              </p>
            </div>
          </div>
          <div>
            <p className="font-[Pro] font-bold text-[24px] md:text-[34px]">
              WHAT OUR{" "}
              <span className="text-[#1176F0] underline">CUSTOMER SAYS</span>
            </p>
          </div>

            </div>
          
          <div className="container">
            <Slider {...settings}>
              {ReviewData.map((item) => (
                <ReviewCard
                  content={item.content}
                  imgurl={item.imgurl}
                  name={item.name}
                  desig={item.desig}
                ></ReviewCard>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
