export const getIconColor = (type) => {
  return `${
    type === 'primary'
      ? '#f2f2f3'
      : type === 'secondary'
        ? '#8585ad'
        : 'error'
    }`;
};