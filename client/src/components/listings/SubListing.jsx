import React, { useContext, useEffect } from 'react'
import axios from '../../api/axios';
import useRefreshToken from '../../hooks/useRefreshToken';


const SubListing = () => {
    const refresh = useRefreshToken()

    useEffect(() => {
        axios.get('/listing', { withCredentials: true });
    }, [])

    return (
        <div>SubListing
            <button onClick={() => refresh()}>Refresh</button>
        </div>
    )
}

export default SubListing