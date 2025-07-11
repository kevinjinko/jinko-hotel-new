import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-medium text-[#FDF6E3] mb-4">
              Jinko
            </h3>
            <p className="text-lg font-light text-[#FDF6E3] leading-relaxed">
              Make your hotel bookable on AI channels and increase your direct booking share.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-[#FDF6E3] mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">AI Visibility</a></li>
              <li><a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">Website Optimization</a></li>
              <li><a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">Booking Management</a></li>
              <li><a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-[#FDF6E3] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#FDF6E3] font-light">
              © {currentYear} Jinko. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-[#FDF6E3] font-light hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
