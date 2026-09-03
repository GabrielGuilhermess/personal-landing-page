import Image, { type StaticImageData } from "next/image";
import { cn } from "@/design-system/lib/utils";
import MediaFrame, { type MediaFrameRadius } from "./MediaFrame";

export interface MediaPreviewProps {
  src: string | StaticImageData;
  alt: string;
  aspectRatio?: string;
  objectPosition?: string;
  sizes?: string;
  priority?: boolean;
  radius?: MediaFrameRadius;
  className?: string;
  imageClassName?: string;
}

export default function MediaPreview({
  src,
  alt,
  aspectRatio = "16 / 9",
  objectPosition = "center",
  sizes = "100vw",
  priority = false,
  radius = "surface",
  className,
  imageClassName,
}: MediaPreviewProps) {
  return (
    <MediaFrame
      aspectRatio={aspectRatio}
      radius={radius}
      className={cn(
        "transition-transform duration-[var(--motion-normal)] motion-reduce:transform-none md:hover:-translate-y-0.5 md:hover:scale-[1.008]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imageClassName)}
        style={{ objectPosition }}
      />
    </MediaFrame>
  );
}
