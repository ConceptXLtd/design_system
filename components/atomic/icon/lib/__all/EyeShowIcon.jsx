export default function EyeShowIcon({ isHide, error }) {
  const style = {
    hide: {
      opacity: "0",
      transition: "all .3s",
    },
    show: {
      opacity: "1",
      transition: "all .3s",
    },
  };
  return (
    <svg style={isHide ? style.hide : style.show} width="18" height="14.012" viewBox="0 0 18 14.012">
      <g id="eye" transform="translate(0.005 -2.655)">
        <path
          id="Union_1"
          data-name="Union 1"
          d="M.55,8.941a3.679,3.679,0,0,1,0-3.87A9.929,9.929,0,0,1,9,0a9.929,9.929,0,0,1,8.45,5.071,3.679,3.679,0,0,1,0,3.87A9.928,9.928,0,0,1,9,14.012,9.928,9.928,0,0,1,.55,8.941ZM1.828,5.856a2.189,2.189,0,0,0,0,2.3A8.483,8.483,0,0,0,9,12.512a8.483,8.483,0,0,0,7.172-4.356,2.187,2.187,0,0,0,0-2.3A8.477,8.477,0,0,0,9,1.5,8.482,8.482,0,0,0,1.828,5.856Zm3.424,1.15A3.749,3.749,0,1,1,9,10.755,3.748,3.748,0,0,1,5.252,7.006Zm1.5,0A2.249,2.249,0,1,0,9,4.757,2.249,2.249,0,0,0,6.751,7.006Z"
          transform="translate(-0.005 2.655)"
          fill={error ? "red" : "#747d8c"}
        />
      </g>
    </svg>
  );
}
