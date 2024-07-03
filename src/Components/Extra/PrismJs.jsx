import React, { useEffect } from 'react'
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export const PrismJs = ({Code}) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre>
            <code className={`language-${Code.language}`}>
                {Code}
            </code>
        </pre >
    )
}
