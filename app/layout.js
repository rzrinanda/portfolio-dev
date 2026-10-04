import {GoogleTagManager} from '@next/third-parties/google';
import {ToastContainer} from 'react-toastify';
import { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
export const metadata = {
  title: 'Rizal Zulfikar Rinanda | Backend Software Engineer',
  description: 'Backend Software Engineer with 10+ years of experience building APIs, integrations, and business-critical systems, supported by full-stack delivery experience.',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Suspense fallback={<div className="h-[76px]" />}>
            <Navbar />
          </Suspense>
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
