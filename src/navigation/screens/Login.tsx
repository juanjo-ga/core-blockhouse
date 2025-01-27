import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Login() {


    // Zod schema for login form, need to validate the form
    const loginSchema = z.object({
        email: z.string({
            required_error: 'Email is required',
            message: 'Invalid email',
        }).email(),
        password: z.string({
            required_error: 'Password is required',
            message: 'Password must be at least 6 characters',
        }).min(6),
    });

    const {
        register,
        handleSubmit, 
        formState: {errors}
    } = useForm({
        resolver: zodResolver(loginSchema),
    })
    

    


    return (
        <View style={styles.container}>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    {...register('email')}
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                />
                {errors.email?.message && <p>{errors.email?.message}</p>}
                <TextInput
                    {...register('password')}
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />
                <button className="bg-slate-300 rounded-xl w-100 h-100" title="Login" type="submit" />
            </form>
        </View>
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
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});
