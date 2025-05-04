"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Leaf } from 'lucide-react';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle login logic here
    console.log('Login attempt with:', {
      email,
      password,
      rememberMe
    });
  };
  return <div className="bg-gray-50 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8" data-unique-id="d899fa30-ad11-4737-857b-ad17c2313793" data-loc="19:4-19:96" data-file-name="app/login/page.tsx">
      <div className="sm:mx-auto sm:w-full sm:max-w-md" data-unique-id="4b507a89-ebca-42da-8d55-57f5ccadf710" data-loc="20:6-20:56" data-file-name="app/login/page.tsx">
        <div className="flex justify-center" data-unique-id="c50054ea-a51f-4d7d-b88a-247c2975c775" data-loc="21:8-21:45" data-file-name="app/login/page.tsx">
          <Link href="/" data-unique-id="9b6fc0a9-0461-45a3-a8b2-84552a5292ff" data-loc="22:10-22:25" data-file-name="app/login/page.tsx">
            <div className="flex items-center gap-2" data-unique-id="39e035ba-630a-4b9d-8f66-235d62685c7e" data-loc="23:12-23:53" data-file-name="app/login/page.tsx">
              <Leaf className="h-10 w-10 text-green-600" />
              <span className="font-bold text-3xl" data-unique-id="e1f0060e-c515-47fc-b0c9-6a3ff16f263a" data-loc="25:14-25:51" data-file-name="app/login/page.tsx">
                <span className="text-green-600" data-unique-id="9333c243-66ce-49b5-ac1d-c824e74f5774" data-loc="26:16-26:49" data-file-name="app/login/page.tsx">Bam</span>
                <span className="text-blue-700" data-unique-id="a0c51351-0ff8-46ee-ad09-dc8fcef6e709" data-loc="27:16-27:48" data-file-name="app/login/page.tsx">Boo</span>
                <span className="text-gray-800" data-unique-id="34e1881c-b4cf-4d7b-9c9d-8df46bcc7a5a" data-loc="28:16-28:48" data-file-name="app/login/page.tsx">B2B</span>
              </span>
            </div>
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900" data-unique-id="0879fc93-1bf4-44a6-80a6-13a8fc96fe7b" data-loc="33:8-33:89" data-file-name="app/login/page.tsx">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600" data-unique-id="db2facb8-56a1-443b-a263-474299a72b22" data-loc="36:8-36:62" data-file-name="app/login/page.tsx">
          Or{' '}
          <Link href="/register" className="font-medium text-blue-700 hover:text-blue-800" data-unique-id="3815d5a0-3aee-4482-be68-1e8c67c67689" data-loc="38:10-38:91" data-file-name="app/login/page.tsx">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" data-unique-id="4f7481dd-1e22-4e68-8965-5822a8fc317a" data-loc="44:6-44:61" data-file-name="app/login/page.tsx">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" data-unique-id="4390d4d8-d3ee-4ba3-8fcd-ddea7d686a73" data-loc="45:8-45:74" data-file-name="app/login/page.tsx">
          <form className="space-y-6" onSubmit={handleSubmit} data-unique-id="893c11d7-af54-4093-aaaf-0837ad4297b0" data-loc="46:10-46:62" data-file-name="app/login/page.tsx">
            <div data-unique-id="77ae213b-ef32-4b05-8de4-dcfc809a6342" data-loc="47:12-47:17" data-file-name="app/login/page.tsx">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700" data-unique-id="f8ed08a0-d6ff-48be-bd6b-4621f94da325" data-loc="48:14-48:89" data-file-name="app/login/page.tsx">
                Email address
              </label>
              <div className="mt-1" data-unique-id="6a22cc4b-a4ec-42c5-9dc1-f7a8c75e6c6e" data-loc="51:14-51:36" data-file-name="app/login/page.tsx">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 sm:text-sm" value={email} onChange={e => setEmail(e.target.value)} data-unique-id="07e70d65-42f1-4df0-89b5-438d7bc00657" data-loc="52:16-61:18" data-file-name="app/login/page.tsx" />
              </div>
            </div>

            <div data-unique-id="0c11ff74-67f8-490d-9067-0917f680fe2c" data-loc="65:12-65:17" data-file-name="app/login/page.tsx">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700" data-unique-id="015f0e11-b743-458d-bf97-78d694a5c41e" data-loc="66:14-66:92" data-file-name="app/login/page.tsx">
                Password
              </label>
              <div className="mt-1" data-unique-id="db2b7bb8-38db-40cf-807b-88c3d7878b4f" data-loc="69:14-69:36" data-file-name="app/login/page.tsx">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-700 focus:outline-none focus:ring-blue-700 sm:text-sm" value={password} onChange={e => setPassword(e.target.value)} data-unique-id="659146f0-1f25-42ee-b24a-a5edc9664f54" data-loc="70:16-79:18" data-file-name="app/login/page.tsx" />
              </div>
            </div>

            <div className="flex items-center justify-between" data-unique-id="312a2d89-2eb9-4723-89f3-5db902c05952" data-loc="83:12-83:63" data-file-name="app/login/page.tsx">
              <div className="flex items-center" data-unique-id="ebe05cfc-f440-4a6b-9a59-3a80a3224995" data-loc="84:14-84:49" data-file-name="app/login/page.tsx">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} data-unique-id="033b9977-351f-4f4e-8e12-099920abae28" data-loc="85:16-92:18" data-file-name="app/login/page.tsx" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900" data-unique-id="e8e52681-f930-481a-a22c-9ed2e3c099b6" data-loc="93:16-93:90" data-file-name="app/login/page.tsx">
                  Remember me
                </label>
              </div>

              <div className="text-sm" data-unique-id="ccf39fdc-7338-433c-b20a-5b8cf4907454" data-loc="98:14-98:39" data-file-name="app/login/page.tsx">
                <a href="#" className="font-medium text-blue-700 hover:text-blue-800" data-unique-id="6f2b09ff-5cc8-491f-a6d3-a832690a8090" data-loc="99:16-99:86" data-file-name="app/login/page.tsx">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div data-unique-id="77a02206-1bcc-4c0b-b9bd-3b4b97c20d2d" data-loc="105:12-105:17" data-file-name="app/login/page.tsx">
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700" data-unique-id="0cf82989-a1fa-4644-ae93-0474a2f99954" data-loc="106:14-109:15" data-file-name="app/login/page.tsx">
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6" data-unique-id="bc6d2051-b813-46a7-ac59-cabc2ded4d01" data-loc="115:10-115:32" data-file-name="app/login/page.tsx">
            <div className="relative" data-unique-id="0107c8ca-76b2-4458-ba60-56dbbf7b5cf0" data-loc="116:12-116:38" data-file-name="app/login/page.tsx">
              <div className="absolute inset-0 flex items-center" data-unique-id="6079d5c5-14cb-419c-ac1d-bc64e8e175ba" data-loc="117:14-117:66" data-file-name="app/login/page.tsx">
                <div className="w-full border-t border-gray-300" data-unique-id="d6ce0d1a-d79f-419e-8d99-445528bff0fd" data-loc="118:16-118:67" data-file-name="app/login/page.tsx" />
              </div>
              <div className="relative flex justify-center text-sm" data-unique-id="0e4cdd93-209d-4c80-b346-cf52cf33bbf8" data-loc="120:14-120:68" data-file-name="app/login/page.tsx">
                <span className="bg-white px-2 text-gray-500" data-unique-id="2e5f3260-5d7c-49c8-a29b-5dbd094d6243" data-loc="121:16-121:62" data-file-name="app/login/page.tsx">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3" data-unique-id="5c063b8b-ecf9-48ef-9026-d6fa3c194bfe" data-loc="125:12-125:57" data-file-name="app/login/page.tsx">
              <div data-unique-id="98d269ca-4aa2-4346-9311-a860ae233ab9" data-loc="126:14-126:19" data-file-name="app/login/page.tsx">
                <a href="#" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50" data-unique-id="91e3e2a3-1e14-43e4-b5e4-e8c55a938d41" data-loc="127:16-130:17" data-file-name="app/login/page.tsx">
                  <span className="sr-only" data-unique-id="a5011613-cb5b-4b66-a5b9-5c1428a704dd" data-loc="131:18-131:44" data-file-name="app/login/page.tsx">Sign in with Google</span>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-unique-id="82f27c47-528b-431b-ae99-81088a2e1779" data-loc="132:18-132:118" data-file-name="app/login/page.tsx">
                    <path d="M12.24 10.285V14.4H16.09C15.915 15.36 15.195 16.66 13.53 17.4C12.84 17.76 11.97 18 11.03 18C8.205 18 5.82 16.16 4.97 13.605C4.77 12.93 4.655 12.21 4.655 11.475C4.655 10.74 4.77 10.02 4.97 9.345C5.82 6.79 8.205 4.95 11.035 4.95C12.66 4.95 13.89 5.515 14.76 6.255L17.505 3.51C15.69 1.86 13.53 0.75 11.035 0.75C6.565 0.75 2.785 3.48 1.185 7.455C0.435 9.045 0 10.815 0 12.75C0 14.685 0.435 16.455 1.185 18.045C2.785 22.02 6.565 24.75 11.035 24.75C13.53 24.75 15.69 24 17.355 22.65C19.485 21 20.925 18.45 20.925 15.255C20.925 14.46 20.835 13.695 20.685 13.035H12.255V10.285H12.24Z" />
                  </svg>
                </a>
              </div>

              <div data-unique-id="364fe578-693b-4bf0-953c-09b2f3e9d3d0" data-loc="138:14-138:19" data-file-name="app/login/page.tsx">
                <a href="#" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50" data-unique-id="3b86dd1e-503c-499c-a642-1c76fc8bb85b" data-loc="139:16-142:17" data-file-name="app/login/page.tsx">
                  <span className="sr-only" data-unique-id="0aae1dae-fcc4-4fb6-9ea9-8fa8c49ce8e7" data-loc="143:18-143:44" data-file-name="app/login/page.tsx">Sign in with Microsoft</span>
                  <svg className="h-5 w-5" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-unique-id="5be47907-c13a-42fd-a570-c50a88e194b0" data-loc="144:18-144:118" data-file-name="app/login/page.tsx">
                    <rect x="1" y="1" width="9" height="9" />
                    <rect x="11" y="1" width="9" height="9" />
                    <rect x="1" y="11" width="9" height="9" />
                    <rect x="11" y="11" width="9" height="9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}