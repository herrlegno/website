export const normalize = (value: number, min: number, max: number) =>
  (value - min) / (max - min);

export const denormalize = (value: number, min: number, max: number) =>
  value * (max - min) + min;
