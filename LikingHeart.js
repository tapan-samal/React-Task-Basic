import React, { useState } from "react";

const LikingHeart = () => {
  const [isLiked, setIsLIked] = useState(false);

  const handleToggleLike = () => {
    setIsLIked(!isLiked);
  };

  const styles = {
    color: "red",
  };

  return (
    <>
      <p onClick={handleToggleLike} style={{ fontSize: "100px" }}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={styles}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </>
  );
};

export default LikingHeart;

//Link: font-awesome/6.5.2/css/all.min.css
