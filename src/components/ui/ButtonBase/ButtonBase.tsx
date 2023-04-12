import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './ButtonBase.module.scss'

interface IProps {
	className: string
	startIcon?: ReactNode
	endIcon?: ReactNode
	children?: ReactNode
}

const ButtonBase: FC<IProps> = ({
	className,
	endIcon,
	startIcon,
	children,
	...props
}) => {
	return (
		<button className={clsx(styles.button, className)} {...props}>
			{startIcon && <span className={styles.startIcon}>{startIcon}</span>}
			{children}
			{endIcon && <span className={styles.endIcon}>{endIcon}</span>}
		</button>
	)
}
export default ButtonBase
