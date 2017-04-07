
const LETTER_CHARS = {
  english: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
const NUMERIC_CHARS = '1234567890';
const SYMBOL_CHARS = '"\',./-_=+?!@£$%&;:|\()[]{}~`<> ';

export const UPDATE_SPEED = 1;

export const charactersArray = (language='english') => {
  const characterString = LETTER_CHARS[language] + NUMERIC_CHARS + SYMBOL_CHARS;
  return characterString.split('');
}
