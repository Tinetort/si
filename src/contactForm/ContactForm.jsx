import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Form, Button } from 'react-bootstrap'

function ContactForm() {
    const [state, handleSubmit] = useForm('myyrkkkl')

    const renderFormGroup = (label, name, type = 'text', placeholder = '') => (
        <Form.Group className="mb-3" controlId={`formBasic${name}`}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                placeholder={`Please enter your ${
                    placeholder || name.toLowerCase()
                }`}
                isInvalid={state.errors?.[name] && state.touched?.[name]}
                required={name === 'email'}
            />
            <ValidationError
                prefix={label}
                field={name}
                errors={state.errors}
            />
        </Form.Group>
    )

    if (state.succeeded) {
        return <p>Thank you, we will get back to you!</p>
    }

    return (
        <>
            <p className="fs-1 text-center m-2">- Contact us -</p>
            <Form onSubmit={handleSubmit}>
                {renderFormGroup('Name', 'name')}
                {renderFormGroup('Company Name (if applicable)', 'companyName')}
                {renderFormGroup('Phone Number', 'phone', 'tel')}
                {renderFormGroup('Email', 'email', 'email')}
                {renderFormGroup('Zip Code', 'zipCode')}
                {renderFormGroup(
                    'Request Details',
                    'requestDetails',
                    'textarea',
                    'additional details'
                )}
                <Button
                    variant="primary"
                    type="submit"
                    disabled={state.submitting}
                >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default ContactForm
