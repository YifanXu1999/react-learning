import React from "react";

export default function Template(    {children}: {children:React.ReactNode}) {
    return <div className="template">
        <h2>I am template </h2>
        {children}
    </div>
}