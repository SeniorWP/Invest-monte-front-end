import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

type Props = {
	className?: string
	cover?: StaticImageData
}
const Card = ({ className, cover }: Props) => {
	return (
		<div className={clsx(className, {})}>
			{cover && <Image alt="cover" src={cover} />}
			<div>Card</div>
		</div>
	)
}
export default Card
