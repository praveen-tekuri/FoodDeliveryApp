import { useEffect, useState } from "react";

const useOnlineStaus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    
    // check online status
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    },[])
    
    // boolean 
    return onlineStatus;
}
export default useOnlineStaus;