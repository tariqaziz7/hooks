import { useContext } from 'react';
import { Context } from '../../App';
import Component1 from './Component1';

export default function 
() {
    const {value, data} = useContext(Context);
   return(
    <>
        <div>{value}</div>
        <div>{data}</div>
        <Component1 />
    </>
   )

}
