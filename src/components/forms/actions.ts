import { ELEMENT_TYPE, VALIDATE_TYPE } from "./constants"
import { isEmail, isUrl, isDate, isNumber } from "./utils"
//import { serviceSubmitForm } from "./services/form"
import dayjs from "dayjs"

export const formValidate = (elements: any, values: any, t: any) => {
    const errors: any = {};
    if(t == null) {
        t = (text: any) => text
    }

    elements.forEach((element: any) => {
        const elementId = element.id || element.name;

        if (element?.config?.isRequired) {
            if (!values[elementId] || values[elementId] === "") {
                errors[elementId] = t(`${elementId} is required`);

            } else if(element.type === ELEMENT_TYPE.STAR_RATING && values[elementId] == 0){
                errors[elementId] = t(`Please select point`);
            }
        }
        if (element?.config?.minLength) {
            if (values[elementId].length < element.config.minLength) {
                errors[elementId] = t(`Please input more than ${element.config.minLength} characters`);
            }
        }
        if (element?.config?.maxLength) {
            if (values[elementId].length > element.config.maxLength) {
                errors[elementId] = t(`Please input less than ${element.config.maxLength} characters`);
            }
        }
        if (element?.config?.maxLength) {
            if (values[elementId].length > element.config.maxLength) {
                errors[elementId] = t(`Please input less than ${element.config.maxLength} characters`);
            }
        }
        if (element?.config?.validate === VALIDATE_TYPE.NUMBER) {
            if (!isNumber(values[elementId])) {
                errors[elementId] = t(`Please input number`);
            }
        }
        if (element?.config?.validate === VALIDATE_TYPE.EMAIL) {
            if (!isEmail(values[elementId])) {
                errors[elementId] = t(`Please input email`);
            }
        }
        if (element?.config?.validate === VALIDATE_TYPE.URL) {
            if (!isUrl(values[elementId])) {
                errors[elementId] = t(`Please input url`);
            }
        }
        if (element?.config?.validate === VALIDATE_TYPE.DATE) {
            if (!isDate(values[elementId])) {
                errors[elementId] = t(`Please input date`);
            }
        }
        if (element?.config?.validate === VALIDATE_TYPE.STRING) {
            if (!(typeof values[elementId] === 'string' || values[elementId] instanceof String)) {
                errors[elementId] = t(`Please input string`);
            }
        }
        if (element?.config?.validate === VALIDATE_TYPE.REGEXP) {
            if (!element?.config?.regexp.test(values[elementId])) {
                errors[elementId] = t(`Please input correct format`);
            }
        }
    })

    return errors;
}

export const formSubmit = async (refCode: string, form: any, formValues: any, setLoading?: (loading: boolean) => void, exchangeToken?: any, duration?: any, fnFormSubmit?: any) => {
    if (!fnFormSubmit) {
        console.error('fnFormSubmit is not defined')
        return { success: false, message: 'fnFormSubmit is not defined' }
    }

    if (setLoading) setLoading(true)
        const result = buildReturnOnject(refCode, form, formValues, exchangeToken, duration)
    const res = await fnFormSubmit(form.serviceCode, result);
    if (setLoading) setLoading(false)
    return res;
}

const buildReturnOnject = (refCode: string, form: any, answers: any, exchangeToken: any, duration: any) => {
    const result = {
        id: form.id,
        formId: form.formId,
        refCode: refCode,
        theme: form.theme,
        type: form.type,
        version: form.version,
        duration: duration ? dayjs().diff(duration, 'seconds') : 0,
        token: exchangeToken?.accessToken || '',
        serviceId: form.serviceId,
        serviceCode: form.serviceCode,
        elements: [] as Array<any>
    }

    form.sections.forEach((s: any) => {
        let sectionId = s.id
        s.elements.forEach((e: any) => {
            result.elements.push({
                id: e.id,
                section_id: sectionId,
                type: e.type,
                value: !answers[e.id]? "" : answers[e.id],
                options: null
            })
        })
    })

    return result
}


export default () => { }

