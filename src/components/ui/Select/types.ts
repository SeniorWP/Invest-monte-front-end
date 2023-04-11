import { ControllerRenderProps } from 'react-hook-form'
import { Options } from 'react-select'

export interface IOption {
	label: string
	value: string
}

export interface ISelect {
	options: Options<IOption>
	isMulti?: boolean
	isLoading?: boolean
	placeholder?: string
	field: ControllerRenderProps<any, any>
}
