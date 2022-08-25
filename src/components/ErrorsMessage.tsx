import { ErrorMessage } from 'formik'

interface IErrorMessage {
  name: string
}

const ErrorsMessage = ({ name }: IErrorMessage) => (
  <ErrorMessage name={name}>{(msg) => <span className="error">{msg}</span>}</ErrorMessage>
)

export default ErrorsMessage
