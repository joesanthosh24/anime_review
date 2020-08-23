import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as Yup from 'yup';

import CustomButton from '../shared/CustomButton';

const AnimeReviewSchema = Yup.object({
    name: Yup.string().required().min(2),
    body: Yup.string().required().min(8),
    rating: Yup.string().required()
        .test('isNum1To5', 'Rating between numbers: 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        }),
    imgSrc: Yup.string().required()
})

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{ name: '', body: '', rating: '', imgSrc: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
                validationSchema={AnimeReviewSchema}
            >
                {(formikProps) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Anime Name"
                            onChangeText={formikProps.handleChange('name')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('name')}
                        />
                        <Text style={globalStyles.errorText}>
                            { formikProps.touched.name && formikProps.errors.name }
                        </Text>
                        
                        <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder="Anime Body"
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>
                            { formikProps.touched.body && formikProps.errors.body }
                        </Text>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Anime Rating"
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='numeric'
                            onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>
                            { formikProps.touched.rating && formikProps.errors.rating }
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Image URL"
                            onChangeText={formikProps.handleChange('imgSrc')}
                            value={formikProps.values.imgSrc}
                            onBlur={formikProps.handleBlur('imgSrc')}
                        />
                        <Text style={globalStyles.errorText}>
                            { formikProps.touched.rating && formikProps.errors.imgSrc }
                        </Text>
                        <CustomButton displayText='Submit' onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}