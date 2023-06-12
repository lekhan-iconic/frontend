import React from "react";
// import iconDemo from "../assets/icons/SvgIcon.png";

const ImageComponentTwo = () => {
  const imageStyle = {
    width: "60px",
    height: "60px",
  };

  return (
    <div>
      {/* Your content */}
      <img
        src="data:image/jpeg;base64,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"
        alt="My Image"
        style={imageStyle}
      />
      {/* Rest of your content */}
    </div>
  );
};

export default ImageComponentTwo;
