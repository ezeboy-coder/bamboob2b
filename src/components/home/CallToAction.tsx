"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export default function CallToAction() {
  return <div className="bg-blue-700" data-unique-id="c7dad035-a909-4574-b1f4-e975fb913acb" data-loc="9:4-9:33" data-file-name="components/home/CallToAction.tsx">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8" data-unique-id="c2a30fce-30ac-4411-8b2a-452f5ff698f4" data-loc="10:6-10:69" data-file-name="components/home/CallToAction.tsx">
        <motion.div className="relative isolate overflow-hidden rounded-2xl px-6 py-16 shadow-2xl sm:px-16 lg:flex lg:gap-x-20 lg:items-center" initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} data-unique-id="772473a2-5b86-4642-9d5d-f787132f85b9" data-loc="11:8-17:9" data-file-name="components/home/CallToAction.tsx">
          <div className="absolute inset-0 -z-10" data-unique-id="71843fd3-c375-4d64-9279-127e4cbd76a2" data-loc="18:10-18:50" data-file-name="components/home/CallToAction.tsx">
            <div className="absolute inset-0 bg-blue-800 mix-blend-multiply" data-unique-id="422a91db-3d09-4c9f-b6ff-07f055c2bda2" data-loc="19:12-19:79" data-file-name="components/home/CallToAction.tsx" />
            <div className="absolute left-1/2 top-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-500 opacity-20 blur-3xl" data-unique-id="4e6660ba-716a-490e-b0f8-92b68cdeb7fe" data-loc="20:12-20:143" data-file-name="components/home/CallToAction.tsx" />
          </div>
          
          <div className="mx-auto max-w-xl lg:mx-0 lg:flex-shrink-0" data-unique-id="45e7ff9f-f885-496d-84a4-6f913bd92344" data-loc="23:10-23:69" data-file-name="components/home/CallToAction.tsx">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" data-unique-id="f3fdedec-c1d1-4c0a-a32b-98e23d82ec5d" data-loc="24:12-24:85" data-file-name="components/home/CallToAction.tsx">
              Ready to transform your business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100" data-unique-id="0786781c-64ab-4b14-94ac-b892f8b1f1ce" data-loc="27:12-27:64" data-file-name="components/home/CallToAction.tsx">
              Join thousands of successful businesses that have streamlined their operations,
              reduced costs, and accelerated growth with BamBooB2B's enterprise solutions.
            </p>
            <div className="mt-10 flex items-center gap-x-6" data-unique-id="6a2f5d20-d928-431f-951f-d46711874c05" data-loc="31:12-31:61" data-file-name="components/home/CallToAction.tsx">
              <Link href="/demo" data-unique-id="cad1e1a1-e899-4d05-aad6-de97ca463eda" data-loc="32:14-32:33" data-file-name="components/home/CallToAction.tsx">
                <button className="bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-800 px-4 py-2.5 rounded-md font-medium" data-unique-id="d124937d-2b12-46a1-b5d8-f962253167c8" data-loc="33:16-33:132" data-file-name="components/home/CallToAction.tsx">
                  Schedule a demo
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </button>
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white" data-unique-id="e803a3ac-32fc-4576-b6ee-2b5227252372" data-loc="38:14-38:91" data-file-name="components/home/CallToAction.tsx">
                Contact sales <span aria-hidden="true" data-unique-id="979d7e25-5bfd-46d1-bb99-a46355fe4aab" data-loc="39:30-39:55" data-file-name="components/home/CallToAction.tsx">→</span>
              </Link>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 hidden lg:block" data-unique-id="759a6628-cc32-4379-8c50-6196481231f3" data-loc="43:10-43:66" data-file-name="components/home/CallToAction.tsx">
            <img className="h-auto w-full max-w-sm rounded-xl shadow-xl ring-1 ring-gray-400/10" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Dashboard screenshot" data-unique-id="d28daab8-72ca-47cf-94d1-609bf6ca49ce" data-loc="44:12-48:14" data-file-name="components/home/CallToAction.tsx" />
          </div>
        </motion.div>
      </div>
    </div>;
}