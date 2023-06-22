export default function ThreeDotsIcon({ onClick }) {
  return (
    <svg onClick={onClick} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 9C2.32843 9 3 8.32843 3 7.5C3 6.67157 2.32843 6 1.5 6C0.671573 6 0 6.67157 0 7.5C0 8.32843 0.671573 9 1.5 9Z"
        fill="white"
      />
      <path
        d="M7 9C7.82843 9 8.5 8.32843 8.5 7.5C8.5 6.67157 7.82843 6 7 6C6.17157 6 5.5 6.67157 5.5 7.5C5.5 8.32843 6.17157 9 7 9Z"
        fill="white"
      />
      <path
        d="M12.5 9C13.3284 9 14 8.32843 14 7.5C14 6.67157 13.3284 6 12.5 6C11.6716 6 11 6.67157 11 7.5C11 8.32843 11.6716 9 12.5 9Z"
        fill="white"
      />
    </svg>
  );
}
