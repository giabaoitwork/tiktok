import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import style from './Image.module.scss';

function Image({ src, alt, classname, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
        <img
            src={customFallback}
            onError={() => {
                setFallback(images.noImage);
            }}
        />;
    };

    return (
        <img
            className={classNames(style.wrapper, classname)}
            src={fallback || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
