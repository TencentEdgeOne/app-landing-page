import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import HowToUse from '@/components/HowToUse';
import Download from '@/components/Download';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <Layout title="App Landing Page - 移动应用着陆页">
      <Hero />
      <About />
      <Features />
      <Screenshots />
      <HowToUse />
      <Download />
      <Contact />
    </Layout>
  );
}
