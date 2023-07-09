export default function Plus({ id, fill, className }) {
    return (
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none" {...(id && { id })}
        {...(className && { className })}>
            <g clip-path="url(#clip0_113_385)">
                <path d="M12.5026 24.01C9.32086 24.0064 6.27053 22.7406 4.02072 20.4908C1.77091 18.241 0.505339 15.1909 0.501709 12.0092C0.505792 8.82759 1.77143 5.77724 4.02114 3.52753C6.27086 1.27781 9.32099 0.0123835 12.5026 0.00830078C15.6844 0.0114779 18.735 1.27762 20.9849 3.52753C23.2348 5.77743 24.5002 8.82731 24.5034 12.0092C24.5007 15.1911 23.2355 18.2425 20.9855 20.4925C18.7354 22.7425 15.6846 24.0073 12.5026 24.01ZM7.73991 10.7736C7.41147 10.774 7.09669 10.9045 6.86461 11.1369C6.63252 11.3693 6.50214 11.6841 6.50214 12.0125C6.50259 12.3407 6.6331 12.6561 6.86513 12.8881C7.09717 13.1202 7.41177 13.2493 7.73991 13.2498H11.2648V16.7774C11.2657 17.1049 11.3965 17.4185 11.6286 17.6496C11.8607 17.8807 12.175 18.01 12.5026 18.0096C12.8293 18.0091 13.1426 17.879 13.3737 17.648C13.6048 17.4169 13.7348 17.1041 13.7352 16.7774V13.2498H17.2601C17.5882 13.2493 17.9027 13.1202 18.1348 12.8881C18.3668 12.6561 18.4974 12.3407 18.4979 12.0125C18.4979 11.6841 18.3675 11.3693 18.1354 11.1369C17.9033 10.9045 17.5885 10.774 17.2601 10.7736H13.7352V7.25101C13.7361 6.92286 13.6069 6.60838 13.3758 6.37538C13.1447 6.14239 12.8307 6.01054 12.5026 6.00873C12.1737 6.00964 11.8586 6.14066 11.6265 6.37371C11.3944 6.60676 11.2643 6.92211 11.2648 7.25101V10.7736H7.73991Z"  {...(fill && { fill })} />
            </g>
            <defs>
                <clipPath id="clip0_113_385">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.0065918)" />
                </clipPath>
            </defs>
        </svg>
    );
}