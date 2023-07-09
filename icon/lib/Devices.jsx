export default function Devices({ id, fill, className }) {
    return (
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none"  {...(id && { id })}
            {...(className && { className })}>
            <g clip-path="url(#clip0_113_434)">
                <path d="M1.35733 22.2873C1.13001 22.2873 0.912024 22.1995 0.75129 22.0432C0.590556 21.8869 0.500244 21.675 0.500244 21.454V11.454C0.500244 11.233 0.590556 11.0211 0.75129 10.8648C0.912024 10.7085 1.13001 10.6207 1.35733 10.6207H8.21398C8.44129 10.6207 8.65928 10.7085 8.82001 10.8648C8.98075 11.0211 9.07106 11.233 9.07106 11.454V21.454C9.07106 21.675 8.98075 21.8869 8.82001 22.0432C8.65928 22.1995 8.44129 22.2873 8.21398 22.2873H1.35733ZM20.2131 20.6207C19.9858 20.6207 19.7678 20.5328 19.6071 20.3765C19.4464 20.2202 19.356 20.0083 19.356 19.7873V13.1207C19.356 12.8996 19.4464 12.6877 19.6071 12.5315C19.7678 12.3752 19.9858 12.2873 20.2131 12.2873H23.6414C23.8688 12.2873 24.0867 12.3752 24.2475 12.5315C24.4082 12.6877 24.4985 12.8996 24.4985 13.1207V19.7873C24.4985 20.0083 24.4082 20.2202 24.2475 20.3765C24.0867 20.5328 23.8688 20.6207 23.6414 20.6207H20.2131ZM17.6419 17.2873H10.7852V11.454C10.7852 10.7909 10.5143 10.1553 10.0321 9.68641C9.54991 9.21757 8.89592 8.95399 8.21398 8.95399H2.21441V3.12066C2.21441 2.89964 2.30472 2.68774 2.46545 2.53146C2.62619 2.37518 2.84418 2.28732 3.07149 2.28732H21.9273C22.1546 2.28732 22.3726 2.37518 22.5333 2.53146C22.6941 2.68774 22.7844 2.89964 22.7844 3.12066V10.6207H20.2131C19.5312 10.6207 18.8772 10.8842 18.395 11.3531C17.9128 11.8219 17.6419 12.4576 17.6419 13.1207V17.2873Z" {...(fill && { fill })} />
            </g>
            <defs>
                <clipPath id="clip0_113_434">
                    <rect width="24" height="24" fill="white" transform="translate(0.500244 0.00234985)" />
                </clipPath>
            </defs>
        </svg>
    );
}