import { Skia } from '@shopify/react-native-skia';

export const svgs = {
  Circle: Skia.SVG.MakeFromString(
    `<svg viewBox='0 0 100 100' width="20" height="20" xmlns='http://www.w3.org/2000/svg'>
      <circle cx='50' cy='50' r='50' />
    </svg>`,
  ),
  Star: Skia.SVG.MakeFromString(
    `<svg
      viewBox='0 0 1024 1024'
      xmlns='http://www.w3.org/2000/svg'
      className='icon'
      width="20" height="20"
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g id='SVGRepo_iconCarrier'>
        <path d='M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z' />{' '}
      </g>
    </svg>`,
  ),
  Polygon: Skia.SVG.MakeFromString(
    `<svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      width="20" height="20"
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g id='SVGRepo_iconCarrier'>
        <path d='M21.9,11.5l-4.5-7.8c-0.2-0.3-0.5-0.5-0.9-0.5h-9c-0.4,0-0.7,0.2-0.9,0.5l-4.5,7.8c-0.2,0.3-0.2,0.7,0,1l4.5,7.8c0.2,0.3,0.5,0.5,0.9,0.5h9c0.4,0,0.7-0.2,0.9-0.5l4.5-7.8C22,12.2,22,11.8,21.9,11.5z' />
      </g>
    </svg>`,
  ),
  Square: Skia.SVG.MakeFromString(
    `<svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' width="20" height="20">
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g id='SVGRepo_iconCarrier'>
        <rect x='1' y='1' width='14' height='14' />
      </g>
    </svg>`,
  ),
  Triangle: Skia.SVG.MakeFromString(
    `<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='none' width="20" height="20">
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z'
        />
      </g>
    </svg>`,
  ),
};
