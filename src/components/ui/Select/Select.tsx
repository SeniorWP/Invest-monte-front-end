import React, { FC, ReactNode, useState } from 'react'
import ReactSelect, {
	ControlProps,
	OnChangeValue,
	components,
} from 'react-select'
import makeAnimated from 'react-select/animated'

import { selectStyle } from './customStyle'
import styles from './select.module.scss'
import { IOption, ISelect } from './types'

const animatedComponents = makeAnimated()

type Props = {
	children: ReactNode
}

const Control = ({ children, ...props }: ControlProps) => {
	// @ts-ignore
	const { emoji, onEmojiClick } = props.selectProps
	const style = { cursor: 'pointer' }

	return (
		<components.Control {...props}>
			<div
				onMouseDown={onEmojiClick}
				style={{
					cursor: 'pointer',
					width: 50,
					background: 'green',
				}}
			>
				{emoji}
			</div>
			{children}
		</components.Control>
	)
}

const Select: FC<ISelect> = ({
	options,
	isLoading,
	isMulti,
	placeholder,
	field,
}) => {
	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((item: IOption) => item.value)
				: (newValue as IOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter(
						(option) => field.value.indexOf(option.value) >= 0
				  )
				: options.find((option) => option.value === field.value)
		} else {
			return isMulti ? [] : ('' as any)
		}
	}

	return (
		<ReactSelect
			closeMenuOnSelect={isMulti ? false : true}
			options={options}
			onChange={onChange}
			value={getValue()}
			isMulti={isMulti}
			styles={selectStyle}
			components={{ Control }}
			isLoading={isLoading}
			placeholder={placeholder}
		/>
	)
}

export default Select
