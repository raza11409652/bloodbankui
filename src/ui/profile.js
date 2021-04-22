import { useContext } from "react";
import authcontext from "../context/authcontext";

const Profile = () => {
    const { user, setUser } = useContext(authcontext)
    return (<>
     <pre>
                {user?.name}<br></br>
                {user?.email}
            </pre>
    </>)
}

export default Profile;