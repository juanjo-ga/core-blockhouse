import { Controller, Form, FormProvider, SubmitErrorHandler, useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signin } from '../../context/authapi/mockauth';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../utils/appContext';
import SignupButton from '../../components/ui/button';
import { Svg, Path } from 'react-native-svg';
import { getReadableValidationErrorMessage } from '../../utils/getvalidationErrors';
import { TextInput } from '../../components/ui/textInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



export default function Signup() {
    const navigation = useNavigation();

      

    const {isAuthed, loading} = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();

    const [shouldValidate] = useState()


    useEffect(() => {
        if (isAuthed) {
            navigation.navigate('HomeTabs');
        }
    }, [isAuthed, navigation]);


    // Zod schema for login form, need to validate the form
    const signupSchema = z.object({
        email: z.string({
            required_error: 'Email is required',
            message: 'Invalid email',
        }).email(),
        password: z.string({
            required_error: 'Password is required',
            message: 'Password must be at least 6 characters',
        }).min(6),
        confirmPassword: z.string({
            required_error: 'Password is required',
            message: 'Password must be at least 6 characters',
        }).min(6),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

    const handleSignup = (values: { email: string; password: string }) => {
        dispatch(signin(values));
    };


    const methods = useForm<{ email: string; password: string, confirmPassword: string}>({
        resolver: zodResolver(signupSchema),
        
    })
    
    const onError: SubmitErrorHandler<{ email: string; password: string, confirmPassword: string}> = (
        errors,
        e
    ) => {
        console.log(JSON.stringify(errors));
        // Alert.alert('Warning', getReadableValidationErrorMessage(errors));
    };

    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps={Platform.OS =='android' ? "handled": "always"}
                className="flex flex-1">
        <View className="flex flex-1 justify-center gap-y-10 flex-col items-center p-6">
            <View className="flex flex-col justify-center rounded-xl max-w-m h-3/4  p-4 shadow-black text-card-foreground bg-card">
            <View className="flex flex-col gap-y- p-4">
                <View className="flex justify-center">
                    <Svg width="50" height="50" viewBox="0 0 22 25" fill="none" className='center justify-center'>
                        <Path d="M11.1743 0.430176L21.6989 6.50656V18.6593L11.1743 24.7357L0.649648 18.6593V6.50656L11.1743 0.430176Z" fill="#171717"/>
                    </Svg>
                </View>
                <Text className="text-2xl font-semibold tracking-tight ">Sign up</Text>
                <View className="flex-col flex space-y-2 text-sm text-muted-foreground">
                    <Text>Enter your email below to login to your account</Text>
                </View>
                    <FormProvider {...methods}>
                        <Controller
                        control={methods.control}
                        name="email"
                        render={({
                            field: { onChange, onBlur, value },
                            fieldState: { error },
                        }) => {
                            return (
                            <TextInput
                                label='Email'
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={error?.message}
                            />
                            );
                        }}
                        />
                        <Controller
                        control={methods.control}
                        name="password"
                        render={({
                            field: { onChange, onBlur, value },
                            fieldState: { error },
                        }) => {
                            return (
                            <TextInput
                                label='Password'
                                className="border rounded-md h-10 border-gray-300 p-2"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={error?.message}
                            />
                            );
                        }}
                        />
                        <Controller
                        control={methods.control}
                        name="confirmPassword"
                        render={({
                            field: { onChange, onBlur, value },
                            fieldState: { error },
                        }) => {
                            return (
                            <TextInput
                                label='Confirm Password'
                                className="border rounded-md h-10 border-gray-300 p-2"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                errorMessage={error?.message}
                            />
                            );
                        }}
                        />
                        
                    </FormProvider>
                <SignupButton
                    loading={loading}
                    title={"Sign Up"}
                    disabled={loading}
                    onPress={
                        shouldValidate
                        ? () => {
                            /** we could also prevalidate using zod like below */

                            // get current form values
                            const currFormValues = methods.getValues();
                            // https://zod.dev/?id=safeparse
                            const result =
                                signupSchema.safeParse(currFormValues);

                            if (!result.success) {
                                const formattedError = result.error.format();
                                console.log(JSON.stringify(formattedError));
                                Alert.alert(JSON.stringify(formattedError));
                            } else {
                                Alert.alert(
                                'Validation is successful with zod'
                                );
                            }
                            }
                        : methods.handleSubmit(handleSignup, onError)
                    }
                    >

                </SignupButton>
                <View className="">
                    <Text className="text-sm text-center pb-4">Have an account?</Text> 
                    <Pressable onPress={() => navigation.navigate('login')} className="inline-flex items-center justify-center  rounded-md disabled:opacity-50 bg-gray-200 text-white hover:bg-primary/90 h-9 px-4 py-2 w-full">
                        <Text className="text-black font-medium text-sm">Log In</Text>
                    </Pressable>
                </View>
            </View>
            
            </View>
            <View className="text-balance text-center text-xs max-w-sm  text-muted-foreground space-y-1.5 ">
                <Text>You can put any details in for the purpose of testing, nothing will be stored after the userContext is destroyed (logged out)</Text>
            </View>
        </View>
        </KeyboardAwareScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
});
