export default function MenuDotsIcon({ theme }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15">
      <g id="menu_dots_vertical" data-name="menu dots vertical" transform="translate(4.492)">
        <rect id="BG" width="15" height="15" transform="translate(-4.492)" opacity="0" />
        <path
          id="Path_1853"
          data-name="Path 1853"
          d="M19773.506,9242.5a1.5,1.5,0,1,1,1.5,1.5A1.5,1.5,0,0,1,19773.506,9242.5Zm0-6a1.5,1.5,0,1,1,1.5,1.5A1.5,1.5,0,0,1,19773.506,9236.5Zm0-6a1.5,1.5,0,1,1,1.5,1.5A1.5,1.5,0,0,1,19773.506,9230.5Z"
          transform="translate(-19771.998 -9229)"
          fill={theme === "dark" ? "var(--whiteHalf) !important" : "#2B3746"}
        />
      </g>
    </svg>
  );
}
