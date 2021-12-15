import { AuthContext} from "../utils/AuthProvider";
import { useContext } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';
import {Button} from "@material-ui/core/";

function UserLogin(){
    const currentUser  = useContext(AuthContext);

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
    return(
        <div>
        {currentUser ? (
            <Button color="blue" variant="contained" onClick={userLogout}>
              Logout
            </Button>
          ) : (
            <Button color="blue" variant="outlined" onClick={userLogin}>
              Login
            </Button>
          )}
        </div>
    )
}
    
export default UserLogin;





