export default function Folder({  id, fill, className }) {
    return (
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none" {...(id && { id })}
        {...(className && { className })}>
            <g clip-path="url(#clip0_88_293)">
                <path d="M0.5 9.18811V17.6123C0.503328 20.1931 2.73997 22.2846 5.50002 22.2877H19.5C22.26 22.2846 24.4967 20.1931 24.5 17.6123V9.08431L0.5 9.18811Z" {...(fill && { fill })} />
                <path d="M19.5 3.58642H12.972C12.8173 3.58738 12.6645 3.55538 12.525 3.49292L9.36898 2.01175C8.95236 1.81775 8.49341 1.71663 8.02798 1.71628H5.49997C2.73997 1.71935 0.503328 3.81079 0.5 6.39167V7.31832L24.363 7.21453C23.8419 5.09459 21.8262 3.59076 19.5 3.58642Z" {...(fill && { fill })} />
            </g>
            <defs>
                <clipPath id="clip0_88_293">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.00231934)" />
                </clipPath>
            </defs>
        </svg>
    );
}