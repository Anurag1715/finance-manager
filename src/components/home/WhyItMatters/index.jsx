"use client";

import React from 'react';
import styles from './WhyItMatters.module.scss';
import clsx from 'clsx';
import { Layout, Shield, Zap, TrendingUp, Lock, Globe, Layers, BarChart } from 'lucide-react';
import Badge from '@/components/ui/Badge';

const WhySavique = () => {

    const features = [
        {
            icon: Layout,
            title: "Radical Clarity",
            desc: "No spreadsheets, no confusion. Just a clear, unified view of every dollar you own in one dashboard."
        },
        {
            icon: Zap,
            title: "Active Intelligence",
            desc: "Savique doesn't just track; it suggests. Get proactive alerts to optimize cash flow and cut waste."
        },
        {
            icon: TrendingUp,
            title: "Velocity of Money",
            desc: "Move money faster. Automate transfers and investments to keep your capital working 24/7."
        },
        {
            icon: Shield,
            title: "Sovereign Privacy",
            desc: "Your data is encrypted locally. We don't sell your history. You are the only owner of your data."
        },
        {
            icon: Lock,
            title: "Bank-Grade Security",
            desc: "AES-256 encryption and multi-factor authentication ensure your financial fortress stays penetrable only by you."
        },
        {
            icon: Globe,
            title: "Global Assets",
            desc: "Track crypto, real estate, and foreign accounts side-by-side with domestic checking. A true world view."
        }
    ];

    // Duplicate for infinite scroll
    const marqueeItems = [...features, ...features];

    return (
        <section className={styles.sav_Why}>
            <div className={styles.sav_Header}>
                <Badge variant="primary">The Savique Standard</Badge>
                <h2>Why Top Earners Choose Savique</h2>
                <p>Built for those who value time, clarity, and control.</p>
            </div>

            <div className={styles.sav_MarqueeWrapper}>
                <div className={styles.sav_MarqueeTrack}>
                    {marqueeItems.map((item, index) => (
                        <div key={index} className={styles.sav_WhyCard}>
                            <div className={styles.sav_Icon}>
                                <item.icon size={32} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhySavique;
