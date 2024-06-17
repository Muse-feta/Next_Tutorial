import React from 'react'
import { AllImages } from './image'
import Image from 'next/image'
import Link from 'next/link';

const FeedImage = () => {
  return (
    <>
      <div>FeedImage</div>
      <div>
        {AllImages.map(({ id, src, name, location }) => (
          <Link href={`/photo-feed/${id}`}>
            <Image key={id} src={src} alt={name} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default FeedImage