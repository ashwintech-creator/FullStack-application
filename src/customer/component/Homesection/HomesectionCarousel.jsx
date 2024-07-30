import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Homesectioncard from "./Homesectioncard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { randomtoyExample } from "../../../Data/toys";

const HomesectionCarousel = ({datapacks,secName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const slidePrev = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  const slideNext = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex);
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = datapacks
    .slice(1,13 )
    .map((item) => <Homesectioncard key={item.id} product={item} />);
  // const items = randomtoyExample
  //   .slice(1,13 )
  //   .map((item) => <Homesectioncard key={item.id} product={item} />);

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 7.5 },
  };

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{secName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex < items.length - 7 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(10%) rotate(360deg)",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon
              fontSize="large"
              sx={{ transform: "rotate(0deg)" }}
            />
          </Button>
        )}
        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "-2rem",
              transform: "translateX(10%) rotate(0deg)",
            }}
            aria-label="prev"
          >
            <ArrowForwardIosIcon
              fontSize="large"
              sx={{ transform: "rotate(180deg)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomesectionCarousel;

/* actually this is what i did:


import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Homesectioncard from "./Homesectioncard";
// import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// import ArrowRightIcon from "@mui/icons-material/ArrowLeft";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { Transform } from "@mui/icons-material";
import { Button } from "@mui/material";
import { randomtoyExample } from "../../../Data/toys";

const HomesectionCarousel = () => {
  const [activeIndex,setActiveIndex]=useState(0);
  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = randomtoyExample.slice(1,20).map((item) => (
    <Homesectioncard product={item}/>
  ));
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5.5 },
  };

  return (
    <div className="border">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !==items.length-5 &&<Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(10%) rotate(360deg)",
          }}
          aria-label="next"
        >
          <ArrowForwardIosIcon
            className=""
            fontSize="large"
            sx={{ transform: "rotate(180deg" }}
          />
        </Button>}
        { <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "-2rem",
            transform: "translateX(10%) rotate(180deg)",
          }}
          aria-label="next"
        >
          <ArrowForwardIosIcon
            className=""
            fontSize="large"
            sx={{ Transform: "rotate(-90deg)" }}
          />
        </Button>
        </div>
        </div>
      );
    };
    
    export default HomesectionCarousel;

    but there was issue in the slide bar which did not respond as expected and it was due to AliceCarousel component

    Sure! Let me break down the solution with a simple example to help you understand how the changes ensure the carousel works correctly when the buttons are clicked.

Key Concepts
Using useRef to Access the Carousel:

useRef is used to create a reference to the AliceCarousel component so we can call methods on it directly.
Managing Active Index:

The activeIndex state keeps track of the current slide index.
Functions slidePrev and slideNext update the activeIndex and also tell the carousel to slide to the new index.
Updating the Slide:

The slideTo method of AliceCarousel is called to move to the specific slide index.
Step-by-Step Explanation
Creating the Reference:

We create a reference to the AliceCarousel component using useRef.
This allows us to directly call methods on the AliceCarousel instance.
Setting Up Slide Functions:

We create slidePrev and slideNext functions to update the activeIndex and tell the carousel to move to the new slide.
For example, when slideNext is called, it increases the activeIndex by 1 and uses the slideTo method to move the carousel to the new index.
Syncing the Active Index:

The syncActiveIndex function ensures that the activeIndex state is updated whenever the slide changes due to other interactions, like swiping.
Here's a simplified analogy:

Imagine you have a photo album and you want to manually flip through the pages.

Step 1: You keep track of the current page number (activeIndex).
Step 2: You create buttons to go to the previous (slidePrev) and next (slideNext) pages.
Step 3: When you click the "Next" button, you increase the page number (activeIndex) and tell the photo album to open the next page (slideTo method).
Here's the updated code again, with comments to explain each part:

javascript
Copy code
import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Homesectioncard from "./Homesectioncard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { randomtoyExample } from "../../../Data/toys";

const HomesectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Keep track of the current slide index
  const carouselRef = useRef(null); // Create a reference to the AliceCarousel component

  // Function to move to the previous slide
  const slidePrev = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex); // Use slideTo method to move the carousel
  };

  // Function to move to the next slide
  const slideNext = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex); // Use slideTo method to move the carousel
  };

  // Sync activeIndex when the slide changes
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  // Create carousel items
  const items = randomtoyExample.slice(1, 20).map((item) => (
    <Homesectioncard key={item.id} product={item} />
  ));

  // Define responsive settings for different screen sizes
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5.5 },
  };

  return (
    <div className="border">
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Attach the reference to the AliceCarousel component
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex} // Sync activeIndex on slide change
          activeIndex={activeIndex}
        />
        {/* Show "Next" button if there are more slides to show 
        {activeIndex < items.length - 1 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(10%) rotate(360deg)",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon
              fontSize="large"
              sx={{ transform: "rotate(180deg)" }}
            />
          </Button>
        )}
        // {/* Show "Prev" button if not on the first slide 
        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "-2rem",
              transform: "translateX(10%) rotate(0deg)",
            }}
            aria-label="prev"
          >
            <ArrowForwardIosIcon
              fontSize="large"
              sx={{ transform: "rotate(0deg)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomesectionCarousel;


*/
