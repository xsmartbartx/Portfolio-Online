import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white-100">Your Name</h2>
            <p className="text-secondary text-sm mt-1">Full-Stack Developer | UI/UX Designer</p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p className="text-secondary text-sm flex items-center justify-center">
              Made with <FaHeart className="text-red-500 mx-1" size={14} /> and React
            </p>
          </div>
          
          <div className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 