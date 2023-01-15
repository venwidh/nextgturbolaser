import clsx from "clsx";
import { FunctionComponent, useRef, useState } from "react";
import ReactImageGallery from "react-image-gallery";

const isMobile = false;

const ImageGallery: FunctionComponent<{
  images: {
    src: string;
    thumbnailSrc?: string;
    alt?: string;
    redirectUrl?: string;
  }[];
  type?: "gallery" | "slider";
}> = ({ images, type = "slider" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const reactImageGallery = useRef<ReactImageGallery>(null);

  return (
    <ReactImageGallery
      additionalClass={clsx("imageGallery", isMobile ? "mobile" : "")}
      ref={reactImageGallery}
      items={images.map((img) => ({
        original: img.src,
        thumbnail: img.thumbnailSrc || img.src,
        originalTitle: img.alt,
        originalClass: clsx("original", type === "slider" && "slider"),
      }))}
      infinite={type === "slider"}
      autoPlay={type === "slider"}
      slideInterval={5000}
      showThumbnails={(!isMobile && type !== "slider") || isFullscreen}
      thumbnailPosition={!isMobile && type !== "slider" ? "right" : "bottom"}
      slideOnThumbnailOver={true}
      showNav={!isMobile && type === "slider"}
      showPlayButton={false}
      showFullscreenButton={false}
      onScreenChange={(fullScreenElement) => {
        setIsFullscreen(!!fullScreenElement);
      }}
    />
  );
};

export default ImageGallery;
