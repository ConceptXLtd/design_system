export default function SideBarArrowIcon({isActive, theme}) {
  return (
    <svg
      style={{ transition: "transform .3s ease-in-out", transform: isActive ? "rotate(90deg)" : "rotate(0deg)" }}
      width="3"
      height="6"
      viewBox="0 0 4 8"
    >
      <path
        id="arrow"
        d="M12.833,8.079a.581.581,0,0,0-.811,0L9.4,10.633a.581.581,0,0,1-.811,0L5.977,8.079a.581.581,0,0,0-.811,0,.548.548,0,0,0,0,.786l2.623,2.56a1.744,1.744,0,0,0,2.423,0l2.623-2.56A.548.548,0,0,0,12.833,8.079Z"
        transform="translate(-7.914 12.999) rotate(-90)"
        fill={theme.name === "light" ? "#2B3746" : "#F6F7F7"}
      />
    </svg>
  );
}
