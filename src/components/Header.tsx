import { Zap, Menu, X, Settings, Search, Building2 } from 'lucide-react';
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
    <header className="bg-navy-800/95 backdrop-blur-md border-b border-navy-700 sticky top-0 z-50 shadow-lg shadow-navy-950/30">
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('top')}
            className="flex items-center space-x-2.5 group"
          >
            <div className="bg-action-600 p-2 rounded-lg group-hover:bg-action-500 transition-colors shadow-md shadow-action-600/30">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-white tracking-tight font-display">BizPlug</h1>
              <p className="text-[11px] text-navy-200 -mt-0.5">Ethiopia B2B Marketplace</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('categories')}
              className="text-navy-100 hover:text-white hover:bg-navy-700 transition-colors font-medium px-4 py-2 rounded-lg"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection('businesses')}
              className="text-navy-100 hover:text-white hover:bg-navy-700 transition-colors font-medium px-4 py-2 rounded-lg"
            >
              Businesses
            </button>
            <button
              onClick={() => scrollToSection('spotlight')}
              className="text-navy-100 hover:text-white hover:bg-navy-700 transition-colors font-medium px-4 py-2 rounded-lg"
            >
              Spotlight
            </button>
            <button
              onClick={() => scrollToSection('partner')}
              className="text-navy-100 hover:text-white hover:bg-navy-700 transition-colors font-medium px-4 py-2 rounded-lg"
            >
              List Your Business
            </button>
            <button
              onClick={() => scrollToSection('search')}
              className="flex items-center space-x-2 bg-action-600 text-white px-4 py-2 rounded-lg hover:bg-action-500 transition-colors font-medium shadow-md shadow-action-600/30"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
            <button
              onClick={onAdminAccess}
              className="text-navy-300 hover:text-white transition-colors p-2 ml-1"
              title="Admin"
              aria-label="Admin access"
            >
              <Settings className="h-5 w-5" />
            </button>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-2 space-y-1 border-t border-navy-700 pt-4">
            <button
              onClick={() => scrollToSection('categories')}
              className="flex items-center space-x-3 w-full text-left text-navy-100 hover:text-white hover:bg-navy-700 transition-colors font-medium py-3 px-3 rounded-lg"
            >
              <Building2 className="h-5 w-5 text-action-400" />
              <span>Categories</span>
            </button>
            <button
              onClick={() => scrollToSection('businesses')}
              className="block w-full text-left text-navy-100 hover:text-white hover:bg-navy-700 transition-colors font-medium py-3 px-3 rounded-lg"
            >
              Businesses
            </button>
            <button
              onClick={() => scrollToSection('spotlight')}
              className="block w-full text-left text-navy-100 hover:text-white hover:bg-navy-700 transition-colors font-medium py-3 px-3 rounded-lg"
            >
              Spotlight
            </button>
            <button
              onClick={() => scrollToSection('partner')}
              className="block w-full text-left text-navy-100 hover:text-white hover:bg-navy-700 transition-colors font-medium py-3 px-3 rounded-lg"
            >
              List Your Business
            </button>
            <button
              onClick={() => scrollToSection('search')}
              className="flex items-center justify-center space-x-2 bg-action-600 text-white px-5 py-3 rounded-lg hover:bg-action-500 transition-colors w-full font-medium mt-2"
            >
              <Search className="h-4 w-4" />
              <span>Search Businesses</span>
            </button>
            <button
              onClick={onAdminAccess}
              className="flex items-center space-x-2 text-navy-300 hover:text-white transition-colors py-3 px-3 rounded-lg w-full"
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
