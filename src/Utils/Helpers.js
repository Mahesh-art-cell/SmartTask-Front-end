
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const truncate = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};
