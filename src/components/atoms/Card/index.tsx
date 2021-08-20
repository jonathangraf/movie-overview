import clsx from 'clsx';
import * as React from 'react';

import styles from '.styles.module.scss';

interface CardProps {
	className?: string;
}

export const Card: React.FunctionComponent<CardProps> = ({ className, children }) => (
	<div className={clsx(styles.card, className)} >
		{children}
	</div>
);