// components/SchoolImage.js
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface SchoolImageProps {
  title?: string;
}

const SchoolImage: React.FC<SchoolImageProps> = ({ title }) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Construct the URL to fetch the image
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DEV}/api/schools/img/${title}`;    
    setImageSrc(url);
  }, [title]);

  if (!imageSrc) return null;

  return (
    <Image
      src={imageSrc}
      alt="School Mark"
      width={100}  // Adjust width and height as needed
      height={100} // Adjust width and height as needed    
      className='rounded-full w-16 h-16'
    />
  );
};

export default SchoolImage;
