import { Zap, Facebook, Instagram, Send, Linkedin, Youtube, Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white py-14 border-t border-navy-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <div className="flex items-start space-x-3">
            <div className="bg-action-600 p-2 rounded-lg mt-1">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">BizPlug</h3>
              <p className="text-sm text-navy-300">Ethiopia&apos;s Trust-First B2B Network</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-navy-100 font-display">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#categories" className="text-navy-300 hover:text-action-400 transition-colors font-medium">Categories</a></li>
              <li><a href="#businesses" className="text-navy-300 hover:text-action-400 transition-colors font-medium">Browse Businesses</a></li>
              <li><a href="#spotlight" className="text-navy-300 hover:text-action-400 transition-colors font-medium">Spotlight</a></li>
              <li><a href="#partner" className="text-navy-300 hover:text-action-400 transition-colors font-medium">List Your Business</a></li>
              <li><a href="#contact" className="text-navy-300 hover:text-action-400 transition-colors font-medium">Get Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5 text-navy-100 font-display">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.facebook.com/share/1Cr4vDPDZ7" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-action-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/biz_plug_1929?igsh=MXVjZmUzMG1sM243eA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-action-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/biz_Plug_et" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-action-600 transition-colors" aria-label="Telegram">
                <Send className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@bizpluget" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-action-600 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@biz_pluget" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-action-600 transition-colors" aria-label="TikTok">
                <Music className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/liben-a-022b74209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center hover:bg-action-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-navy-400 text-sm">
              &copy; {new Date().getFullYear()} BizPlug Ethiopia. All rights reserved.
            </p>
            <p className="text-navy-500 text-xs">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
