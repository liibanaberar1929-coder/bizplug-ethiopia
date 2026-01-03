import { Zap, Facebook, Instagram, Send, Linkedin, Youtube, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 p-2 rounded-lg mt-1">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">BizPlug</h3>
              <p className="text-sm text-gray-400">Ethiopia's Trusted Marketplace</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-gray-200">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#products" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Browse Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">About Us</a></li>
              <li><a href="#partner" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Become a Seller</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors font-medium">Get Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-gray-200">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.facebook.com/share/1Cr4vDPDZ7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" title="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/biz_plug_1929?igsh=MXVjZmUzMG1sM243eA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" title="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://t.me/biz_Plug_et" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" title="Telegram">
                <Send className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@bizpluget" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" title="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@biz_pluget" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" title="TikTok">
                <Music className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/liben-a-022b74209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" title="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-gray-400 text-sm">
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
