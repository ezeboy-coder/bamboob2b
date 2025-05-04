"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';

const navigation = [{
  name: 'Home',
  href: '/'
}, {
  name: 'About',
  href: '/about'
}, {
  name: 'Solutions',
  href: '/solutions',
  dropdown: [{
    name: 'Web Development',
    href: '/solutions/web-development'
  }, {
    name: 'Cloud Solutions',
    href: '/solutions/cloud-solutions'
  }, {
    name: 'Database Management',
    href: '/solutions/database-management'
  }, {
    name: 'Mobile Development',
    href: '/solutions/mobile-development'
  }, {
    name: 'Cybersecurity',
    href: '/solutions/cybersecurity'
  }, {
    name: 'AI & Machine Learning',
    href: '/solutions/ai-ml'
  }]
}, {
  name: 'Pricing',
  href: '/pricing'
}, {
  name: 'Case Studies',
  href: '/case-studies'
}, {
  name: 'Contact',
  href: '/contact'
}];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === '/solutions') {
      return pathname?.startsWith('/solutions');
    }
    return pathname === href;
  };

  return <header className={cn("fixed top-0 w-full z-50 transition-all duration-300", scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4")} data-unique-id="0d2c133e-c034-480b-a9fe-87bc6cb0a2c5" data-loc="45:4-48:7" data-file-name="components/layout/Navbar.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-unique-id="f79be58e-8290-482d-8e49-381a7e4ec0c7" data-loc="49:6-49:62" data-file-name="components/layout/Navbar.tsx">
        <div className="flex justify-between items-center" data-unique-id="ff55c25d-4af2-4938-914a-d4d97d73b37c" data-loc="50:8-50:59" data-file-name="components/layout/Navbar.tsx">
          <div className="flex items-center" data-unique-id="032db866-bdd2-4884-be48-1536577a5b2b" data-loc="51:10-51:45" data-file-name="components/layout/Navbar.tsx">
            <Link href="/" data-unique-id="0d3c9f78-e0b1-449e-ad42-d5493bbc8a0e" data-loc="52:12-52:27" data-file-name="components/layout/Navbar.tsx">
              <div className="flex items-center gap-2" data-unique-id="70f2fe4a-b0b7-4d3b-9ff0-3c4485dff7e1" data-loc="53:14-53:55" data-file-name="components/layout/Navbar.tsx">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="font-bold text-2xl text-primary" data-unique-id="9a5ad0f6-76d9-4d99-bb01-30b6ded2ad5e" data-loc="55:16-55:66" data-file-name="components/layout/Navbar.tsx">
                  <span className="text-green-600" data-unique-id="e0c23be2-e41b-438f-a174-c2b57f264025" data-loc="56:18-56:51" data-file-name="components/layout/Navbar.tsx">Bam</span>
                  <span className="text-blue-700" data-unique-id="e4dabb7f-9dd1-4b84-bfe7-19ca425faa60" data-loc="57:18-57:50" data-file-name="components/layout/Navbar.tsx">Boo</span>
                  <span className="text-gray-800" data-unique-id="46278c8c-44ab-48e3-b9a5-0c23a473d099" data-loc="58:18-58:50" data-file-name="components/layout/Navbar.tsx">B2B</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8" data-unique-id="d070dd91-c447-4e7a-b994-f06b5874bb39" data-loc="65:10-65:52" data-file-name="components/layout/Navbar.tsx">
            {navigation.map(item => item.dropdown ? <div key={item.name} className="relative group" ref={dropdownRef}>
                  <button onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)} className={cn(
                    "flex items-center font-medium",
                    isActive(item.href) ? "text-blue-700" : "text-gray-600 hover:text-blue-700"
                  )} data-unique-id="map_7b9c0da0-7c4f-446e-a182-33ea9b329def" data-loc="69:18-72:19" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {openDropdown === item.name && <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: 10
            }} className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" data-unique-id="map_eae5dbc8-4ceb-4f26-a32e-51bda693a6a7" data-loc="78:20-83:21" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                      <div className="py-1" data-unique-id="map_3f7f00a2-eab1-4883-829e-6ae57f444143" data-loc="84:22-84:44" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                        {item.dropdown.map(subItem => <Link key={subItem.name} href={subItem.href} className={cn(
                          "block px-4 py-2 text-sm",
                          isActive(subItem.href) ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:bg-gray-100"
                        )} onClick={() => {
                setOpenDropdown(null);
                setIsOpen(false);
              }} data-unique-id="map_fe71ec2b-2aea-49e2-b801-0133ed363052" data-loc="86:26-91:27" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                            {subItem.name}
                          </Link>)}
                      </div>
                    </motion.div>}
                </div> : <Link key={item.name} href={item.href} className={cn(
                  "font-medium",
                  isActive(item.href) ? "text-blue-700" : "text-gray-600 hover:text-blue-700"
                )} data-unique-id="map_961f7a17-8303-4f97-9acb-d90ab164e5ea" data-loc="100:16-104:17" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                  {item.name}
                </Link>)}
          </nav>

          <div className="hidden lg:flex items-center space-x-4" data-unique-id="814dabe3-e214-4a4f-a1a1-511630b960a4" data-loc="111:10-111:65" data-file-name="components/layout/Navbar.tsx">
            <Link href="/login" data-unique-id="ca504c85-53e6-4340-aebc-77b2cbea370f" data-loc="112:12-112:32" data-file-name="components/layout/Navbar.tsx">
              <button className="text-gray-600 hover:text-blue-700 font-medium" data-unique-id="c83230a8-e724-436c-b24c-3f185f022849" data-loc="113:14-113:80" data-file-name="components/layout/Navbar.tsx">Login</button>
            </Link>
            <Link href="/register" data-unique-id="9dbaec27-121d-412e-9b35-6f3f1231a209" data-loc="115:12-115:35" data-file-name="components/layout/Navbar.tsx">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md font-medium" data-unique-id="e1246f66-5ce9-4640-b734-34badaf36e66" data-loc="116:14-116:108" data-file-name="components/layout/Navbar.tsx">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center" data-unique-id="51e887c3-b2c1-445d-88df-5cabc0feb3b9" data-loc="123:10-123:55" data-file-name="components/layout/Navbar.tsx">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" aria-expanded="false" data-unique-id="1e687453-b562-4e0e-858d-81830d76a4b8" data-loc="124:12-128:13" data-file-name="components/layout/Navbar.tsx">
              <span className="sr-only" data-unique-id="51fc511d-c013-49e0-8a0f-6d45f78662a1" data-loc="129:14-129:40" data-file-name="components/layout/Navbar.tsx">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="lg:hidden bg-white shadow-md" data-unique-id="98c30b09-67f0-4dc4-b6f4-5938977b3e99" data-loc="142:8-147:9" data-file-name="components/layout/Navbar.tsx">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-unique-id="5cc7671a-8ce8-4835-9c51-1340ac270732" data-loc="148:10-148:60" data-file-name="components/layout/Navbar.tsx">
            {navigation.map(item => <div key={item.name} data-unique-id="map_b64e4b4e-27f8-498f-a1f5-861622e68655" data-loc="150:14-150:35" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                {item.dropdown ? <>
                    <button onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)} className={cn(
                      "w-full flex items-center justify-between px-3 py-2 text-base font-medium",
                      isActive(item.href) ? "text-blue-700" : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                    )} data-unique-id="map_b033166f-ca00-4238-8e28-a40e1720fa8e" data-loc="153:20-156:21" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {openDropdown === item.name && <div className="pl-4 space-y-1" data-unique-id="map_e2a4a5f9-95ee-400f-8f4d-c7e1c080c553" data-loc="162:22-162:54" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                        {item.dropdown.map(subItem => <Link key={subItem.name} href={subItem.href} className={cn(
                          "block px-3 py-2 text-sm font-medium",
                          isActive(subItem.href) ? "text-blue-700 bg-blue-50" : "text-gray-500 hover:text-blue-700"
                        )} onClick={() => {
                setOpenDropdown(null);
                setIsOpen(false);
              }} data-unique-id="map_f48c28e8-2fc5-45f0-97f7-541fb69627ae" data-loc="164:26-172:27" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                            {subItem.name}
                          </Link>)}
                      </div>}
                  </> : <Link href={item.href} className={cn(
                    "block px-3 py-2 text-base font-medium",
                    isActive(item.href) ? "text-blue-700" : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                  )} onClick={() => setIsOpen(false)} data-unique-id="map_8e24bb05-dc0d-4929-86ee-6b60d954fda9" data-loc="180:18-184:19" data-file-name="components/layout/Navbar.tsx" data-is-mapped="true">
                    {item.name}
                  </Link>}
              </div>)}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200" data-unique-id="395b28be-439a-4282-bc06-a531d9854a50" data-loc="191:10-191:62" data-file-name="components/layout/Navbar.tsx">
            <div className="flex items-center px-4 space-x-3" data-unique-id="a0dccf9a-7639-4c08-9378-95617eec39cf" data-loc="192:12-192:62" data-file-name="components/layout/Navbar.tsx">
              <Link href="/login" className="block w-full px-4 py-2 text-center text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)} data-unique-id="f8e4a945-7d9f-4395-91c5-b728aa92bc23" data-loc="193:14-197:15" data-file-name="components/layout/Navbar.tsx">
                Login
              </Link>
              <Link href="/register" className="block w-full px-4 py-2 text-center text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-md" onClick={() => setIsOpen(false)} data-unique-id="7f72ef5f-8a61-42c7-9f6c-23f5b8d60f18" data-loc="200:14-204:15" data-file-name="components/layout/Navbar.tsx">
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>}
    </header>;
}