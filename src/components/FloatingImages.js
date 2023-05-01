import React, { useRef, useEffect } from 'react';
import img1 from "../images/logo.svg"

function FloatingImages() {
  const imagesRef = useRef([]);

  useEffect(() => {
    let images = imagesRef.current;
    let x = 0;
    let y = 0;
    let speed = 2;

    function moveImages() {
      for (let i = 0; i < images.length; i++) {
        let img = images[i]?.current;

        // Check if the img element exists before accessing its style property
        if (!img) {
          console.error(`Image ${i+1} is not defined`);
          continue;
        }

        let xPos = parseInt(img.style.left);
        let yPos = parseInt(img.style.top);

        // Calculate the distance between the image and the cursor
        let xDistance = x - xPos;
        let yDistance = y - yPos;
        let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

        // If the image is too close to the cursor, move it away
        if (distance < 150) {
          let xSpeed = speed * (xDistance / distance);
          let ySpeed = speed * (yDistance / distance);
          xPos -= xSpeed;
          yPos -= ySpeed;
        } else {
          // Move the image randomly
          xPos += Math.random() * speed * 2 - speed;
          yPos += Math.random() * speed * 2 - speed;
        }

        // Update the image position
        img.style.left = xPos + "px";
        img.style.top = yPos + "px";
      }

      // Call the moveImages function again after a short delay
      setTimeout(moveImages, 50);
    }

    // Update the cursor position whenever it moves
    function handleMouseMove(event) {
      x = event.clientX;
      y = event.clientY;
    }

    // Start the animation
    moveImages();

    // Add the event listener for tracking the cursor position
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <img src={img1} id="img1" alt="Image 1" style={{ position: 'absolute', left: 0, top: 0, zIndex: -1 }} ref={el => (imagesRef.current[0] = el)} />
      <img src={img1} id="img2" alt="Image 2" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: -1 }} ref={el => (imagesRef.current[1] = el)} />
      <img src={img1} id="img3" alt="Image 3" style={{ position: 'absolute', right: 0, bottom: 0, zIndex: -1 }} ref={el => (imagesRef.current[2] = el)} />
    </div>
  );
}


export default FloatingImages;