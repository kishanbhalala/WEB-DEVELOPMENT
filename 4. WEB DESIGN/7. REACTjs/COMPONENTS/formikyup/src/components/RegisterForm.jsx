import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: 'ABC123kiss@',
        confirmPassword: 'ABC123kiss@',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        termsAndConditions: false,
        profilePicture: null,
        resume: null,
        preferredLanguage: '',
        occupation: '',
        annualIncome: '',
        maritalStatus: '',
        emergencyContact: {
            name: '',
            phoneNumber: '',
            relationship: ''
        },
        hobbies: []
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').min(3).max(50),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8)
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
            ),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        phoneNumber: Yup.string().matches(
            /^(?:(?:\+|00)?[1-9]\d{1,3})?[ -]?(?:\(?\d{3,}\)?[ -]?\d{3,}[- ]?\d{3,}|\(?\d{2,}\)?[ -]?\d{4,})$/,
            'Invalid phone number'
        ).required('Phone number is required'),
        dateOfBirth: Yup.date()
            .required('Date of Birth is required')
            .max(new Date(), 'Date of Birth cannot be in the future')
            .test(
                'is-adult',
                'You must be at least 18 years old',
                value => {
                    const today = new Date();
                    const birthDate = new Date(value);
                    const age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                        return age - 1 >= 18;
                    }
                    return age >= 18;
                }
            ),
        address: Yup.string().required('Address is required').min(5).max(100),
        city: Yup.string().required('City is required').min(3).max(50),
        state: Yup.string().required('State/Province is required'),
        zip: Yup.string().required('Zip/Postal Code is required'),
        country: Yup.string().required('Country is required'),
        termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the Terms and Conditions'),
        profilePicture: Yup.mixed().test('file-size', 'Profile Picture is too large (max 5MB)', value => !value || (value && value.size <= 5242880)),
        resume: Yup.mixed().test('file-size', 'Resume/CV is too large (max 10MB)', value => !value || (value && value.size <= 10485760)),
        preferredLanguage: Yup.string().required('Preferred Language is required'),
        occupation: Yup.string().required('Occupation is required'),
        annualIncome: Yup.number().required('Annual Income is required').min(0),
        maritalStatus: Yup.string().required('Marital Status is required'),
        emergencyContact: Yup.object().shape({
            name: Yup.string().required('Emergency Contact Name is required').min(3).max(50),
            phoneNumber: Yup.string().matches(
                /^(?:(?:\+|00)?[1-9]\d{1,3})?[ -]?(?:\(?\d{3,}\)?[ -]?\d{3,}[- ]?\d{3,}|\(?\d{2,}\)?[ -]?\d{4,})$/,
                'Invalid phone number'
            ).required('Emergency Contact Phone number is required'),
            relationship: Yup.string().required('Relationship is required').min(3).max(50)
        }),
        hobbies: Yup.array().min(1, 'At least one Hobby must be selected')
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form submitted:', values);
        resetForm();
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, setFieldValue }) => (
                    <Form className="space-y-4">

                        {/* Name */}
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field className="border" type="text" name="name" />
                            <ErrorMessage name="name" />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field type="password" name="confirmPassword" />
                            <ErrorMessage name="confirmPassword" />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field type="text" name="phoneNumber" />
                            <ErrorMessage name="phoneNumber" />
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <Field type="date" name="dateOfBirth" />
                            <ErrorMessage name="dateOfBirth" />
                        </div>

                        {/* Address */}
                        <div>
                            <label htmlFor="address">Address</label>
                            <Field type="text" name="address" />
                            <ErrorMessage name="address" />
                        </div>

                        {/* City */}
                        <div>
                            <label htmlFor="city">City</label>
                            <Field type="text" name="city" />
                            <ErrorMessage name="city" />
                        </div>

                        {/* State/Province */}
                        <div>
                            <label htmlFor="state">State/Province</label>
                            <Field type="text" name="state" />
                            <ErrorMessage name="state" />
                        </div>

                        {/* Zip/Postal Code */}
                        <div>
                            <label htmlFor="zip">Zip/Postal Code</label>
                            <Field type="text" name="zip" />
                            <ErrorMessage name="zip" />
                        </div>

                        {/* Country */}
                        <div>
                            <label htmlFor="country">Country</label>
                            <Field type="text" name="country" />
                            <ErrorMessage name="country" />
                        </div>

                        {/* Terms and Conditions */}
                        <div>
                            <label>
                                <Field type="checkbox" name="termsAndConditions" />
                                I accept the Terms and Conditions
                            </label>
                            <ErrorMessage name="termsAndConditions" />
                        </div>

                        {/* Profile Picture */}
                        <div>
                            <label htmlFor="profilePicture">Profile Picture</label>
                            <Field type="file" name="profilePicture" />
                            <ErrorMessage name="profilePicture" />
                        </div>

                        {/* Resume/CV */}
                        <div>
                            <label htmlFor="resume">Resume/CV</label>
                            <Field type="file" name="resume" />
                            <ErrorMessage name="resume" />
                        </div>

                        {/* Preferred Language */}
                        <div>
                            <label htmlFor="preferredLanguage">Preferred Language</label>
                            <Field type="text" name="preferredLanguage" />
                            <ErrorMessage name="preferredLanguage" />
                        </div>

                        {/* Occupation */}
                        <div>
                            <label htmlFor="occupation">Occupation</label>
                            <Field type="text" name="occupation" />
                            <ErrorMessage name="occupation" />
                        </div>

                        {/* Annual Income */}
                        <div>
                            <label htmlFor="annualIncome">Annual Income</label>
                            <Field type="number" name="annualIncome" />
                            <ErrorMessage name="annualIncome" />
                        </div>

                        {/* Marital Status */}
                        <div>
                            <label htmlFor="maritalStatus">Marital Status</label>
                            <Field as="select" name="maritalStatus">
                                <option value="">Select Marital Status</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </Field>
                            <ErrorMessage name="maritalStatus" />
                        </div>

                        {/* Emergency Contact */}
                        <div>
                            <label htmlFor="emergencyContact.name">Emergency Contact Name</label>
                            <Field type="text" name="emergencyContact.name" />
                            <ErrorMessage name="emergencyContact.name" />
                        </div>
                        <div>
                            <label htmlFor="emergencyContact.phoneNumber">Emergency Contact Phone Number</label>
                            <Field type="text" name="emergencyContact.phoneNumber" />
                            <ErrorMessage name="emergencyContact.phoneNumber" />
                        </div>
                        <div>
                            <label htmlFor="emergencyContact.relationship">Emergency Contact Relationship</label>
                            <Field type="text" name="emergencyContact.relationship" />
                            <ErrorMessage name="emergencyContact.relationship" />
                        </div>

                        {/* Hobbies */}
                        <div>
                            <label>Hobbies</label>
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>
                                    <Field type="checkbox" name="hobbies" value="reading" />
                                    Reading
                                </label>
                                <label>
                                    <Field type="checkbox" name="hobbies" value="traveling" />
                                    Traveling
                                </label>
                                <label>
                                    <Field type="checkbox" name="hobbies" value="sports" />
                                    Sports
                                </label>
                                <label>
                                    <Field type="checkbox" name="hobbies" value="music" />
                                    Music
                                </label>
                                <label>
                                    <Field type="checkbox" name="hobbies" value="art" />
                                    Art
                                </label>
                            </div>
                            <ErrorMessage name="hobbies" />
                        </div>

                        <button type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;



