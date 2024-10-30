import { Formik, Form } from 'formik';
import React, { useMemo } from 'react';
import { formSubmit, formValidate } from '@/components/forms/actions';

interface FormContext {
    errors: (elementid: string) => any
    onChange: (elementid: string) => (value: any) => void
}
interface FormProps {
    refCode: string
    form: any
    children: (props: FormContext) => React.ReactNode
    onSubmitError?: (error: any) => void
    onSubmitSuccess?: (data: any) => void
    setLoading?: (loading: boolean) => void
    exchangeToken?: any
    duration?:any
    useI18n?: any
    config?:any
    fnFormSubmit?:any //(form.serviceCode, result)
    
}
export default (props: FormProps) => {

    let t = null
    if(!props.useI18n) {
        t = (text:any) => text
    }

    const config = props.config??{}


    const { refCode, form, exchangeToken, children, setLoading, onSubmitError, onSubmitSuccess, duration } = props
    
    const elements = useMemo(() => {
        return form?.sections.flatMap((section: any) => section?.elements || [])
    }, [form]);
    const initialValues = useMemo(() => {
        const result: any = {};
        if (!elements) return result;
        elements.forEach((element: any) => {
            const elementId = element.id || element.name;
            result[elementId] = element?.config?.value || element?.config?.defaultValue || ""
        })
        return result;
    }, [elements]);
    const handleValidate = (values: any) => {
        console.log('handleValidate', values)

        return formValidate(elements, values, t);;
    }
    const handleSubmit = async (values: any) => {
        console.log('handleSubmit', values)


        const res: serviceRes = await formSubmit(refCode, form, values, setLoading, exchangeToken, duration, props.fnFormSubmit)
        if (res.success) {
            if (config.Debug) console.log('success', res.data)
            if (onSubmitSuccess) onSubmitSuccess(res.data)
            return;
        }
        if (config.Debug) console.log('error', res)
        if (onSubmitError) onSubmitError(res)
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={handleValidate} >
            {({ errors, touched, setFieldValue }) => {
                const checkError = (elementid: string) => (errors[elementid] && touched[elementid] ? errors[elementid] : "")
                const onChange = (elementid: string) => ((value: any) => setFieldValue(elementid, value))
                return (
                    <Form noValidate>
                        {children({ errors: checkError, onChange } as FormContext)}
                    </Form>
                )
            }}
        </Formik>
    )
}