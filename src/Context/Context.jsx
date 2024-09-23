import React, { useContext } from 'react'
import { useState } from 'react';
import { createContext } from 'react';

const BlogContext = createContext();

const Context = ({children}) => {
    const [currentuser, setCurrentUser] = useState(false);

    return <BlogContext.Provider value={{ currentuser, setCurrentUser }}>
    {children}
    </BlogContext.Provider>
};

export default Context;

export const Blog = () => useContext(BlogContext);