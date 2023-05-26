interface IImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export const imageLoader = ({ src, width, quality }: IImageLoaderProps) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
