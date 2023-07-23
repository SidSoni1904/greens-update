import React from "react";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
    window.scrollTo({top: 0, left: 0, behavior:'auto'});

  return null;
}

export default ScrollToTop;
