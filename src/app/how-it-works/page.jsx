"use client";

import React from 'react';
import styles from './how-it-works.module.scss';
import Button from '@/components/ui/Button/Button';
import Link from 'next/link';

export default function HowItWorks() {
    const steps = [
        {
            title: "Report an Issue",
            description: "Notice a pothole or a broken streetlight? Use our simple form to report it. Add photos and your exact location to help municipal teams find it easily. Everything is tracked from the moment you hit submit.",
            number: "01"
        },
        {
            title: "Review and Assignment",
            description: "Your report is instantly categorized and reviewed by our system. It's then routed to the relevant department and assigned to an officer. You'll receive real-time updates as things happen.",
            number: "02"
        },
        {
            title: "Investigation and Resolution",
            description: "The assigned officer visits the location and performs the necessary repairs. We ensure they have all the data they need from your report to resolve the issue efficiently.",
            number: "03"
        },
        {
            title: "Verification and Closing",
            description: "Once finished, the officer uploads photographic proof of the resolution. Only then is the issue marked as resolved. We close the loop and notify you immediately.",
            number: "04"
        }
    ];

    return (
        <div className={styles.civ_how}>
            <section className={styles.civ_how__hero}>
                <h2 className="civ_badge civ_badge--info">The Process</h2>
                <h1>How It Works</h1>
                <p>A seamless, transparent loop from reporting to resolution.</p>
            </section>

            <section className={styles.civ_how__steps}>
                {steps.map((step, idx) => (
                    <div key={idx} className={styles.civ_how__step}>
                        <div className={styles['civ_how__step-content']}>
                            <span className={styles['step-num']}>{step.number}</span>
                            <h2>{step.title}</h2>
                            <p>{step.description}</p>
                        </div>
                        <div className={styles['civ_how__step-image']}>
                            [Step {step.number} Illustration]
                        </div>
                    </div>
                ))}

                <div className={styles.civ_how__cta}>
                    <Link href="/register">
                        <Button size="lg">Get Started Today</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
