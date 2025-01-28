import { useAppSelector } from "../utils/appContext";

export function IsSignedIn() {
    const {isAuthed} = useAppSelector((state) => state.auth);
    return isAuthed;

}


