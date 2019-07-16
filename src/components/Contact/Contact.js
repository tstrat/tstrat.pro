import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './contact.scss';

function Contact() {
    const [ sendStatus, setSendStatus ] = useState(0);
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
            { sendStatus === 0 ?
            <Formik
                initialValues= { initialValues }
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    // send email to server?
                    axios.post('/mailer/send', values).then(response => {
                        setSendStatus(1) // success message
                    }).catch(err => {
                        console.log(err);
                        setSendStatus(-1); // error message
                    }).finally(() => {
                        actions.setSubmitting(false) // free up formik
                    })
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
            : sendStatus === 1 ?
                <div className='success'>
                    <h1>Sucess!</h1>
                    <h2>Message was successfully sent to Travis! Feel free to keep browsing.</h2>
                    <Link to='/about'><button>Go Back</button></Link>
                </div>
            :   <div className='error'>
                    <h1>An Error has Occurred!</h1>
                    <h2>Something went wrong :(  Please try again at a later time.</h2>
                    <Link to='/about'><button>Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default Contact
