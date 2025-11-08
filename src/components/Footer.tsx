import { ShoppingBag, Facebook, Instagram, Send, Linkedin, Youtube, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="h-8 w-8 text-emerald-400" />
            <div>
              <h3 className="text-xl font-bold">BizPlug Ethiopia</h3>
              <p className="text-sm text-gray-400">Ethiopia's Fastest Growing Marketplace</p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-bold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="text-gray-400 hover:text-emerald-400 transition-colors">Shop</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#partner" className="text-gray-400 hover:text-emerald-400 transition-colors">Partner</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="text-right md:text-left">
            <h4 className="font-bold mb-4 text-gray-300">Follow Us</h4>
            <div className="flex flex-wrap gap-3 justify-start md:justify-start">
              <a href="https://www.facebook.com/share/1Cr4vDPDZ7" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/biz_plug_1929?igsh=MXVjZmUzMG1sM243eA==" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/biz_Plug_et" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="Telegram">
                <Send className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@bizpluget" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@biz_pluget" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="TikTok">
                <Music className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/liben-a-022b74209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BizPlug Ethiopia. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
