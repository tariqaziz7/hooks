import React, {useContext} from 'react'
import { Context } from '../../App';

export default function Component1() {
    const {value, data} = useContext(Context);
    return (
        <>
          <h1>{data} again</h1>
        </>
      );
}
