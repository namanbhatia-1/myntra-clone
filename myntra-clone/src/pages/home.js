import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const slides = [
    { url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/1/1260f21c-497c-44bf-bd38-c7fc088d43ac1733075353899-Prebuzz_1920x504.jpg' },
    { url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg' },
    { url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg' },
    { url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg' },
    { url: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg' },
  ];

  const imageRows = [
    ['./1.png', './2.png', './3.png', './4.png', './5.png', './6.png'],
    ['./7.png', './8.png', './9.png', './10.png', './11.png', './12.png'],
    ['./13.png', './14.png', './15.png', './16.png', './17.png', './18.png'],
    ['./19.png', './20.png', './21.png', './22.png', './23.png', './24.png']
  ];

  const imageCols = [['./25.png'], ['./26.png']];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageRowIndex, setImageRowIndex] = useState(0);
  const [imageColsIndex, setImageColsIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevImageRow = () => {
    const newIndex = imageRowIndex === 0 ? imageRows.length - 1 : imageRowIndex - 1;
    setImageRowIndex(newIndex);
  };

  const nextImageRow = () => {
    const newIndex = imageRowIndex === imageRows.length - 1 ? 0 : imageRowIndex + 1;
    setImageRowIndex(newIndex);
  };

  const prevImageCols = () => {
    const newIndex = imageColsIndex === 0 ? imageCols.length - 1 : imageColsIndex - 1;
    setImageColsIndex(newIndex);
  };

  const nextImageCols = () => {
    const newIndex = imageColsIndex === imageCols.length - 1 ? 0 : imageColsIndex + 1;
    setImageColsIndex(newIndex);
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full flex justify-center items-center p-7 select-none">
          <a href="https://www.myntra.com/myntra">
            <img className="h-52 select-none" src="./flat-image.png" alt="flat" />
          </a>
        </div>

        {/* Main Slider */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className={`w-full h-[400px] bg-center bg-cover transition-all duration-700 ease-in-out transform `}
        ></div>

        <div className="absolute top-[75%] left-5 text-2xl rounded-full p-2 px-3 bg-black/20 text-white cursor-pointer">
          <FontAwesomeIcon onClick={prevSlide} icon={faChevronLeft} />
        </div>
        <div className="absolute top-[75%] right-5 text-2xl rounded-full p-2 px-3 bg-black/20 text-white cursor-pointer">
          <FontAwesomeIcon onClick={nextSlide} icon={faAngleRight} />
        </div>

        <div className="p-12 text-5xl font-Teko select-none text-gray-700">
          <p>Medal Worthy Brands To Bag</p>
        </div>

        {/* Image Row Section */}
        <div className="relative">
          <div
            className={`flex gap-2 justify-center transition-all duration-700 ease-in-out transform `}
          >
            {imageRows[imageRowIndex].map((src, idx) => (
              <img key={idx} src={src} alt={`image-${idx}`} className="w-80 h-[328px] select-none" />
            ))}
          </div>
          <div className="absolute top-[30%] left-5 text-2xl rounded-full p-2 px-3 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon onClick={prevImageRow} icon={faChevronLeft} />
          </div>
          <div className="absolute top-[30%] right-5 text-2xl rounded-full p-2 px-3 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon onClick={nextImageRow} icon={faAngleRight} />
          </div>
        </div>

        <div className="p-12 text-5xl font-Teko select-none text-gray-700">
          <p>Grand Global Brands</p>
        </div>

        {/* Image Column Section */}
        <div className="relative">
          <div
            className={`flex justify-center transition-all duration-700 ease-in-out transform `}
          >
            {imageCols[imageColsIndex].map((src, idx) => (
              <img key={idx} src={src} alt={`image-${idx}`} className="w-full mx-1 select-none" />
            ))}
          </div>
          <div className="absolute top-[30%] left-5 text-2xl rounded-full p-2 px-3 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon onClick={prevImageCols} icon={faChevronLeft} />
          </div>
          <div className="absolute top-[30%] right-5 text-2xl rounded-full p-2 px-3 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon onClick={nextImageCols} icon={faAngleRight} />
          </div>
        </div>

        <div className="p-12 text-5xl font-Teko select-none text-gray-700">
          <p>Shop By Category</p>
        </div>

        <div className="select-text">
          <img src="./27.png" alt="27" />
          <img src="./28.png" alt="28" />
          <img src="./29.png" alt="29" />
          <img src="./30.png" alt="30" />
          <img src="./31.png" alt="31" />
          <img src="./32.png" alt="32" />
        </div>
      </div>
    </>
  );
}

export default Home;
