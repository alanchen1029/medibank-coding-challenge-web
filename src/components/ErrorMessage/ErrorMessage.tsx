import defaultClasses from './ErrorMessage.module.scss';

interface ErrorMessagePropsType {
    message: string;
    classes?: {
        errorMessageModifier: string;
    };
}

const ErrorMessage = (props: ErrorMessagePropsType) => {
    const { message } = props;
    return <p className={defaultClasses.errorMessage}>{message}</p>;
};

export default ErrorMessage;
