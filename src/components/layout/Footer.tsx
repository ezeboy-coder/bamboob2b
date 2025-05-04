import Link from 'next/link';
import { Leaf, Twitter, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';
const navigation = {
  solutions: [{
    name: 'Supply Chain Management',
    href: '/solutions/supply-chain'
  }, {
    name: 'Enterprise Resource Planning',
    href: '/solutions/erp'
  }, {
    name: 'Customer Relationship Management',
    href: '/solutions/crm'
  }, {
    name: 'Analytics & Reporting',
    href: '/solutions/analytics'
  }],
  company: [{
    name: 'About',
    href: '/about'
  }, {
    name: 'Careers',
    href: '/careers'
  }, {
    name: 'Partners',
    href: '/partners'
  }, {
    name: 'News',
    href: '/news'
  }],
  resources: [{
    name: 'Blog',
    href: '/blog'
  }, {
    name: 'Case Studies',
    href: '/case-studies'
  }, {
    name: 'Documentation',
    href: '/docs'
  }, {
    name: 'Webinars',
    href: '/webinars'
  }],
  support: [{
    name: 'Help Center',
    href: '/help'
  }, {
    name: 'Contact',
    href: '/contact'
  }, {
    name: 'Status',
    href: '/status'
  }, {
    name: 'Privacy Policy',
    href: '/privacy'
  }],
  social: [{
    name: 'Twitter',
    href: '#',
    icon: Twitter
  }, {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin
  }, {
    name: 'Facebook',
    href: '#',
    icon: Facebook
  }, {
    name: 'Instagram',
    href: '#',
    icon: Instagram
  }]
};
export default function Footer() {
  return <footer className="bg-gray-900" aria-labelledby="footer-heading" data-unique-id="14416233-6659-45d0-ab81-f0a9d67250cf" data-loc="55:4-55:69" data-file-name="components/layout/Footer.tsx">
      <h2 id="footer-heading" className="sr-only" data-unique-id="bea6c667-75b8-47d0-bac1-6a6b5f613a40" data-loc="56:6-56:50" data-file-name="components/layout/Footer.tsx">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32" data-unique-id="7be071b1-a7b9-4980-8935-2f29382391b2" data-loc="59:6-59:83" data-file-name="components/layout/Footer.tsx">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8" data-unique-id="a8bb6153-b8b5-48df-bb11-843ccd8585f2" data-loc="60:8-60:57" data-file-name="components/layout/Footer.tsx">
          <div className="space-y-8" data-unique-id="c942b4ae-0634-45d8-84ea-7305e9804dbf" data-loc="61:10-61:37" data-file-name="components/layout/Footer.tsx">
            <div className="flex items-center" data-unique-id="fb56c927-854c-4947-8e37-9b9392799bf8" data-loc="62:12-62:47" data-file-name="components/layout/Footer.tsx">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 font-bold text-2xl text-white" data-unique-id="35440a92-8340-46d5-931a-3c451cbc0843" data-loc="64:14-64:67" data-file-name="components/layout/Footer.tsx">
                <span className="text-green-400" data-unique-id="275a4186-838c-4c30-9012-ae63ee540a9a" data-loc="65:16-65:49" data-file-name="components/layout/Footer.tsx">Bam</span>
                <span className="text-blue-400" data-unique-id="1b5c5536-a835-4e1e-87b8-6e143b094fe7" data-loc="66:16-66:48" data-file-name="components/layout/Footer.tsx">Boo</span>
                <span className="text-gray-300" data-unique-id="6865aaf1-20ee-4c0b-928e-940977c88124" data-loc="67:16-67:48" data-file-name="components/layout/Footer.tsx">B2B</span>
              </span>
            </div>
            <p className="text-sm leading-6 text-gray-300" data-unique-id="7f796c3c-b675-4f27-a8e5-b15e53082b26" data-loc="70:12-70:59" data-file-name="components/layout/Footer.tsx">
              Transforming businesses with intelligent enterprise solutions. 
              Streamline operations, optimize workflows, and drive growth.
            </p>
            <div className="flex space-x-6" data-unique-id="9f7f0468-3a25-4b64-b51c-9d05bb826141" data-loc="74:12-74:44" data-file-name="components/layout/Footer.tsx">
              {navigation.social.map(item => <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300" data-unique-id="map_909949c4-4194-4d44-92ac-db3a74edb00f" data-loc="76:16-76:98" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">
                  <span className="sr-only" data-unique-id="map_a1fada79-bf30-4d86-a47d-9f02a161341c" data-loc="77:18-77:44" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>)}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0" data-unique-id="9fbd424e-e6b5-4b30-ae9d-2155b2ada3fd" data-loc="83:10-83:78" data-file-name="components/layout/Footer.tsx">
            <div className="md:grid md:grid-cols-2 md:gap-8" data-unique-id="68c893c0-879b-4580-a6a1-2fb938820bc0" data-loc="84:12-84:61" data-file-name="components/layout/Footer.tsx">
              <div data-unique-id="335254b4-fb21-4c9a-84a9-0b44d177646b" data-loc="85:14-85:19" data-file-name="components/layout/Footer.tsx">
                <h3 className="text-sm font-semibold leading-6 text-white" data-unique-id="d6050ee4-9a21-45df-a5f2-4cab3b86b5fd" data-loc="86:16-86:75" data-file-name="components/layout/Footer.tsx">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4" data-unique-id="2756ba0c-e5b9-4104-a797-9df6bae0463c" data-loc="87:16-87:59" data-file-name="components/layout/Footer.tsx">
                  {navigation.solutions.map(item => <li key={item.name} data-unique-id="map_2d69cc94-9741-4b6b-8e69-ccddaa12a4be" data-loc="89:20-89:40" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white" data-unique-id="map_9b731ff0-fb86-407b-a378-bfe72b067318" data-loc="90:22-90:106" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">
                        {item.name}
                      </Link>
                    </li>)}
                </ul>
              </div>
              <div className="mt-10 md:mt-0" data-unique-id="065242e7-14c8-4287-aeef-67363a20a919" data-loc="97:14-97:45" data-file-name="components/layout/Footer.tsx">
                <h3 className="text-sm font-semibold leading-6 text-white" data-unique-id="072acf67-5668-4ba7-95a8-ddffa03fdcf7" data-loc="98:16-98:75" data-file-name="components/layout/Footer.tsx">Company</h3>
                <ul role="list" className="mt-6 space-y-4" data-unique-id="2db43f4d-2af9-4772-b43b-bb8eac5c84d0" data-loc="99:16-99:59" data-file-name="components/layout/Footer.tsx">
                  {navigation.company.map(item => <li key={item.name} data-unique-id="map_b35458dd-cd55-4fc3-82b7-08d2d9203164" data-loc="101:20-101:40" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white" data-unique-id="map_e35c38d5-76bf-4c13-a7b3-1a9d4f532ccb" data-loc="102:22-102:106" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">
                        {item.name}
                      </Link>
                    </li>)}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8" data-unique-id="95eb69a1-be91-40f3-93ae-2f195c29ace8" data-loc="110:12-110:61" data-file-name="components/layout/Footer.tsx">
              <div data-unique-id="b0fbcec9-8a43-4cbb-bba6-2b000e16747c" data-loc="111:14-111:19" data-file-name="components/layout/Footer.tsx">
                <h3 className="text-sm font-semibold leading-6 text-white" data-unique-id="77d98900-34fd-4de6-be61-1812933f1338" data-loc="112:16-112:75" data-file-name="components/layout/Footer.tsx">Resources</h3>
                <ul role="list" className="mt-6 space-y-4" data-unique-id="207420b6-ded0-493b-9e55-50f90c1240b7" data-loc="113:16-113:59" data-file-name="components/layout/Footer.tsx">
                  {navigation.resources.map(item => <li key={item.name} data-unique-id="map_2b51068e-06bb-499c-804c-8c6d84a1b683" data-loc="115:20-115:40" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white" data-unique-id="map_075cb919-00b9-4a62-8166-56239f235efb" data-loc="116:22-116:106" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">
                        {item.name}
                      </Link>
                    </li>)}
                </ul>
              </div>
              <div className="mt-10 md:mt-0" data-unique-id="fda97d6c-011c-4641-804f-b89776e53260" data-loc="123:14-123:45" data-file-name="components/layout/Footer.tsx">
                <h3 className="text-sm font-semibold leading-6 text-white" data-unique-id="ac699c91-1406-4ac4-94f7-c098eac52109" data-loc="124:16-124:75" data-file-name="components/layout/Footer.tsx">Support</h3>
                <ul role="list" className="mt-6 space-y-4" data-unique-id="0c646c4a-86bc-40fb-b7bd-4d1611c8f8f4" data-loc="125:16-125:59" data-file-name="components/layout/Footer.tsx">
                  {navigation.support.map(item => <li key={item.name} data-unique-id="map_ed2f56a2-1642-4582-a5dc-3f1ff44d714a" data-loc="127:20-127:40" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white" data-unique-id="map_ca02f7a5-0440-4348-b8a3-022a1bbd9004" data-loc="128:22-128:106" data-file-name="components/layout/Footer.tsx" data-is-mapped="true">
                        {item.name}
                      </Link>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-700/20 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between" data-unique-id="c55ac765-a94b-4823-8ef7-36219afc5712" data-loc="139:8-139:124" data-file-name="components/layout/Footer.tsx">
          <div data-unique-id="7049fb0d-0dd0-4133-8abe-7ff6c09de9dd" data-loc="140:10-140:15" data-file-name="components/layout/Footer.tsx">
            <p className="text-xs leading-5 text-gray-400" data-unique-id="620b35c4-8522-4487-ba7d-094c539080e1" data-loc="141:12-141:59" data-file-name="components/layout/Footer.tsx">
              &copy; {new Date().getFullYear()} BamBooB2B, Inc. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8 mt-4 md:mt-0" data-unique-id="813c3d29-e2e5-4320-a822-bb5e77afbd4b" data-loc="145:10-145:55" data-file-name="components/layout/Footer.tsx">
            <Link href="/terms" className="text-xs leading-5 text-gray-400 hover:text-gray-300" data-unique-id="dccd5ce2-eb52-42be-8b4e-120f614df848" data-loc="146:12-146:96" data-file-name="components/layout/Footer.tsx">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs leading-5 text-gray-400 hover:text-gray-300" data-unique-id="3aa0fdd5-7d45-40e8-93c5-0774023dddad" data-loc="149:12-149:98" data-file-name="components/layout/Footer.tsx">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-xs leading-5 text-gray-400 hover:text-gray-300" data-unique-id="275a923a-f1bf-4c84-95ef-09f13973fa5e" data-loc="152:12-152:98" data-file-name="components/layout/Footer.tsx">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>;
}