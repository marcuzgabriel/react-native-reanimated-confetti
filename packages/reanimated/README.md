<h2 align="left">Confetti for react native and web with the latest react-native-reanimated v3</h2>

React native reanimated confetti, a simple yet fully customizable component made to achieve confetti animation in a cannon-new-year-style. Works for iOS, Android and web.

<div style="flex-direction: row">
<a href="https://www.npmjs.com/package/react-native-reanimated-confetti">
  <img alt="weekly downloads from npm" src="https://img.shields.io/npm/dw/react-native-reanimated-confetti"></a>
  <img alt="react-native" src="https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB"></a>
  <img alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"></a>
  <img alt="javascript" src="https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E"></a>
  <img alt="javascript" src="https://img.shields.io/badge/storybook-FF4785?style=flat-square&logo=storybook&logoColor=white"></a>
<a href="#badge">
</div>
<br>
<img width="220px" src="https://github.com/marcuzgabriel/react-native-reanimated-confetti/blob/main/packages/web/gifs/confetti.gif" />

### Installation

`npm install react-native-reanimated-confetti`

### Usage

1. Import react-native-reanimated-confetti

```javascript
import Confetti from 'react-native-reanimated-confetti';
```

2. Once you create the Confetti, you have two options or a mix a both:

- **Default Confetti** : The component will use the shapes which are located in `src/components/Shapes`

- **Custom confetti** : Insert custom confetti shapes with the svgs prop. The confetti shapes will consist of a mix of both default and custom shapes. Adding the prop onlyShowCustomSvgs to true will only show the custom shapes.

```js
const ConfettiExample: React.FC = () => (
  <Confetti svgs=[<Svg>...</Svg>] />
)
```

### Props

| Name               | Type                   | Description                                 | Required | Default         |
| ------------------ | ---------------------- | ------------------------------------------- | -------- | --------------- |
| count              | number                 | items count to display                      |          | 100             |
| activateAnimation  | shared value           | possibility to prerender items              |          | false           |
| batchConfetti      | boolean                | batch confetti for performance reasons      |          | false           |
| origin             | {x: number, y: number} | animation position origin                   |          | { x: -10, y: 0} |
| explosionSpeed     | number                 | explosion duration (ms) from origin to top  |          | 350             |
| fallSpeed          | number                 | fall duration (ms) from top to bottom       |          | 3000            |
| fadeOut            | boolean                | make the confettis disappear at the end     |          | false           |
| colors             | string[]               | give your own colors to the confettis       |          | default colors  |
| onlyShowCustomSvgs | boolean                | only showing custom svgs based on svgs prop |          | false           |
| svgs               | React.JSX.Element[]    | array containing your custom svgs           |          | []              |
| delay              | number                 | cannon / animation delay                    |          | 0               |
| minSize            | number                 | min size of confetti shapes                 |          | 20              |
| maxSize            | number                 | max size of confetti shapes                 |          | 30              |

### Hotdog confetti example

```js
import Confetti from 'react-native-reanimated-confetti';
import Svg, { Path } from 'react-native-svg';

/* NOTE: Like hotdog confetti? No problem! */
const ConfettiExample: React.FC = () => (
  <Confetti
    count={100}
    origin={{ x: -10, y: 0 }}
    svgs={[
      <Svg viewBox="0 0 512 512" height={20} width={20}>
        <Path d="M496.2 208.2l-34 34c1.2 1.7 1.9 3.7 1.9 5.8c0 2.6-1 5.2-2.9 7L255 461.1c-1.9 1.9-4.4 2.9-7 2.9c-2.1 0-4.1-.7-5.8-1.9l-34 34c10.7 10.2 25 15.8 39.8 15.8c15.4 0 30.1-6.1 41-17L495 289c10.9-10.9 17-25.6 17-41c0-14.8-5.7-29.1-15.8-39.8zM15.8 303.8l34-34c-1.2-1.7-1.9-3.7-1.9-5.8c0-2.6 1-5.2 2.9-7L17 223 50.9 257 257 50.9c1.9-1.9 4.4-2.9 7-2.9c2.1 0 4.1 .7 5.8 1.9l34-34C293.1 5.7 278.8 0 264 0c-15.4 0-30.1 6.1-41 17L17 223C6.1 233.9 0 248.6 0 264c0 14.8 5.7 29.1 15.8 39.8zM447.6 143.6l-304 304c-21.9 21.9-57.3 21.9-79.2 0s-21.9-57.3 0-79.2l304-304c21.9-21.9 57.3-21.9 79.2 0s21.9 57.3 0 79.2zm33.9 33.9c40.6-40.6 40.6-106.5 0-147.1s-106.5-40.6-147.1 0l-304 304c-40.6 40.6-40.6 106.5 0 147.1s106.5 40.6 147.1 0l304-304zm-70.2-38.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0c-7 7-12.5 10.8-17 13.1c-4.5 2.3-8.5 3.4-13.6 4.7l-1.5 .4c-4.7 1.2-10.9 2.7-17.3 5.6c-7.4 3.4-14.8 8.4-22.7 16.3c-16.2 16.2-20.5 30.7-24 42.7l0 .1c-3.1 10.6-5.5 18.8-16 29.2c-5.5 5.5-9.5 7.8-12.4 9.1c-3 1.3-5.8 1.7-10.6 2.4l-.4 .1c-4.6 .6-10.9 1.6-18 4.5c-7.4 3.1-14.8 8.1-22.6 15.9c-16.2 16.2-20.5 30.7-24 42.7l0 .1c-3.1 10.6-5.5 18.8-16 29.2c-5.5 5.5-9.7 8.1-13.3 9.8c-3.6 1.6-6.9 2.5-12 3.7l-1.2 .3c-5.6 1.4-12.6 3.2-20.4 7.3c-7.9 4-16 9.9-25 18.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0c7-7 12.5-10.8 17-13.1c4.5-2.3 8.5-3.4 13.6-4.7l1.5-.4 0 0c4.7-1.2 10.9-2.7 17.3-5.6c7.4-3.4 14.8-8.4 22.7-16.3c16.2-16.2 20.5-30.7 24-42.7l0-.1c3.1-10.6 5.5-18.8 16-29.2c5.5-5.5 9.5-7.8 12.4-9.1c3-1.3 5.8-1.7 10.6-2.4l.4-.1c4.6-.6 10.9-1.6 18-4.5c7.4-3.1 14.8-8.1 22.6-15.9c16.2-16.2 20.5-30.7 24-42.7l0-.1c3.1-10.6 5.5-18.8 16-29.2c5.5-5.5 9.7-8.1 13.3-9.8c3.6-1.6 6.9-2.5 12-3.7l1.2-.3c5.6-1.4 12.6-3.2 20.4-7.3c7.9-4 16-9.9 25-18.9z"/>
      </Svg>
    ]}
  />
)
```

### Futher examples

Please see the examples folder or storybook https://marcuzgabriel.github.io/react-native-reanimated-confetti
