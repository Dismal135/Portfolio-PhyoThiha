'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcherButton = () => {
    const { theme, setTheme } = useTheme();

    //this is for preventing hydration error before the component mounted
    const [mount, setMount] = useState(false);
    useEffect(() => {
        setMount(true)
    }, []);
    //

    return (
        <div>
            {mount && (
                theme === 'light' ? (
                    <button className="flex" onClick={() => setTheme('dark')}>
                        <Moon />
                    </button>
                ) : (
                    <button className="flex" onClick={() => setTheme('light')}>
                        <Sun />
                    </button>
                )
            )}
        </div>
    )
};

export default ThemeSwitcherButton;