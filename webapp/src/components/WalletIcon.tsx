import { SVGProps } from "react"

export const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    className="mr-3 text-lg"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect
      width={416}
      height={288}
      x={48}
      y={144}
      fill="none"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={48}
      ry={48}
    />
    <path
      fill="none"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"
    />
    <path stroke="none" d="M368 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32z" />
  </svg>
);
