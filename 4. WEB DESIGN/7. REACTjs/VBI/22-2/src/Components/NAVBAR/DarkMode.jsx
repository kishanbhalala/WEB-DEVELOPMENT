import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [theme])

    return (
        <div>
            {
                theme === "dark" ? <MdLightMode  onClick={() => setTheme("light")} /> : <MdDarkMode onClick={() => setTheme("dark")} />
            }
        </div>
    )
}

export default DarkMode
