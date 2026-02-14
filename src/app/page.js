"use client";

import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import Button from '@/components/ui/Button/Button';
import Card from '@/components/ui/Card/Card';
import {
  AlertCircle,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  Send,
  UserPlus,
  CheckCircle2,
  FileCheck,
  Activity,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className={styles.civ_home}>
      {/* Hero Section */}
      <section className={styles.civ_home__hero}>
        <div className={styles['civ_home__hero-content']}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={styles['civ_home__hero-badge']}
          >
            <Zap size={14} fill="currentColor" />
            Empowering Smart City Governance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build a Better Community with <span>CivicTrack</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The comprehensive platform for citizens to report local issues and for municipalities to resolve them with data-driven efficiency. Real-time, transparent, and built for everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles['civ_home__hero-actions']}
          >
            <Link href="/register">
              <Button size="lg" variant="primary">Report Your First Issue <ArrowRight size={18} /></Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="secondary" size="lg">Explore Platform</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.civ_home__features}>
        <div className={styles['civ_home__features-header']}>
          <span className="civ_status-badge civ_status-badge--primary">The Platform</span>
          <h2>Everything You Need to Scale Community Impact</h2>
        </div>

        <div className={styles['civ_home__features-grid']}>
          {[
            {
              icon: <AlertCircle size={24} />,
              title: "Rapid Reporting",
              desc: "Snap a photo, add a location, and report issues like potholes or garbage in seconds."
            },
            {
              icon: <Activity size={24} />,
              title: "Live Tracking",
              desc: "Watch the progress of your report from 'Submitted' to 'Resolved' with live timeline updates."
            },
            {
              icon: <UserPlus size={24} />,
              title: "Auto-Assignment",
              desc: "Issues are automatically routed to the correct department based on category and location."
            },
            {
              icon: <BarChart3 size={24} />,
              title: "Citizen Analytics",
              desc: "View data-driven insights about issue trends and resolution rates in your neighborhood."
            },
            {
              icon: <Send size={24} />,
              title: "Instant Alerts",
              desc: "Get SMS or email notifications the moment an officer starts working on your request."
            },
            {
              icon: <CheckCircle2 size={24} />,
              title: "Verified Closing",
              desc: "Resolutions are only closed after submission of visual proof by the handling officer."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{ width: '100%' }}
            >
              <Card className={styles['civ_home__features-card']}>
                <div className={styles['icon-wrapper']}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className={styles.civ_home__workflow}>
        <div className={styles['civ_home__features-header']}>
          <span className="civ_status-badge civ_status-badge--success">Our Workflow</span>
          <h2>From Report to Resolution</h2>
        </div>

        <div className={styles['civ_home__workflow-grid']}>
          {[
            { title: "Citizen Reports", desc: "User submits coordinates and photo of the issue.", icon: <Send size={20} /> },
            { title: "Smart Routing", desc: "System assigns the task to the right field officer.", icon: <Activity size={20} /> },
            { title: "Field Action", desc: "Officer resolves the issue on-site and uploads proof.", icon: <Zap size={20} /> },
            { title: "Verified Closure", desc: "Admin verifies and the issue is officially closed.", icon: <FileCheck size={20} /> }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              className={styles['civ_home__workflow-step']}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className={styles['step-header']}>
                <span className={styles['step-num']}>0{idx + 1}</span>
                <span className={styles['step-icon']}>{step.icon}</span>
              </div>
              <div className={styles['step-body']}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.civ_home__cta}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles['civ_home__cta-banner']}
        >
          <h2>Ready to improve your neighborhood?</h2>
          <p>Join thousands of active citizens building more livable, sustainable cities together.</p>
          <div className={styles['cta-actions']}>
            <Link href="/register">
              <Button variant="primary" size="lg">Join CivicTrack Now</Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
