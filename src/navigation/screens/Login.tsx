import { useForm, useFormContext } from 'react-hook-form';
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
        <div className="flex justify-center p-4 ">
            <div className="flex flex-col  justify-center border border-gray-300 rounded-xl p-4 max-w-sm shadow shadow-black text-card-foreground bg-card">
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold tracking-tight text-2xl">Login</div>
                <div className="text-sm text-muted-foreground">Enter your email below to login to your account</div>
            </div>
            <form className="flex-col flex" onSubmit={handleSubmit((data) => console.log(data))}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    {...register('email')}
                    style={styles.input}
                    placeholder="Email"                    
                    keyboardType="email-address"
                />
                {errors.email?.message && <p className="text-red-500">{String(errors.email.message)}</p>}
                <TextInput
                    {...register('password')}
                    style={styles.input}
                    placeholder="Password"                    
                    secureTextEntry
                />
                {errors.password?.message && <p className="text-red-500">{String(errors.password.message)}</p>}
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black text-white shadow hover:bg-primary/90 h-9 px-4 py-2 w-full" title="Login" type="submit" >
                    Login
                </button>
            </form>
            </div>
        </div>
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
