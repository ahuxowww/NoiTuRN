import data from '../assets/dictionary/outwords.json';
import dataArray from '../assets/dictionary/outdictionary.json';

export const getRandomString = () => {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
};

export const capitalizeFirstLetter = (str: string) => {
  if (str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const checkCorrectAnswer = (str: string, aws: string): boolean => {
  if (!str || aws.length === 0) {
    return false;
  }

  const lowerString = str.toLowerCase();
  const awsLower = aws?.toLowerCase();
  const dataArrayForString = dataArray[lowerString];

  if (!dataArrayForString || !Array.isArray(dataArrayForString)) {
    return false;
  }
  return dataArrayForString.includes(awsLower);
};
