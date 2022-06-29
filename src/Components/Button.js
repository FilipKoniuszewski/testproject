import React from 'react';

export default function Button({clickEvent, content, className}) {
    return (
        <button onClick={clickEvent} className={className}>
            {content}
        </button>
    );
}
