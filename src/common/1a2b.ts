export const game1A2B = (guess: string, answer: string) => {
  const guessString = guess.toString().split('');

  const answerSet = new Set([...answer]);

  let A = 0, B = 0;

  for(const [index, value] of guessString.entries()) {
    if (guess[index] === answer[index]) {
      A +=1;
    } else if (answerSet.has(value)) {
      B +=1;
    }
  }

  return {A, B};
};
