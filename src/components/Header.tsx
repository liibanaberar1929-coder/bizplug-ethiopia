import { Zap, Phone, Menu, X, Settings } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onAdminAccess: () => void;
}

export function Header({ onAdminAccess }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">BizPlug</h1>
              <p className="text-xs text-gray-500">Ethiopia's Marketplace</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
            >
              Browse
            </button>
            <button
              onClick={() => scrollToSection('partner')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
            >
              Sell
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={onAdminAccess}
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 ml-2"
              title="Admin"
            >
              <Settings className="h-5 w-5" />
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-100 pt-4">
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2.5"
            >
              Browse Products
            </button>
            <button
              onClick={() => scrollToSection('partner')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2.5"
            >
              Start Selling
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors w-full font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </button>
            <button
              onClick={onAdminAccess}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors py-2.5"
            >
              <Settings className="h-4 w-4" />
              <span>Admin</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
