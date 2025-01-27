
// Defining User 
export interface User {

    id: number;
    name: string;
    email: string;
    password: string;
}

export interface UserState {
    isAuthed: boolean;
    user: User | null;
    loading: boolean;
    error: string | null;
}