export const randomNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const randomElementOfArray = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

export const randomColor = (colors: Array<string>): string => {
  return colors[Math.round(randomNumber(0, colors.length - 1))];
};
