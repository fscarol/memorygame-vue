const emojis_base = [
    "🤓", "😎", "🤔", "🤪", "😋", "🙃", "🤣", "🤥",
];

let emojis = [];

function duplicate_emojis(element, index, array) {
    emojis.push(element);
    emojis.push(element);
}

emojis_base.forEach(duplicate_emojis);

emojis = emojis
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

const game = new Vue({
    el: '#game',
    data: {
        emojis: emojis,
        punctuation: "Pontos",
    },
});