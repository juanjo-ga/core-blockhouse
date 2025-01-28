import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import {  StyleSheet } from 'react-native';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '../../context/authapi/mockauth';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../utils/appContext';

export default function Login() {
    const navigation = useNavigation();

      

    const {isAuthed, loading, error} = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();

    

    useEffect(() => {
        if (isAuthed) {
            navigation.navigate('HomeTabs');
        }
    }, [isAuthed, navigation]);


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


    const handleLogin = (values: { email: string; password: string }) => {
        dispatch(login(values));
    };



    const {
        register,
        handleSubmit, 
        formState: {errors}
    } = useForm<{ email: string; password: string }>({
        resolver: zodResolver(loginSchema),
        
    })
    


    return (
        <div className="flex flex-1 justify-center flex-col items-center p-6">
            <div className="flex flex-col  justify-center border border-gray-300 rounded-xl max-w-sm h-1/2 shadow p-4 shadow-black text-card-foreground bg-card">
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 22 25" fill="none" className='center'>
                        <path d="M11.1743 0.430176L21.6989 6.50656V18.6593L11.1743 24.7357L0.649648 18.6593V6.50656L11.1743 0.430176Z" fill="#171717"/>
                    </svg>
                </div>
                <div className="font-semibold tracking-tight text-2xl">Login</div>
                <div className="text-sm text-muted-foreground">Enter your email below to login to your account</div>
                <form className="flex-col flex space-y-2" onSubmit={handleSubmit(handleLogin)}>
                <div className="space-y-1">
                <input
                    className='rounded-md p-2 border border-gray-300 w-full' 
                    {...register('email')}
                    style={styles.input}
                    placeholder="example@mail.com"                    
                
                />
                {errors.email?.message && <p className="text-red-500">{String(errors.email.message)}</p>}
                </div>
                <div className="space-y-1">
                <input 
                    className='rounded-md p-2 w-full'
                    {...register('password')}
                    style={styles.input}
                    placeholder="password"                    
                
                />
                {errors.password?.message && <p className="text-red-500">{String(errors.password.message)}</p>}
                </div>

                {error && <p className="text-red-500">Error: Invalid login, login is example@mail.com, password </p>}
                <button 
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black text-white shadow hover:bg-primary/90 h-9 px-4 py-2 w-full" 
                title="Login" 
                type="submit" 
                disabled={loading}
                >
                    {loading ? <svg
                    className="animate-spin h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-label="Loading"
                    >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                    </svg> : 
                    'Login'}
                </button>
            </form>
                <div className="text-center text-sm">
                    Don't have an account? 
                    <button onClick={() => navigation.navigate('signup')} className="p-1 underline underline-offset-4">Sign up</button>
                </div>
            </div>
            
            </div>
            <div className="text-balance text-center text-xs max-w-sm text-muted-foreground space-y-1.5 ">
                <p>Since mock data is currently being fed and there is not backend, the Login is </p>
                <span>example@mail.com</span><br/>
                <span>password</span>
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

        paddingHorizontal: 8,
    },
});
