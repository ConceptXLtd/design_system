export default function EyeClosed({ id, fill, className }) {
    return (
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none" {...(id && { id })}
        {...(className && { className })}>
        <g clip-path="url(#clip0_101_568)">
        <path d="M23.7668 9.40289C22.8644 7.92514 21.7261 6.60517 20.3971 5.49534L23.196 2.6964C23.5796 2.29928 23.5685 1.66647 23.1714 1.28294C22.784 0.90878 22.1699 0.90878 21.7825 1.28294L18.7386 4.33079C16.8517 3.21005 14.6946 2.62588 12.5 2.64143C6.31126 2.64143 2.78457 6.87788 1.23316 9.40294C0.255614 10.9841 0.255614 12.9819 1.23316 14.563C2.13559 16.0408 3.2739 17.3608 4.60292 18.4706L1.80398 21.2695C1.40686 21.6531 1.39585 22.2859 1.77938 22.683C2.16291 23.0801 2.79577 23.0911 3.19284 22.7076C3.20118 22.6995 3.20938 22.6913 3.21744 22.683L6.26829 19.6321C8.15285 20.7527 10.3075 21.3379 12.5 21.3245C18.6887 21.3245 22.2154 17.0881 23.7668 14.563C24.7444 12.9819 24.7444 10.9841 23.7668 9.40289ZM6.50225 11.983C6.49658 8.67599 9.17276 5.99058 12.4797 5.98491C13.731 5.98276 14.9515 6.37266 15.9697 7.09979L14.5183 8.55126C13.9089 8.1838 13.2116 7.98793 12.5 7.98447C10.2917 7.98447 8.50152 9.77466 8.50152 11.983C8.50499 12.6945 8.70086 13.3919 9.06831 14.0012L7.61685 15.4527C6.89206 14.4409 6.5023 13.2276 6.50225 11.983ZM12.5 17.9807C11.2554 17.9807 10.0421 17.5909 9.03031 16.8661L10.4818 15.4147C11.0911 15.7821 11.7885 15.978 12.5 15.9815C14.7083 15.9815 16.4985 14.1913 16.4985 11.983C16.4951 11.2714 16.2992 10.5741 15.9317 9.96472L17.3832 8.51325C19.305 11.2045 18.6812 14.9441 15.99 16.8659C14.9718 17.593 13.7513 17.9829 12.5 17.9807Z" {...(fill && { style: {fill} })}/>
        </g>
        <defs>
        <clipPath id="clip0_101_568">
        <rect width="24" height="24" fill="white" transform="translate(0.5 0.00231934)"/>
        </clipPath>
        </defs>
        </svg>
    );
}