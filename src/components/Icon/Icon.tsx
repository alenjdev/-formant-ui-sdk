import * as React from "react";

export interface IIconProps {
  name: "menu";
  size: number;
  color?: string;
}

const icons = {
  menu: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 13H3V11H21V13Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 7H3V5H21V7Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 19H3V17H21V19Z"
        fill="white"
      />
    </svg>
  ),
};

const Icon: React.FC<IIconProps> = ({ name, size, color }) => {
  return (
    <div style={{ height: size, width: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icons[name]}
      </svg>
    </div>
  );
};

export default Icon;
