import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { createRipples } from 'react-ripples'

import styles from './buttom.module.scss'

interface IProps {
	type?: 'primary' | 'ghost'
	shape?: 'circle'
	startIcon?: ReactNode
	children: ReactNode
}

const Button: FC<IProps> = ({
	type = 'primary',
	shape,
	startIcon,
	children,
	...props
}) => {
	const MyRipples = createRipples({
		color:
			type === 'primary' ? 'rgba(255, 254, 254, 0.4)' : 'rgba(250, 69, 0, 0.4)',
		during: 500,
	})
	return (
		<MyRipples>
			<button
				className={clsx(styles.button, {
					[styles.primary]: type === 'primary',
					[styles.ghost]: type === 'ghost',
				})}
				{...props}
			>
				{startIcon && <span className={styles.startIcon}>{startIcon}</span>}
				{children}
			</button>
		</MyRipples>
	)
}
export default Button
