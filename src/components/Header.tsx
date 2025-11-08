import { ShoppingBag, Phone, Menu, X, Settings } from 'lucide-react';
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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-emerald-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">BizPlug</h1>
              <p className="text-xs text-emerald-600">Ethiopia</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('partner')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Sell
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={onAdminAccess}
              className="text-gray-500 hover:text-gray-700 transition-colors p-2"
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
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('partner')}
              className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
            >
              Sell
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={onAdminAccess}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors py-2"
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
