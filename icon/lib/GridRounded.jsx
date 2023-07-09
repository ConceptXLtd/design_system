export default function GridRounded({ id, fill, className }) {
    return (
        <svg width="24" height="24" viewBox="0 0 25 25" fill="none" {...(id && { id })}
        {...(className && { className })}>
            <g clip-path="url(#clip0_113_400)">
                <path d="M19.1865 24.0066C17.8226 24.0066 16.5145 23.4648 15.55 22.5003C14.5855 21.5358 14.0437 20.2277 14.0437 18.8637V18.6923C14.0437 17.3283 14.5855 16.0202 15.55 15.0558C16.5145 14.0913 17.8226 13.5495 19.1865 13.5495H19.358C20.7219 13.5495 22.03 14.0913 22.9945 15.0558C23.959 16.0202 24.5008 17.3283 24.5008 18.6923V18.8637C24.5008 20.2277 23.959 21.5358 22.9945 22.5003C22.03 23.4648 20.7219 24.0066 19.358 24.0066H19.1865ZM2.31628 24.0066C1.83539 24.0066 1.37415 23.8158 1.03379 23.4761C0.693431 23.1364 0.501763 22.6755 0.500854 22.1946V15.3255C0.500854 14.844 0.692122 14.3822 1.03258 14.0418C1.37304 13.7013 1.8348 13.51 2.31628 13.51H9.17342C9.41269 13.5087 9.64986 13.5546 9.87131 13.6453C10.0928 13.7359 10.2941 13.8694 10.4638 14.0381C10.6334 14.2068 10.7681 14.4074 10.86 14.6283C10.9518 14.8493 10.9991 15.0862 10.9991 15.3255V22.1946C10.9982 22.6758 10.8063 23.1369 10.4656 23.4767C10.1249 23.8165 9.66317 24.007 9.18199 24.0066H2.31628ZM15.8146 10.5083C15.3331 10.5083 14.8713 10.3171 14.5308 9.9766C14.1904 9.63614 13.9991 9.17438 13.9991 8.6929V1.82205C13.9991 1.34057 14.1904 0.878805 14.5308 0.538347C14.8713 0.197889 15.3331 0.00662094 15.8146 0.00662094H22.6854C23.1669 0.00662094 23.6286 0.197889 23.9691 0.538347C24.3096 0.878805 24.5008 1.34057 24.5008 1.82205V8.6929C24.5008 9.17408 24.3098 9.63558 23.9697 9.97599C23.6296 10.3164 23.1683 10.5079 22.6871 10.5083H15.8146ZM2.31628 10.5083C2.07788 10.5083 1.8418 10.4614 1.62155 10.3701C1.40129 10.2789 1.20116 10.1452 1.03258 9.9766C0.692122 9.63614 0.500854 9.17438 0.500854 8.6929V1.82205C0.500854 1.34057 0.692122 0.878805 1.03258 0.538347C1.37304 0.197889 1.8348 0.00662094 2.31628 0.00662094H9.17342C9.41269 0.00526528 9.64986 0.0512221 9.87131 0.141849C10.0928 0.232475 10.2941 0.365984 10.4638 0.534697C10.6334 0.70341 10.7681 0.903999 10.86 1.12493C10.9518 1.34586 10.9991 1.58277 10.9991 1.82205V8.6929C10.9991 8.93145 10.9521 9.16766 10.8608 9.38803C10.7694 9.60839 10.6356 9.8086 10.4668 9.9772C10.298 10.1458 10.0977 10.2795 9.87725 10.3706C9.65679 10.4618 9.42054 10.5085 9.18199 10.5083H2.31628Z" {...(fill && { style: {fill} })} />
            </g>
            <defs>
                <clipPath id="clip0_113_400">
                    <rect width="24" height="24" fill="white" transform="translate(0.500854 0.0065918)" />
                </clipPath>
            </defs>
        </svg>

    );
}