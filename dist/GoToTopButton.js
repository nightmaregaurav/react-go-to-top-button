import React, { useEffect, useState } from 'react';
import "./goToTopButton.css";
const smoothScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const toggleBackToTopActiveClass = (backToTop) => {
    if (window.scrollY > 100) {
        backToTop.classList.add('active');
    }
    else {
        backToTop.classList.remove('active');
    }
};
const GoToTopButton = ({ arrowComponent = React.createElement(React.Fragment, null, "\uD83E\uDC45"), backgroundColor, backgroundColorOnHover, arrowColor, arrowColorOnHover }) => {
    useEffect(() => {
        const backToTop = document.querySelector('.back-to-top');
        if (!backToTop) {
            return;
        }
        window.addEventListener('load', toggleBackToTopActiveClass.bind(null, backToTop));
        document.addEventListener('scroll', toggleBackToTopActiveClass.bind(null, backToTop));
        return () => {
            window.removeEventListener('load', toggleBackToTopActiveClass.bind(null, backToTop));
            document.removeEventListener('scroll', toggleBackToTopActiveClass.bind(null, backToTop));
        };
    }, []);
    const [hover, setHover] = useState(false);
    return (React.createElement("span", { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onClick: smoothScrollToTop, className: "back-to-top", style: {
            background: hover ? backgroundColorOnHover : backgroundColor,
            color: hover ? arrowColorOnHover : arrowColor
        } },
        React.createElement("b", null, arrowComponent)));
};
export default GoToTopButton;
