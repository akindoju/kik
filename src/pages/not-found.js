import { useEffect } from 'react';
import Header from '../components/Header';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Not Found!';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-3xl ">Not Found!</p>
      </div>
    </div>
  );
};

export default NotFound;
