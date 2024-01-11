import Image from 'next/image';

const MyImageComponent = () => {
  return (
    <div>
      <h1>My Image Component</h1>
      <Image
        src="C:\Users\acer\Pictures\Bottommost.png" // Path to your image inside the 'public' directory
        alt="Description of the image"
        width={500} // Width of the image in pixels
        height={300} // Height of the image in pixels
      />
    </div>
  );
};

export default MyImageComponent;
