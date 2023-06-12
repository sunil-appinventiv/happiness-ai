import React from "react";
import Image from "next/image";

const ImageWrapper = ({
    src = "",
    alt = "content-image",
    width = "",
    height = "",
  }) => {
    return (
      <Image
      loader={({ src }) => {
        return src;
      }}
        loading="lazy"
        src={src}
         alt={alt}
        //  width={width}
        //     height={height}
      ></Image>
    );
  };
  
  export default ImageWrapper;