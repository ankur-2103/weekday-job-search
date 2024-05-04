export function generateRandomNumber() {
  const randomFloat = Math.random();
  const randomNumber = Math.floor(randomFloat * 10) + 1;
  return randomNumber;
}

export function capitalizeWords(str:string) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  const capitalizedStr = capitalizedWords.join(" ");
  return capitalizedStr;
}
