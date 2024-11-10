import React, {CSSProperties, useEffect, useState} from 'react';
import "./goToTopButton.css"

const smoothScrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

const toggleBackToTopActiveClass = (backToTop: Element) => {
  if (window.scrollY > 100) {
    backToTop.classList.add('active')
  } else {
    backToTop.classList.remove('active')
  }
}

interface GoToTopButtonProps {
  arrowComponent?: JSX.Element;
  backgroundColor: Exclude<CSSProperties['backgroundColor'], undefined>;
  backgroundColorOnHover: Exclude<CSSProperties['backgroundColor'], undefined>;
  arrowColor: Exclude<CSSProperties['color'], undefined>;
  arrowColorOnHover: Exclude<CSSProperties['color'], undefined>;
}

const GoToTopButton = (
  {
    arrowComponent=<>🡅</>,
    backgroundColor,
    backgroundColorOnHover,
    arrowColor,
    arrowColorOnHover
  }: GoToTopButtonProps
) => {
  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top');
    if(!backToTop) {
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

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={smoothScrollToTop}
      className={"back-to-top"}
      style={{
        background: hover ? backgroundColorOnHover : backgroundColor,
        color: hover ? arrowColorOnHover : arrowColor
      }}
    >
      <b>{arrowComponent}</b>
    </span>
  );
};

export default GoToTopButton;
