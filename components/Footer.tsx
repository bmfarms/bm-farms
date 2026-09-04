import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800/80">
          
          {/* Company Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-wider">BM FARMS</span>
              <span className="text-[11px] text-emerald-500 font-bold tracking-widest uppercase">& SERVICES PVT LTD</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Diversified agribusiness & industrial group with 12+ years of excellence in feed manufacturing, aquaculture, poultry farming, packaging, and renewable energy in Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Business Divisions', href: '/divisions' },
                { name: 'Factories & Facilities', href: '/facilities' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={12} className="text-emerald-500 opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Units */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-2">
              Our Entities
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="hover:text-gray-200 transition-colors">Star Floating Feed Pvt Ltd</li>
              <li className="hover:text-gray-200 transition-colors">Unique Super Feed Pvt Ltd</li>
              <li className="hover:text-gray-200 transition-colors">Star Polypropylene Pvt Ltd</li>
              <li className="hover:text-gray-200 transition-colors">Star Enterprises (Solar Power)</li>
              <li className="hover:text-gray-200 transition-colors">BM Commercial Farming</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4 border-l-2 border-emerald-500 pl-2">
              Head Office
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5 text-gray-300">
                <MapPin size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Office No. 17, MPS Road, Near Northern Bypass, Multan, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-emerald-500 shrink-0" />
                <a href="tel:+923006333064" className="hover:text-emerald-400 transition-colors">
                  061-2071268 | +92 300 6333064
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-emerald-500 shrink-0" />
                <a href="mailto:bmfarmsandservices@gmail.com" className="hover:text-emerald-400 transition-colors break-all">
                  bmfarmsandservices@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://starfeedsgroup.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/50"
                >
                  <span>Visit Official Portal</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} BM Farms & Services Pvt Ltd. All rights reserved.</p>
          <p className="text-gray-400 font-medium">Designed for Excellence in Agribusiness</p>
        </div>
      </div>
    </footer>
  );
}