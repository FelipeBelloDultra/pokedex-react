export function formatWord(word: string): string {
  const newWord = word[0].toUpperCase() + word.substring(1);

  return newWord.replace('-', ' ');
}
