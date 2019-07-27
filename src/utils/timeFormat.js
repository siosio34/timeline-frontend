export const getValidTime = timestamp => {
  if (timestamp) {
    return timestamp.split('T')[0];
  }
  return '';
};
