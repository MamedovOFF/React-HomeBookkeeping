import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import ErrorsMessage from '../ErrorsMessage'
import { ITodo } from '../../types/IDefaaultStore'

interface ITodoForm {
  createTodo(payload: ITodo): void
}

const TodoForm = ({ createTodo }: ITodoForm) => {
  const TodosSchema = Yup.object().shape({
    title: Yup.string().max(50, 'Too Long!').required('This Field is Required'),
    body: Yup.string().max(150, 'Too Long!').required('This Field is Required'),
  })

  return (
    <div className="mb-5">
      <Formik
        initialValues={{
          title: '',
          body: '',
        }}
        validationSchema={TodosSchema}
        onSubmit={(values, { resetForm }) => {
          createTodo({
            ...values,
            id: Date.now(),
          })
          resetForm()
        }}
      >
        {({ handleSubmit, errors }) => {
          return (
            <Form>
              <div>
                <div className="mb-3">
                  <Field
                    name="title"
                    type="text"
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    id="exampleFormControlInput1"
                    placeholder="Title"
                  />
                  <ErrorsMessage name="title" />
                </div>
                <div className="mb-3">
                  <Field
                    as="textarea"
                    id="exampleFormControlTextarea1"
                    placeholder="Description"
                    name="body"
                    className={`form-control ${errors.body ? 'is-invalid' : ''}`}
                  />
                  <ErrorsMessage name="body" />
                </div>
              </div>
              <button className="btn btn-success" onClick={() => handleSubmit}>
                Submit
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default TodoForm
