import React from "react";

export type TriangleImageProps = Omit<React.SVGProps<SVGSVGElement>, "ref">;

const TriangleImage: React.FC<TriangleImageProps> = (svgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="305"
      height="277"
      viewBox="0 0 305 277"
      {...svgProps}
    >
      <path
        fill="none"
        stroke="#000"
        strokeWidth="15"
        d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z"
        opacity=".2"
      />
    </svg>
  );
};

export default TriangleImage;
