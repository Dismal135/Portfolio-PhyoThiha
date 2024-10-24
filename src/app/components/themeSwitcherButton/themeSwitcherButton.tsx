'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeSwitcherButton = () => {
    const { setTheme, resolvedTheme } = useTheme();

    //this is for preventing hydration error before the component mounted
    const [mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true)
    }, []);
    //

    return (
        <>
        {
            !mount && ''
        }

        {
            resolvedTheme === 'light' && <Moon onClick={()=>setTheme('dark')} />
        }

        {
            resolvedTheme === 'dark'  && <Sun onClick={()=>setTheme('light')} />
        }
        </>
    )
    
};

export default ThemeSwitcherButton;