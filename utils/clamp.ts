const clamp = (min: number, max: number, value: number): number => {
  return Math.min(Math.max(value, min), max);
};

export default clamp;
