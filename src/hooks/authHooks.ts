import { useAppSelector } from "../utils/appContext";

export function isSignedIn() {
    const {isAuthed} = useAppSelector((state) => state.auth);
    return isAuthed;

}


