import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './contact.scss';

function Contact() {

    const initialValues = {
        name: '',
        email: '',
        message: '',
    }

    const SignupSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email().required("Required")
    })
    return (
        <div className='contact'>

            <Formik
                initialValues= { initialValues }
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    // send email to server?
                    actions.setSubmitting(false)

                }}
            >
                { ({ values, errors, touched, isSubmitting }) =>

                <Form>
                    <Link to='/about'><FaArrowLeft/></Link>
                    <div className='form-divider'>
                        <div className='form-divider--section'>
                            <label>Name</label>
                            <Field type='text' name='name'/>
                            {errors.name && touched.name && <div className='error'>{errors.name}</div>}
                        </div>
                        <div className='form-divider--section'>
                            <label>E-mail</label>
                            <Field type='email' name='email' />
                            {errors.email && touched.email && <div className='error'>{errors.email}</div>}
                        </div>
                    </div>
                    <div className='form-divider'>
                        <div className='form-divider--section'>
                            <label>Message</label>
                            <Field component='textarea' rows='5' cols='50' name='message' />
                        </div>
                    </div>
                    <div className='btns'>
                        <button onClick={() => { values.name=''; values.email=''; values.message=''}}>Clear Form</button>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </div>
                </Form>

                }

            </Formik>
        </div>
    );
};

export default Contact
