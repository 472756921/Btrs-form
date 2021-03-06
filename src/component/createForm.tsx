import React from 'react';
import { render } from 'react-dom';
import { Form, Select, DatePicker, TimePicker } from 'antd';
import IndexForm from './components/index';
import { generatorCode } from './generator/generatorCode';

const { RangePicker: RangePickerTime } = TimePicker;
const { RangePicker: RangePickerDate } = DatePicker;

interface IformConfigData {
	formConfig: {
		labelCol: { span: number };
		wrapperCol: { span: number };
		[name: string]: any;
	};
	formItems: IformItem[];
	[name: string]: any;
}

interface IformItem {
	formItemConfig: {
		type: string;
		name?: string;
		label?: string;
		rules?: any;
		[name: string]: any;
	};
	componentConfig?: any;
}

const config = {
	formConfig: {
		name: 'test',
		labelCol: { span: 4 },
		wrapperCol: { span: 6 },
		onFinish: (values: any) => {
			console.log('values  :>> ', values);
		},
		onValuesChange: (changedValues: any, allValues: any) => {
			// console.log('object :>> ', changedValues, allValues);
		}
	},
	formItems: [
		{
			formItemConfig: {
				type: 'input',
				name: 'input',
				label: 'input',
				// initialValue: '123',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'inputNumber',
				name: 'inputNumber',
				label: 'inputNumber',
				// initialValue: '123',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'select',
				name: 'select',
				label: 'select',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				options: [
					{ label: '111', value: 1 },
					{ label: '222', value: 2 }
				]
			}
		},
		{
			formItemConfig: {
				type: 'select',
				name: 'select_none',
				label: 'select_none',
				rules: [{ 'required': true, 'message': 'Please input your username!' }],
				show: [{ item: 'select', value: 1 }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'select',
				name: 'select_multiple',
				label: 'select_multiple',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				mode: 'multiple',
				options: [
					{ label: '333', value: 3, disabled: true },
					{ label: '4444', value: 4 },
					{ label2: '555', value: 5 }
				]
			}
		},
		{
			formItemConfig: {
				type: 'select',
				name: 'select_multiple_group',
				label: 'select_multiple_group',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				mode: 'multiple',
				options: [
					[
						{ groupName: 'groupName' },
						{ label: '666', value: 6, disabled: true },
						{ label: '777', value: 7 },
						{ label2: '11111', value: 11 }
					],
					{ label: '888', value: 8, disabled: true },
					{ label: '999', value: 9 },
					{ label2: '101010', value: 10 }
				]
			}
		},
		{
			formItemConfig: {
				type: 'radio',
				name: 'radio',
				label: 'radio',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				options: [
					{ label: 'aaa', value: 1, disabled: true },
					{ label: 'bbb', value: 2 },
					{ label: 'ccc', value: 3 }
				]
			}
		},
		{
			formItemConfig: {
				type: 'checkbox',
				name: 'checkbox',
				label: 'checkbox',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				options: [
					{ label: 'aaa', value: 1, disabled: true },
					{ label: 'bbb', value: 2 },
					{ label: 'ccc', value: 3 }
				]
			}
		},
		{
			formItemConfig: {
				type: 'rate',
				name: 'rate',
				label: 'rate',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'switch',
				name: 'switch',
				label: 'switch',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'slider',
				name: 'slider',
				label: 'slider',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'cascader',
				name: 'cascader',
				label: 'cascader',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
				// initialValue: ['zhejiang', 'hangzhou', 'xihu']
			},
			componentConfig: {
				options: [
					{
						value: 'zhejiang',
						label: 'Zhejiang',
						children: [
							{
								value: 'hangzhou',
								label: 'Hangzhou',
								children: [
									{
										value: 'xihu',
										label: 'West Lake'
									}
								]
							}
						]
					},
					{
						value: 'jiangsu',
						label: 'Jiangsu',
						children: [
							{
								value: 'nanjing',
								label: 'Nanjing',
								children: [
									{
										value: 'zhonghuamen',
										label: 'Zhong Hua Men'
									}
								]
							}
						]
					}
				]
			}
		},
		{
			formItemConfig: {
				type: 'datePicker',
				name: 'datePicker',
				label: 'datePicker',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'datePicker',
				name: 'datePicker-range',
				label: 'datePicker-range',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				range: true
			}
		},
		{
			formItemConfig: {
				type: 'timePicker',
				name: 'timePicker',
				label: 'timePicker',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {}
		},
		{
			formItemConfig: {
				type: 'timePicker',
				name: 'timePicker-range',
				label: 'timePicker-range',
				rules: [{ 'required': true, 'message': 'Please input your username!' }]
			},
			componentConfig: {
				range: true
			}
		},
		{
			formItemConfig: {
				type: 'button'
			},
			componentConfig: {
				type: 'primary',
				htmlType: 'submit',
				text: '提交'
			}
		}
	]
};

const createForm = () => {
	const createFather = (data: IformConfigData) => {
		const itmes = data.formItems.map((it: IformItem, i: number) => (
			<IndexForm key={`${data.formConfig.name}_${i}`} {...it} />
		));
		const FormCom = <Form {...data.formConfig}>{itmes}</Form>;

		console.log('object :>> ', generatorCode(data));
		return FormCom;
	};

	const testDat = <div>123</div>;

	return (
		<div>
			{createFather(config)}
			<br /> ----- <br />
			<br /> ----- <br />
			<br /> ----- <br />
			<br /> ----- <br />
			<br /> ----- <br />
			<br /> ----- <br />
			<br /> ----- <br />
			<br /> ----- <br />
			<br /> ----- <br />
			<br /> ----- <br />
			<br /> ----- <br />
		</div>
	);
};

export default createForm;
