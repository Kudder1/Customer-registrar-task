import React from 'react';
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field  } from 'formik';
import { Button } from '@material-ui/core'
import { TextField, Select } from 'material-ui-formik-components'
import RandomFact from '../containers/RandomFactContainer';

const initialValues = {
    name: '',
    surname: '',
    gender: '',
    loyalty: 'Unavailable',
    cardnumber: ''
}

export default function TodoAddForm({ addUser }) {
    const history = useHistory();
    const plasticCardText = 'Plastic card';

    function onFormSubmit(values) {
        const registerDate = Date.now()
        addUser({
            ...values,
            registerDate
        })
        history.go(-1)
    }
    function onFormValidate( { name, surname, gender, loyalty, cardnumber } ) {   
        const errors = {};
        const requiredText = 'The field is required'
        const cardRegex = {
            visa: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
            mast: /^(?:5[1-5][0-9]{14})$/,
            amex: /^(?:3[47][0-9]{13})$/,
            disc: /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/,
        }
        if (loyalty === plasticCardText) {
            if (!cardRegex.visa.test(cardnumber) && !cardRegex.mast.test(cardnumber) && !cardRegex.amex.test(cardnumber) && !cardRegex.disc.test(cardnumber)) {
                errors.cardnumber = 'Card number is incorrect'
            }
        }
        if (!name) {
            errors.name = requiredText;
        }
        if (!surname) {
            errors.surname = requiredText;
        }
        if (!gender) {
            errors.gender = requiredText;
        }
        return errors;
    }
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={onFormSubmit} validate={onFormValidate}>
                {({ dirty, isValid, errors, touched, values: { loyalty } }) => (
                    <Form>
                        <Field 
                            variant="outlined"
                            name="name" 
                            label="Name" 
                            component={TextField}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name ? errors.name : ""}
                        />
                         <Field
                            variant="outlined"
                            name="surname" 
                            label="Surname" 
                            component={TextField}
                            error={touched.surname && Boolean(errors.surname)}
                            helperText={touched.surname ? errors.surname : ""}
                        />
                        <Field
                            variant="outlined"
                            name="gender"
                            label="Gender"
                            options={[
                            { value: '', label: 'Select' },
                            { value: 'Male', label: 'Male' },
                            { value: 'Female', label: 'Female' },
                            ]}
                            component={Select}
                            error={touched.gender && Boolean(errors.gender)}
                            helperText={touched.gender ? errors.gender : ""}
                        />
                        <Field
                            variant="outlined"
                            name="loyalty"
                            label="Loyalty program"
                            options={[
                            { value: 'Unavailable', label: 'Unavailable' },
                            { value: plasticCardText, label: plasticCardText },
                            { value: 'Mobile app', label: 'Mobile app' },
                            ]}
                            component={Select}
                        />
                        {loyalty === plasticCardText && (
                            <Field 
                                variant="outlined"
                                name="cardnumber" 
                                label="Credit Card" 
                                component={TextField}
                                error={touched.cardnumber && Boolean(errors.cardnumber)}
                                helperText={touched.cardnumber ? errors.cardnumber : ""}
                                autoComplete="cc-number"
                                title="Must not have spaces"
                            />
                        )}
                        <Button disabled={!(isValid && dirty)} type="submit" variant="contained" color="primary">Submit</Button>
                    </Form>
                )}
            </Formik>
            <RandomFact/>
        </>
    )
}
