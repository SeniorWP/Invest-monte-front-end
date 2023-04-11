import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import Ripple from 'react-ripples'

import styles from './buttom.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'ghost'
	icon?: ReactNode
	small?: boolean
	children: ReactNode
}

const Button: FC<IProps> = ({
	variant = 'primary',
	icon,
	children,
	small,
	...props
}) => {
	return (
		<Ripple
			className={styles.riple}
			during={1000}
			color={'var(--color-active-hover)'}
		>
			<button
				className={clsx(styles.button, {
					[styles.primary]: variant === 'primary',
					[styles.ghost]: variant === 'ghost',
					[styles.small]: small === true,
				})}
				{...props}
			>
				{icon && <span className={styles.startIcon}>{icon}</span>}
				{children}
			</button>
		</Ripple>
	)
}
export default Button
