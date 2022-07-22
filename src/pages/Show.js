/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

function Show() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

  useEffect( ()=>{

    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(results =>{  
        if(isMounted){
          setShow(results);
          setIsLoading(false);
        }
       })
    .catch(err =>{
      if(isMounted){
        setError(err.message);
        setIsLoading(false);
      }
    });
    return ()=> {
      isMounted = false;
    }

  }, [id]);

  console.log('show', show);

if(isLoading){
  return <div>Data is being loaded</div>
}
if(error){
  return <div>Error message occured: {Error}</div>
}

  return (
    <div>
      This is show page
    </div>
  )
}

export default Show;