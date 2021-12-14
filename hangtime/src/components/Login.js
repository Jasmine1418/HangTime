import { AuthContext} from "./utils/AuthProvider";
import { useContext } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';

function UserLogin(){
    const { currentUser } = useContext(AuthContext);

    const userLogin = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
        };
    const userLogout = () => {
        const auth = getAuth()
        signOut(auth).then(() =>{
            console.log("Logged out");
        }).catch((error) => {
            console.log(error);
        });
    };
}
    
export 





