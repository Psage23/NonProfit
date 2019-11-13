import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [ 

  {
    src: './sponsorsLogo/cardinals.jpg',
    altText: 'Arizona Cardinals logo'
  },
  {
    src: './sponsorsLogo/panera.jpg',
    altText: 'Panera Bread logo'
  },
  {
    src: './sponsorsLogo/suns.png',
    altText: 'Phoenix Suns logo'
  },
  {
    src: './sponsorsLogo/azrocks.jpg',
    altText: 'Indorr climbing AZ on the Rocks logo'
  },
  {
    src: './sponsorsLogo/desertbotgarden.jpg',
    altText: 'Desert Botanical Garden logo'
  },
  {
    src: './sponsorsLogo/disneyland.jpg',
    altText: 'DisneyLand logo'
  },
  {
    src: './sponsorsLogo/gatorade.jpg',
    altText: 'Gatorade logo'
  },
  {
    src: './sponsorsLogo/odysea.png',
    altText: 'Ody Sea Aquarium logo'
  },
  {
    src: './sponsorsLogo/phxsymphony.jpg',
    altText: 'The Phoenix Symphony'
  },
  {
    src: './sponsorsLogo/propel.jpg',
    altText: 'Propel Logo'
  }

];

const Sponsors = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption  captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
      <div className="SponsorCarousel">
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default Sponsors;