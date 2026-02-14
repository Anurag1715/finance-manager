"use client";

import React from 'react';
import styles from './about.module.scss';
import { Target, Users, Award } from 'lucide-react';
import Card from '@/components/ui/Card/Card';

export default function About() {
    return (
        <div className={styles.civ_about}>
            <section className={styles.civ_about__hero}>
                <h2 className="civ_badge civ_badge--info">Our Story</h2>
                <h1>About CivicTrack</h1>
                <p>
                    We bridge the gap between citizens and their local government,
                    making community improvement accessible and transparent for everyone.
                </p>
            </section>

            <section className={styles.civ_about__grid}>
                <div className={styles['civ_about__grid-image']}>
                    [Mission Illustration]
                </div>
                <div className={styles['civ_about__grid-content']}>
                    <h2>Empowering Better Governance</h2>
                    <p>
                        CivicTrack was founded on the belief that technology can empower communities
                        to solve local problems. We provide the tools needed to report issues easily
                        and ensure they are addressed by the right authorities.
                    </p>
                    <p>
                        By creating a transparent ecosystem, we foster trust between citizens and
                        municipal officers, leading to faster resolutions and a more engaged community.
                    </p>
                </div>
            </section>

            <section className={styles.civ_about__values}>
                <div className={styles['civ_about__values-header']}>
                    <h2 className="civ_badge civ_badge--info">Our Values</h2>
                    <h3>What Drives Us</h3>
                </div>

                <div className={styles['civ_about__values-grid']}>
                    <Card className={styles['civ_about__values-card']}>
                        <div className={styles['icon-box']}><Target size={40} /></div>
                        <h3>Transparency</h3>
                        <p>Every report is tracked and visible, ensuring accountability at all levels of government.</p>
                    </Card>
                    <Card className={styles['civ_about__values-card']}>
                        <div className={styles['icon-box']}><Users size={40} /></div>
                        <h3>Community</h3>
                        <p>We believe in the power of collective action to improve our shared living spaces and cities.</p>
                    </Card>
                    <Card className={styles['civ_about__values-card']}>
                        <div className={styles['icon-box']}><Award size={40} /></div>
                        <h3>Efficiency</h3>
                        <p>Streamlining the workflow to resolve issues significantly faster than traditional bureaucratic methods.</p>
                    </Card>
                </div>
            </section>
        </div>
    );
}
