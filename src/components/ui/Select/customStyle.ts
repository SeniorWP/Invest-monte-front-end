import { StylesConfig } from 'react-select'

export const selectStyle: StylesConfig = {
	option: (provided, state) => ({
		...provided,
		'&:active': {
			backgroundColor: 'var(--color-active)',
			color: 'var(--color-white)',
		},

		backgroundColor: state.isFocused
			? 'var(--color-active)'
			: 'var(--color-white)',
		color: state.isFocused ? 'var(--color-white)' : 'var(--color-primary)',
		fontWeight: 400,
		fontSize: 14,
	}),
	dropdownIndicator: (base, state) => ({
		...base,
		color: state.selectProps.menuIsOpen
			? 'var(--color-active)'
			: 'var(--color-primary)',

		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
		transition: 'transform 0.2s ease',
	}),
	control: (base, state) => ({
		...base,
		minWidth: 180,
		fontSize: 14,
		lineHeight: '16px',
		fontWeight: 500,
		borderColor: state.menuIsOpen
			? 'var(--color-active)'
			: 'var(--color-primary)',
		'&:hover': {
			cursor: 'pointer',
			borderColor: 'none',
		},
		boxShadow: 'none',
	}),
	multiValue: (styles) => {
		return {
			...styles,
			backgroundColor: 'var(--color-active)',
			boxShadow: 'none',
		}
	},
	multiValueLabel: (styles) => ({
		...styles,
		color: 'var(--color-white)',
		'&:hover': {
			borderColor: 'gray',
		},
	}),
	multiValueRemove: (styles) => ({
		...styles,
		color: 'white',
		'&:hover': {
			color: 'var(--color-white)',
		},
	}),
	singleValue: (styles) => {
		return {
			...styles,
			backgroundColor: 'var(--color-active)',
			boxShadow: 'none',
			padding: '3px 6px',
			color: 'var(--color-white)',
			borderRadius: 2,
			boxSizing: 'border-box',
			width: 'max-content',
		}
	},
}
