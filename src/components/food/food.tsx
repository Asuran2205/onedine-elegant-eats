import React from 'react';
import indian_food from '@/assets/images/indian_cusine.png';

const Food = () => {
  return (
    <div className="hidden md:block text-white z-10 w-full h-full absolute overflow-hidden">
       <video autoPlay muted loop className="w-full h-full">
  <source src="/one_dine.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
    </div>
  )
}

export default Food