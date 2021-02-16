const isQuestion = (utterance) => utterance.endsWith("?");

const isUpperCase = (utterance) => utterance === utterance.toUpperCase();

// RegExp('[A-Z]').test(utterance) -> /[A-Z]/.test(utterance)
const isUpperCaseChar = (utterance) => isUpperCase(utterance) && /[A-Z]/.test(utterance);

export const hey = (message) => {
  message = message.trim();

    switch(true){
      case (message === ""):
        return "Fine. Be that way!";
      case (isQuestion(message) && isUpperCaseChar(message)):
        return "Calm down, I know what I'm doing!";
      case (isQuestion(message)):
        return "Sure.";
      case (isUpperCaseChar(message)):
        return "Whoa, chill out!";
      default:
        return "Whatever.";
    }
};
