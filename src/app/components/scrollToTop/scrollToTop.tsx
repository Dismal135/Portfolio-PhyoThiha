'use client'

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    const toTopButton = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    const toggleShowEvent = () => {
        if (window.scrollY > 300) {
            setShow(true)
        } else {
            setShow(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleShowEvent)
        return () => {
            window.removeEventListener('scroll', toggleShowEvent)
        }
    }, []);

    return (
        <>
            {
                show && (
                    <button onClick={toTopButton} className="bg-black w-8 h-8 fixed bottom-4 right-4 rounded-sm dark:bg-red-500">
                        <FontAwesomeIcon icon={faArrowUp} color="white" className="dark:text-black" />
                    </button>
                )
            }
        </>
    )
};

export default ScrollToTop;