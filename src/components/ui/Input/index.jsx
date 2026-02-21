"use client";

import React, { forwardRef, useState } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';

const Input = forwardRef(({
    label,
    error,
    startIcon: StartIcon,
    endIcon: EndIcon,
    type = "text",
    className,
    ...props
}, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div className={clsx(styles.sav_InputGroup, className)}>
            {label && <label>{label}</label>}

            <div className={clsx(
                styles.sav_InputWrapper,
                StartIcon && styles.hasStartIcon,
                (EndIcon || isPassword) && styles.hasEndIcon
            )}>
                {StartIcon && <StartIcon size={18} className={styles.sav_StartIcon} />}

                <input
                    ref={ref}
                    type={inputType}
                    className={clsx(error && styles.sav_InputError)}
                    {...props}
                />

                {isPassword && (
                    <div
                        className={styles.sav_EndIcon}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </div>
                )}

                {EndIcon && !isPassword && (
                    <div className={styles.sav_EndIcon}><EndIcon size={18} /></div>
                )}
            </div>

            {error && (
                <span className={styles.sav_ErrorMessage}>
                    <AlertCircle size={14} /> {error}
                </span>
            )}
        </div>
    );
});

Input.displayName = "Input";
export default Input;
