type ThemeProps = {
    form: any;
    loading: boolean;
    error: any;
    lang: string;
    mode: string | undefined;
    useI18n?: function
    onSubmitSuccess?: function
    onSubmitError?: function
}

interface ILoadControlMSurvey {
    data, errors, onChange, disabled
}


interface IThemeSection {
    theme?: string,
    title?: string,
    subtitle?: string,
    className?: string,
    children: React.ReactNode
}

interface IThemeSectionGeneric {
    title?: string;
    subtitle?: string;
    className?: string;
    children?: React.ReactNode;
    isEdit?: boolean
}

interface IElementItem {
    data: IElementItemData
    error?: any;
    onChange?: any;
    disabled?: boolean;
}

interface IElementItemData {
    type: string;
    config?: any;
    id?: string;
    isRequired?: boolean;
    name?: string;
}