import React, { useEffect } from 'react'
import { getMovieByTheatre } from '../../../api/api'

export default function MovieTab() {
    useEffect(() => {
        getMovieByTheatre()
            .then((res)=> {
                console.log("res:", res); 
            })
            .catch((err) => {
                console.log("err:", err);
            })
    }, [])
    

    return (
        <div>MovieTab</div>
    )
}
