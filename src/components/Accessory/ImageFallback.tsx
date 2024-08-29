// ImageFallback.tsx
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from "react";

interface ImageFallbackProps {
  src: string | StaticImageData;  // Accept both string and StaticImageData
  fallbackSrc: string | StaticImageData;  // Accept both types
  alt: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
}

const ImageFallback = ({ src, fallbackSrc, ...rest }: ImageFallbackProps) => {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      alt=""
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Image is broken, use fallback
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        // Image fails to load, use fallback
        set_imgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageFallback;
