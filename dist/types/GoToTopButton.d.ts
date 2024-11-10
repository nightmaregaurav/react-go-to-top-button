import React, { CSSProperties } from 'react';
import "./goToTopButton.css";
interface GoToTopButtonProps {
    arrowComponent?: JSX.Element;
    backgroundColor: Exclude<CSSProperties['backgroundColor'], undefined>;
    backgroundColorOnHover: Exclude<CSSProperties['backgroundColor'], undefined>;
    arrowColor: Exclude<CSSProperties['color'], undefined>;
    arrowColorOnHover: Exclude<CSSProperties['color'], undefined>;
}
declare const GoToTopButton: ({ arrowComponent, backgroundColor, backgroundColorOnHover, arrowColor, arrowColorOnHover }: GoToTopButtonProps) => React.JSX.Element;
export default GoToTopButton;
