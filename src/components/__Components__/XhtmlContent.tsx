import React from 'react'

interface XhtmlContentProps {
    content : string;
}

const XhtmlContent: React.FC<XhtmlContentProps> = ({content}) => (
    <div dangerouslySetInnerHTML={{__html: content}} />
);

export default XhtmlContent
