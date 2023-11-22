import React, {useRef} from 'react'

export default function DOMFocus() {
    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.focus();
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
}
