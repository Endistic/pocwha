import { FunctionComponent, lazy } from 'react';
import clsx from 'clsx';
import { ImageProps as IP } from 'next/image';
import { useImage } from '@/hooks/image';

const NextImage = lazy(() => import('next/image'));
const Skeleton = lazy(() => import('react-loading-skeleton'));

export interface ImageProps extends IP {
  src: string;
}
/**
 * This component using outbound image url
 */
const Image: FunctionComponent<ImageProps> = (props) => {
  const { src, width, height } = props;

  const url = useImage({ src });

  return (
    <>
      {url == null ? (
        <Skeleton
          width={width}
          height={height} />
      ) : (
        <NextImage
          loading="lazy"
          {...props}
          // className={clsx(
          //   'object-contain',
          //   props.className,
          // )}
          src={url} />
      )}
    </>
  );
}

export default Image;
