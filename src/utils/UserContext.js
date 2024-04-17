import { createContext } from "react";

// export default function UserContext(){
//     createContext({
//         loggedInUser:"Default User",
//     });
// }

const UserContext=createContext({
    loggedInUser:"Default User",
});

export default UserContext;