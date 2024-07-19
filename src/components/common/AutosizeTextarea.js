import React, { useEffect, useRef} from 'react';

const useAutosizeTextArea = (
    textAreaRef,
    value
) => {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "0px";
            const scrollHeight = textAreaRef.scrollHeight;
            textAreaRef.style.height = scrollHeight + "px";
        }
    }, [textAreaRef, value]);
};

const AutosizeTextarea = (
    {
        className,
        value,
        setValue,
        placeholder
    }) => {

    const textareaRef = useRef(null);

    useAutosizeTextArea(textareaRef.current, value);

    return (
        <>
            <textarea className={className} onChange={setValue} ref={textareaRef}
                rows={1}
                value={value}
                placeholder={placeholder}
            />
        </>
    )
}

export default AutosizeTextarea;
