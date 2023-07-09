export default function Message({ id, fill, className }) {
    return (
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none"  {...(id && { id })}
        {...(className && { className })}>
            <g clip-path="url(#clip0_113_384)">
                <path d="M20.5006 0.0065918H4.49943C3.43871 0.0065918 2.42144 0.427959 1.67141 1.178C0.921367 1.92804 0.5 2.94531 0.5 4.00602L0.5 16.006C0.5 17.0667 0.921367 18.084 1.67141 18.834C2.42144 19.5841 3.43871 20.0054 4.49943 20.0054H7.4L11.8571 23.7769C12.0377 23.9299 12.2667 24.014 12.5034 24.014C12.7401 24.014 12.9692 23.9299 13.1497 23.7769L17.6069 20.0054H20.5074C21.567 20.0036 22.5825 19.5815 23.331 18.8316C24.0796 18.0818 24.5 17.0655 24.5 16.006V4.00602C24.5 2.94531 24.0786 1.92804 23.3286 1.178C22.5786 0.427959 21.5613 0.0065918 20.5006 0.0065918ZM7.49943 5.00716H12.5C12.7651 5.00716 13.0193 5.11246 13.2067 5.29989C13.3941 5.48732 13.4994 5.74153 13.4994 6.00659C13.4994 6.27166 13.3941 6.52587 13.2067 6.71329C13.0193 6.90072 12.7651 7.00602 12.5 7.00602H7.49943C7.23414 7.00602 6.97971 6.90063 6.79212 6.71304C6.60453 6.52545 6.49914 6.27103 6.49914 6.00573C6.49914 5.74044 6.60453 5.48602 6.79212 5.29843C6.97971 5.11084 7.23414 5.00545 7.49943 5.00545V5.00716ZM17.5006 15.0066H7.49943C7.23414 15.0066 6.97971 14.9012 6.79212 14.7136C6.60453 14.526 6.49914 14.2716 6.49914 14.0063C6.49914 13.741 6.60453 13.4866 6.79212 13.299C6.97971 13.1114 7.23414 13.006 7.49943 13.006H17.5006C17.7659 13.006 18.0203 13.1114 18.2079 13.299C18.3955 13.4866 18.5009 13.741 18.5009 14.0063C18.5009 14.2716 18.3955 14.526 18.2079 14.7136C18.0203 14.9012 17.7659 15.0066 17.5006 15.0066ZM17.5006 11.0072H7.49943C7.23414 11.0072 6.97971 10.9018 6.79212 10.7142C6.60453 10.5266 6.49914 10.2722 6.49914 10.0069C6.49914 9.74158 6.60453 9.48716 6.79212 9.29957C6.97971 9.11198 7.23414 9.00659 7.49943 9.00659H17.5006C17.7659 9.00659 18.0203 9.11198 18.2079 9.29957C18.3955 9.48716 18.5009 9.74158 18.5009 10.0069C18.5009 10.2722 18.3955 10.5266 18.2079 10.7142C18.0203 10.9018 17.7659 11.0072 17.5006 11.0072Z"  {...(fill && { fill })} />
            </g>
            <defs>
                <clipPath id="clip0_113_384">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.0065918)" />
                </clipPath>
            </defs>
        </svg>
    );
}