export function styleWrap(text) {
  return `🧠 GPT-ревью говорит:\n\n> ${text.replace(/\n/g, '\n> ')}`;
}
