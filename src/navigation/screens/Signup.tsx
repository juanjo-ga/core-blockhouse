import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { login } from "../../context/authapi/mockauth";
import { useAppSelector, useAppDispatch } from "../../utils/appContext";

export default function Signup() {
    const navigation = useNavigation();

      

    const {isAuthed, loading, error} = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();

    

    useEffect(() => {
        if (isAuthed) {
            navigation.navigate('HomeTabs');
        }
    }, [isAuthed]);


    // Zod schema for login form, need to validate the form
    const singupSchema = z.object({
        email: z.string({
            required_error: 'Email is required',
            message: 'Invalid email',
        }).email(),
        password: z.string({
            required_error: 'Password is required',
            message: 'Password must be at least 6 characters',
        }).min(6),
        confirmpassword: z.string({
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
        resolver: zodResolver(singupSchema),
        
    })
    


    return (
        <div className="flex flex-1 justify-center items-center p-6">
            <div className="flex flex-col  justify-center border border-gray-300 rounded-xl max-w-sm h-1/2 shadow p-4 shadow-black text-card-foreground bg-card">
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 22 25" fill="none" className='center'>
                        <path d="M11.1743 0.430176L21.6989 6.50656V18.6593L11.1743 24.7357L0.649648 18.6593V6.50656L11.1743 0.430176Z" fill="#171717"/>
                    </svg>
                </div>
                <div className="font-semibold tracking-tight text-2xl">Sign up</div>
                <div className="text-sm text-muted-foreground">Enter your email below to login to your account</div>
                <form className="flex-col flex" onSubmit={handleSubmit(handleLogin)}>
                <input
                    className='rounded-md p-2'
                    {...register('email')}
                    
                    placeholder="Email"                    
                
                />
                {errors.email?.message && <p className="text-red-500">{String(errors.email.message)}</p>}
                <input 
                    className='rounded-md p-2'
                    {...register('password')}
                    
                    placeholder="Password"                    
                
                />
                {errors.password?.message && <p className="text-red-500">{String(errors.password.message)}</p>}
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  bg-black text-white shadow hover:bg-primary/90 h-9 px-4 py-2 w-full" title="Login" type="submit" >
                    Login
                </button>
            </form>
            </div>
            
            </div>
        </div>
    );
};