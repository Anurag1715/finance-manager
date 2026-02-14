"use client";

import React from 'react';
import styles from './Integrations.module.scss';
import { motion } from 'framer-motion';
import { Landmark, Wallet, Globe, Briefcase, CreditCard, Bitcoin, Building2, Coins } from 'lucide-react';
import Badge from '@/components/ui/Badge/Badge';

const Integrations = () => {
    const integrations = [
        { name: "Chase Bank", icon: Landmark },
        { name: "Coinbase", icon: Bitcoin },
        { name: "Vanguard", icon: Briefcase },
        { name: "Metamask", icon: Wallet },
        { name: "American Express", icon: CreditCard },
        { name: "Fidelity", icon: Building2 },
        { name: "Binance", icon: Coins },
        { name: "Wise", icon: Globe },
        { name: "Wells Fargo", icon: Landmark },
        { name: "Robinhood", icon: Briefcase }
    ];

    return (
        <section className={styles.sav_Integrations}>
            <div className={styles.sav_Header}>
                <Badge variant="primary">Ecosystem</Badge>
                <h2>Connected to <span>Your World</span></h2>
                <p>Savique securely syncs with over 10,000 financial institutions, crypto exchanges, and global wallets.</p>
            </div>

            <div className={styles.sav_IntegrationsFlex}>
                {integrations.map((item, index) => (
                    <motion.div
                        key={index}
                        className={styles.sav_IntegrationCard}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.sav_Icon}>
                            <item.icon size={24} />
                        </div>
                        <span>{item.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Integrations;
