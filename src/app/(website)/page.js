"use client";

import React from 'react';
import Hero from '@/components/home/Hero';
import Problem from '@/components/home/Problem';
import Features from '@/components/home/Features';
import Steps from '@/components/home/Steps';
import WhyItMatters from '@/components/home/WhyItMatters';
import Integrations from '@/components/home/Integrations';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <div style={{
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Hero />
      <Problem />
      <Features />
      <Integrations />
      <Steps />
      <WhyItMatters />
      <CTA />
    </div>
  );
}
