import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import ButtonBase from '../ButtonBase/ButtonBase'

import styles from './Buttom.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'ghost'
	icon?: ReactNode
	startIcon?: ReactNode
	endIcon?: ReactNode
	children?: ReactNode
}

const Button: FC<IProps> = ({
	variant,
	startIcon,
	endIcon,
	children,
	icon,
	...props
}) => {
	return (
		<ButtonBase
			startIcon={startIcon}
			endIcon={endIcon}
			className={clsx(styles.button, {
				[styles.primary]: variant === 'primary',
				[styles.ghost]: variant === 'ghost',
				[styles.icon]: icon,
			})}
			{...props}
		>
			{icon && <span>{icon}</span>}
			{children}
		</ButtonBase>
	)
}
export default Button
