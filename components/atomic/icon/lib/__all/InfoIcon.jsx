export default function InfoIcon({ onClick }) {
  return (
    <svg onClick={onClick} width="14" height="14" viewBox="0 0 10 10">
      <path
        id="info"
        d="M5,10A5,5,0,1,0,0,5a5,5,0,0,0,5,5ZM5,2.083a.625.625,0,1,1-.625.625A.625.625,0,0,1,5,2.083ZM4.583,4.167H5A.833.833,0,0,1,5.833,5V7.5A.417.417,0,1,1,5,7.5V5H4.583a.417.417,0,1,1,0-.833Z"
        opacity="0.5"
      />
    </svg>
  );
}
