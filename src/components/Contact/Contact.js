import React, { useEffect } from 'react';
import * as yup from 'yup';
import useSubmit from '../../hooks/useSubmit';
import { useAlertContext } from '../../context/alertContext';
import {
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import Spinner from 'react-bootstrap/Spinner';
import styles from './Contact.module.css';
import classNames from 'classnames';
import video from '../../assets/connect.mp4';

const Contact = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const schema = yup.object().shape({
    firstName: yup.string().required('Required'),
    email: yup
      .string()
      .required('Required')
      .email('Please enter a valid email'),
    type: yup.string().required('Required'),
    message: yup
      .string()
      .required('Required')
      .min(25, 'Must be at least 25 characters'),
  });

  const {
    values,
    touched,
    errors,
    isValid,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      message: '',
    },
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: schema,
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      // Reset the form if the response is successful
      if (response.type === 'success') {
        resetForm();
      }
    }
  }, [response]);

  return (
    <section
      className={classNames('section bg-white', styles['contact'])}
      id='contact'
    >
      <video
        className={styles['video-container']}
        poster={require('../../assets/project-1.jpeg')}
        autoPlay
        muted
        loop
      >
        <source src={video} type='video/mp4' />
      </video>
      <article className={styles['form-container']}>
        <div className='section-title'>
          <h2>Contact Me</h2>
          <div className='underline' />
        </div>
        <Form noValidate onSubmit={handleSubmit} className={styles['form']}>
          <div className={styles['double-form-group']}>
            <FormGroup className={styles['form-group']}>
              <FormLabel>Name</FormLabel>
              <FormControl
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.firstName && errors.firstName}
                id='firstName'
                name='firstName'
                placeholder='Enter your name'
                className={classNames('bg-yellow', styles['form-control'])}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.firstName}
              </Form.Control.Feedback>
            </FormGroup>

            <FormGroup className={styles['form-group']}>
              <FormLabel>Email</FormLabel>
              <FormControl
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && errors.email}
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                className={classNames('bg-yellow', styles['form-control'])}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>
            </FormGroup>
          </div>

          <FormGroup className={styles['form-group']}>
            <FormLabel>Type of enquiry</FormLabel>
            <FormSelect
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.type && errors.type}
              id='type'
              name='type'
              className={classNames('bg-yellow', styles['form-select'])}
            >
              <option value='' disabled>
                --Select type of enquiry--
              </option>
              <option value='hireMe'>Freelance project proposal</option>
              <option value='openSource'>
                Open source consultancy session
              </option>
              <option value='other'>Other</option>
            </FormSelect>
            <Form.Control.Feedback type='invalid'>
              {errors.type}
            </Form.Control.Feedback>
          </FormGroup>

          <FormGroup className={styles['form-group']}>
            <FormLabel htmlFor='message'>Your message</FormLabel>
            <FormControl
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.message && errors.message}
              as='textarea'
              id='message'
              name='message'
              placeholder='Enter your message'
              className={classNames('bg-yellow', styles['form-control'])}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.message}
            </Form.Control.Feedback>
          </FormGroup>

          <Button
            type='submit'
            disabled={isLoading || !isValid}
            className={styles['btn']}
          >
            {isLoading ? (
              <Spinner
                animation='border'
                variant='warning'
                style={{
                  height: '1.3125rem',
                  width: '1.3125rem',
                }}
              />
            ) : (
              'Submit'
            )}
          </Button>
        </Form>
      </article>
    </section>
  );
};

export default Contact;
