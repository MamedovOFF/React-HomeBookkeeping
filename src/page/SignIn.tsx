import { Formik, Form, Field } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import ErrorsMessage from '../components/ErrorsMessage'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'

const SignIn = () => {
  const dispatch = useDispatch()
  const signInSchema = Yup.object().shape({
    email: Yup.string().email('Not Valid Mail').required('Email is Required'),
    password: Yup.string().min(6, 'Please write 6 charter').required('This Field is Required'),
  })
  const auth = getAuth()
  return (
    <section className="vh-100 gradient-custom" style={{ background: 'aliceblue' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <Formik
                    initialValues={{
                      email: '',
                      password: '',
                    }}
                    validationSchema={signInSchema}
                    onSubmit={(values) => {
                      signInWithEmailAndPassword(auth, values.email, values.password)
                        .then((userCredential) => {
                          console.log(userCredential)
                          dispatch({
                            type: 'NOTIFICATION',
                            payload: { message: 'Sign In', type: 'Success', id: Date.now() },
                          })
                        })
                        .catch((error) => {
                          dispatch({
                            type: 'NOTIFICATION',
                            payload: { message: error.message, type: 'Success', id: Date.now() },
                          })
                        })
                    }}
                  >
                    {() => {
                      return (
                        <Form>
                          <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                          <p className="text-white-50 mb-5">Please enter your login and password!</p>

                          <div className="form-outline form-white mb-4">
                            <Field
                              name="email"
                              type="email"
                              id="typeEmailX"
                              className="form-control form-control-lg"
                              placeholder="Email"
                            />
                            <ErrorsMessage name="email" />
                          </div>

                          <div className="form-outline form-white mb-4">
                            <Field
                              name="password"
                              type="password"
                              id="typePasswordX"
                              className="form-control form-control-lg"
                              placeholder="Password"
                            />
                            <ErrorsMessage name="password" />
                          </div>
                          <button className="btn btn-outline-light btn-lg px-5" type="submit">
                            Login
                          </button>
                        </Form>
                      )
                    }}
                  </Formik>
                </div>

                <div>
                  <p className="mb-0">
                    Dont have an account?{' '}
                    <Link to="/sign-up" className="text-white-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn
