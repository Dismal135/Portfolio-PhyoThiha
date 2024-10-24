'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcherButton = () => {
    const { setTheme, resolvedTheme } = useTheme();

    //this is for preventing hydration error before the component mounted
    const [mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true)
    }, []);

    if (!mount) return
    //

    if (resolvedTheme === 'light') {
        return <Moon onClick={()=>setTheme('dark')} />
    }

    if (resolvedTheme === 'dark') {
        return <Sun onClick={()=>setTheme('light')} />
    }

};

export default ThemeSwitcherButton;