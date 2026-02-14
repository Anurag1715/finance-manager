"use client";

import React, { forwardRef } from 'react';
import styles from './Checkbox.module.scss';
import clsx from 'clsx';
import { Check } from 'lucide-react';

const Checkbox = forwardRef(({ label, error, className, ...props }, ref) => {
    return (
        <label className={clsx(styles.sav_Checkbox, className)}>
            <input type="checkbox" ref={ref} {...props} />
            <div className={clsx(styles.sav_Box, props.checked && styles.sav_Checked, error && styles.sav_Error)}>
                <Check size={14} strokeWidth={3} />
            </div>
            {label && <span>{label}</span>}
        </label>
    );
});

Checkbox.displayName = "Checkbox";
export default Checkbox;
