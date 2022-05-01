import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../Detail/Detail';

const Details = () => {
    const {detailsId} = useParams()
    const [details, setDetails] = useState([])
    useEffect(()=>{
        fetch('inventories.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return ( 
        <div>
            <h1>Details length{details.id}</h1>
            {

                details.slice(0,6).map(detail=><Detail
                key={detail.id}
                detail={detail}
                
                ></Detail>)
            }
        </div>
    );
};

export default Details;