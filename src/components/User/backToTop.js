import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Show button when page is scrolled down 300 pixels
        const handleScroll = () => {
            if (window.pageYOffset > 50) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (50); // Number of steps (adjust this value to change the speed)
        const delay = 5; // Time between steps in milliseconds (adjust this value to change the speed)

        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, delay);
    };

    return (
        <>
            {showButton && (
                <Button
                    variant="danger"
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        right: '30px',
                        zIndex: 1000,
                        padding: '15px 20px',
                        opacity:0.5
                    }}
                >
                    <i class="fas fa-arrow-up" ></i>
                </Button>
            )}
        </>
    );
};

export default BackToTopButton;
