"use client";

import React from 'react';
import Hero from '@/components/home/Hero/Hero';
import Problem from '@/components/home/Problem/Problem';
import Features from '@/components/home/Features/Features';
import Steps from '@/components/home/Steps/Steps';
import WhyItMatters from '@/components/home/WhyItMatters/WhyItMatters';
import Integrations from '@/components/home/Integrations/Integrations';
import CTA from '@/components/home/CTA/CTA';

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
