export default function Users({ id, fill, className }) {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...(id && { id })}
        {...(className && { className })}>
            <g clip-path="url(#clip0_113_440)">
                <path d="M8 13.006C7.10998 13.006 6.23996 12.7421 5.49993 12.2476C4.75991 11.7532 4.18314 11.0504 3.84254 10.2281C3.50195 9.40583 3.41283 8.50103 3.58647 7.62812C3.7601 6.7552 4.18868 5.95338 4.81802 5.32404C5.44736 4.69471 6.24918 4.26612 7.12209 4.09249C7.99501 3.91886 8.89981 4.00797 9.72208 4.34856C10.5443 4.68916 11.2471 5.26593 11.7416 6.00596C12.2361 6.74598 12.5 7.61601 12.5 8.50602C12.5 9.6995 12.0259 10.8441 11.182 11.688C10.3381 12.5319 9.19347 13.006 8 13.006ZM15.5 20.0072C15.4986 18.6813 14.9714 17.4102 14.0339 16.4727C13.0964 15.5352 11.8252 15.008 10.4994 15.0066H5.50057C4.17476 15.008 2.90363 15.5352 1.96614 16.4727C1.02864 17.4102 0.501361 18.6813 0.5 20.0072L0.5 24.0066H15.5V20.0072ZM17.9994 9.00659C17.1094 9.00659 16.2394 8.74267 15.4994 8.24821C14.7593 7.75374 14.1826 7.05094 13.842 6.22867C13.5014 5.4064 13.4123 4.5016 13.5859 3.62869C13.7595 2.75577 14.1881 1.95395 14.8174 1.32461C15.4468 0.695277 16.2486 0.266694 17.1215 0.0930601C17.9944 -0.0805734 18.8992 0.00854156 19.7215 0.349136C20.5438 0.68973 21.2466 1.26651 21.741 2.00653C22.2355 2.74655 22.4994 3.61658 22.4994 4.50659C22.4994 5.70007 22.0253 6.84466 21.1814 7.68857C20.3375 8.53249 19.1929 9.00659 17.9994 9.00659ZM19.4994 11.0072H14.5006C14.3249 11.0153 14.1498 11.033 13.976 11.0603C13.6124 11.9012 13.0756 12.6559 12.4006 13.2752C13.8668 13.69 15.1578 14.5714 16.0781 15.7859C16.9984 17.0004 17.4977 18.4817 17.5006 20.0055H24.5V16.006C24.4982 14.6805 23.9707 13.4098 23.0333 12.4727C22.0958 11.5356 20.8249 11.0085 19.4994 11.0072Z" {...(fill && { style: {fill} })} />
            </g>
            <defs>
                <clipPath id="clip0_113_440">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.0065918)" />
                </clipPath>
            </defs>
        </svg>

    );
}