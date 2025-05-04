"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const offices = [
  {
    id: 1,
    name: "Lagos Office",
    address: "Plot 1234, Victoria Island, Lagos, Nigeria",
    phone: "+234 812 345 6789",
    email: "lagos@bamboob2b.com",
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 2,
    name: "Abuja Office",
    address: "Suite 56, Central Business District, Abuja, Nigeria",
    phone: "+234 809 876 5432",
    email: "abuja@bamboob2b.com",
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 3,
    name: "US Office",
    address: "123 Tech Valley Drive, Suite 789, San Francisco, CA 94105, USA",
    phone: "+1 (415) 555-0123",
    email: "usa@bamboob2b.com",
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    submitted: false
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send the form data to your backend
    setTimeout(() => {
      setFormState(prev => ({
        ...prev,
        submitted: true
      }));
    }, 500);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return <div className="bg-white pt-24 pb-24" data-unique-id="3fc1bdab-2543-4d92-a40d-c0a3fc001011" data-loc="30:4-30:42" data-file-name="app/contact/page.tsx">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-unique-id="e6a2718a-3e1f-4d53-b722-d0fcbdfb4cc8" data-loc="31:6-31:54" data-file-name="app/contact/page.tsx">
        <div className="mx-auto max-w-2xl text-center" data-unique-id="420b401d-0f4e-4545-914e-a9c478e21022" data-loc="32:8-32:55" data-file-name="app/contact/page.tsx">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-unique-id="0d07f2ca-fa6a-418f-83ce-14df9624ae77" data-loc="33:10-33:86" data-file-name="app/contact/page.tsx">Get in touch</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-unique-id="58ac6085-9764-4d3f-9571-28cb155cd9d2" data-loc="34:10-34:62" data-file-name="app/contact/page.tsx">
            Have questions about our solutions or need help choosing the right plan?
            Our team is here to help you find the perfect fit for your business.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3" data-unique-id="3c08040d-aea1-416d-9aba-d3dbd6cb8320" data-loc="40:8-40:98" data-file-name="app/contact/page.tsx">
          <div data-unique-id="ac8c020a-55dd-41bf-9044-e50248227fcb" data-loc="41:10-41:15" data-file-name="app/contact/page.tsx">
            <h2 className="text-lg font-semibold text-gray-900" data-unique-id="08afda67-2641-4424-bc8b-f4be660b8c92" data-loc="42:12-42:64" data-file-name="app/contact/page.tsx">Our offices</h2>
            <address className="mt-6 space-y-8 text-base not-italic text-gray-600" data-unique-id="4e855d67-25df-4d00-927c-af0b57d48f3b" data-loc="43:12-43:83" data-file-name="app/contact/page.tsx">
              {offices.map((office) => (
                <div key={office.id} className="flex gap-x-3" data-unique-id={`${office.id}f1bca1-f6fc-4c69-b6f1-ee4188f0917f`} data-loc={`${office.id}2:14-${office.id}2:44`} data-file-name="app/contact/page.tsx">
                  {office.icon}
                  <div data-unique-id={`${office.id}d7bdcc-6166-41e0-9a40-00a89343ed5e`} data-loc={`${office.id}4:16-${office.id}4:21`} data-file-name="app/contact/page.tsx">
                    <p className="font-semibold text-gray-900" data-unique-id={`${office.id}a1e624-5b32-4aa5-a4f6-213978322ae4`} data-loc={`${office.id}5:18-${office.id}5:61`} data-file-name="app/contact/page.tsx">{office.name}</p>
                    <p data-unique-id={`${office.id}bef6bfc-a8da-478a-88ea-6524153e2c45`} data-loc={`${office.id}6:18-${office.id}6:21`} data-file-name="app/contact/page.tsx">{office.address}</p>
              </div>
                </div>
              ))}
            </address>
            
            <h2 className="mt-12 text-lg font-semibold text-gray-900" data-unique-id="1d95cd75-8ecd-406c-974e-b5777b40a704" data-loc="70:12-70:70" data-file-name="app/contact/page.tsx">Connect with us</h2>
            <dl className="mt-6 space-y-4 text-base text-gray-600" data-unique-id="6289d0f1-e83a-44e7-b3ce-4b8c7a90bd00" data-loc="71:12-71:67" data-file-name="app/contact/page.tsx">
              {offices.map((office) => (
                <div key={office.id} className="flex gap-x-3" data-unique-id={`${office.id}cd4ac5-cd2f-40da-be9f-df1a6b42aaa9`} data-loc={`${office.id}72:14-${office.id}72:44`} data-file-name="app/contact/page.tsx">
                <Phone className="h-6 w-5 flex-none text-blue-700" />
                  <dt className="sr-only" data-unique-id={`${office.id}01326-e6a2-4c01-8826-7c7bef29541d`} data-loc={`${office.id}74:16-${office.id}74:40`} data-file-name="app/contact/page.tsx">{office.name} phone</dt>
                  <dd data-unique-id={`${office.id}997bae-4752-4f5b-b248-9a693580c6b5`} data-loc={`${office.id}75:16-${office.id}75:20`} data-file-name="app/contact/page.tsx"><a className="hover:text-blue-700" href={`tel:${office.phone}`} data-unique-id={`${office.id}78273fe2-929a-445b-a576-c6b5a1a319af`} data-loc={`${office.id}75:20-${office.id}75:84`} data-file-name="app/contact/page.tsx">{office.phone}</a></dd>
              </div>
              ))}
              {offices.map((office) => (
                <div key={office.id} className="flex gap-x-3" data-unique-id={`${office.id}5406cd8e-471c-48d0-b567-94ece0852492`} data-loc={`${office.id}77:14-${office.id}77:44`} data-file-name="app/contact/page.tsx">
                <Mail className="h-6 w-5 flex-none text-blue-700" />
                  <dt className="sr-only" data-unique-id={`${office.id}d67ad20-d7c6-46dd-a87f-9a5562f6c10a`} data-loc={`${office.id}79:16-${office.id}79:40`} data-file-name="app/contact/page.tsx">{office.name} email</dt>
                  <dd data-unique-id={`${office.id}b19f1748-9284-4e95-a26f-40c8cfff7326`} data-loc={`${office.id}80:16-${office.id}80:20`} data-file-name="app/contact/page.tsx"><a className="hover:text-blue-700" href={`mailto:${office.email}`} data-unique-id={`${office.id}a20108ff-2e7b-4202-a595-907cb90a2258`} data-loc={`${office.id}80:20-${office.id}80:89`} data-file-name="app/contact/page.tsx">{office.email}</a></dd>
              </div>
              ))}
            </dl>
          </div>
          
          <div className="lg:col-span-2" data-unique-id="1d07859a-ae61-4185-947f-aa3b5355c003" data-loc="85:10-85:41" data-file-name="app/contact/page.tsx">
            {formState.submitted ? <div className="rounded-lg bg-green-50 p-8 text-center" data-unique-id="267920ca-c04b-4276-b346-1f62c7d22490" data-loc="87:14-87:70" data-file-name="app/contact/page.tsx">
                <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900" data-unique-id="3b5b3866-af04-4f9a-a9c2-42bc7fd2de23" data-loc="89:16-89:73" data-file-name="app/contact/page.tsx">Thank you!</h3>
                <p className="mt-2 text-base text-gray-600" data-unique-id="56f776db-a346-47b7-90b6-b216f91a7d27" data-loc="90:16-90:60" data-file-name="app/contact/page.tsx">
                  Your message has been received. Our team will get back to you within 24 hours.
                </p>
                <button className="mt-6 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800" onClick={() => setFormState(prev => ({
              ...prev,
              submitted: false
            }))} data-unique-id="e1381a7b-ea90-4941-bfc1-9eef08ba776f" data-loc="93:16-96:17" data-file-name="app/contact/page.tsx">
                  Submit another inquiry
                </button>
              </div> : <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg border border-gray-200" data-unique-id="737c9a4c-da34-45fb-9d07-8390d2a9cc70" data-loc="101:14-101:109" data-file-name="app/contact/page.tsx">
                <div className="p-6 md:p-8" data-unique-id="27f16307-9c2d-4c73-9db7-7a49541119a5" data-loc="102:16-102:44" data-file-name="app/contact/page.tsx">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6" data-unique-id="b9043d2f-0334-41ea-8dc0-17279eced1ae" data-loc="103:18-103:75" data-file-name="app/contact/page.tsx">Send us a message</h2>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2" data-unique-id="433fa30e-9588-442d-b6f8-509af0d1fabb" data-loc="104:18-104:83" data-file-name="app/contact/page.tsx">
                    <div data-unique-id="582072c8-1345-40c7-9a80-d51812d5c48f" data-loc="105:20-105:25" data-file-name="app/contact/page.tsx">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900" data-unique-id="88c25f2d-39ee-4bf1-b292-2d9f668054eb" data-loc="106:22-106:98" data-file-name="app/contact/page.tsx">
                        Full name
                      </label>
                      <input type="text" name="name" id="name" autoComplete="name" required className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6" value={formState.name} onChange={handleChange} data-unique-id="ece4ee63-bfee-4a27-8def-8c99d12fd0a9" data-loc="109:22-118:24" data-file-name="app/contact/page.tsx" />
                    </div>
                    <div data-unique-id="1e07a6e5-0ca4-499d-af65-9077bcce47fd" data-loc="120:20-120:25" data-file-name="app/contact/page.tsx">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900" data-unique-id="3d874a99-6107-4a4c-9142-1ef39c10c4b9" data-loc="121:22-121:99" data-file-name="app/contact/page.tsx">
                        Email
                      </label>
                      <input type="email" name="email" id="email" autoComplete="email" required className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6" value={formState.email} onChange={handleChange} data-unique-id="9fa41156-4526-4640-a9e6-2d15eb1250d1" data-loc="124:22-133:24" data-file-name="app/contact/page.tsx" />
                    </div>
                    <div data-unique-id="5b965169-a058-4da5-9d91-3680f1eb1db0" data-loc="135:20-135:25" data-file-name="app/contact/page.tsx">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-900" data-unique-id="8d673622-21d4-43c8-8fcd-c7d52b8c9264" data-loc="136:22-136:101" data-file-name="app/contact/page.tsx">
                        Company
                      </label>
                      <input type="text" name="company" id="company" autoComplete="organization" className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6" value={formState.company} onChange={handleChange} data-unique-id="56101eb8-b790-450d-b3f5-eefee9a9e2aa" data-loc="139:22-147:24" data-file-name="app/contact/page.tsx" />
                    </div>
                    <div data-unique-id="5812828e-5c81-4dfa-b16f-df7937f0558b" data-loc="149:20-149:25" data-file-name="app/contact/page.tsx">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900" data-unique-id="30bd2875-5d8b-4b15-a45f-18983a611ed1" data-loc="150:22-150:99" data-file-name="app/contact/page.tsx">
                        Phone
                      </label>
                      <input type="tel" name="phone" id="phone" autoComplete="tel" className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6" value={formState.phone} onChange={handleChange} data-unique-id="16e78526-45de-45f9-969a-d9f35ce3367e" data-loc="153:22-161:24" data-file-name="app/contact/page.tsx" />
                    </div>
                    <div className="sm:col-span-2" data-unique-id="b57ec6e8-409a-448f-aae3-7d287fc95390" data-loc="163:20-163:51" data-file-name="app/contact/page.tsx">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900" data-unique-id="97473d6c-ec37-4b18-ac3a-d7c9bd7bfae9" data-loc="164:22-164:101" data-file-name="app/contact/page.tsx">
                        How can we help you?
                      </label>
                      <textarea name="message" id="message" rows={5} required className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6" value={formState.message} onChange={handleChange} data-unique-id="71891f4a-1825-4fbc-a579-4e7779065a28" data-loc="167:22-175:23" data-file-name="app/contact/page.tsx"></textarea>
                    </div>
                  </div>
                  <div className="mt-8" data-unique-id="c998758d-2372-4268-be49-117b8d50a9cf" data-loc="178:18-178:40" data-file-name="app/contact/page.tsx">
                    <button type="submit" className="w-full bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800" data-unique-id="09fbfa9c-71de-4589-ad13-dced1709b7b2" data-loc="179:20-182:21" data-file-name="app/contact/page.tsx">
                      Send message
                    </button>
                  </div>
                  <p className="mt-4 text-xs text-gray-500" data-unique-id="aaeb66d6-1a75-406b-a5bf-278256fae6cf" data-loc="186:18-186:60" data-file-name="app/contact/page.tsx">
                    By submitting this form, you agree to our <a href="/privacy" className="text-blue-700" data-unique-id="eca9e587-e562-43d1-9115-f3d780dcdaf8" data-loc="187:62-187:107" data-file-name="app/contact/page.tsx">Privacy Policy</a>.
                  </p>
                </div>
              </form>}
          </div>
        </div>
      </div>
    </div>;
}