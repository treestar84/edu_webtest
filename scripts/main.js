
export function initWordLearning(words) {
  const container = document.getElementById("word-container");
  words.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow p-4 cursor-pointer";
    card.innerHTML = `
      <img src="${item.image_url}" alt="${item.kr}" class="w-full h-40 object-contain mb-2">
      <div class="text-lg font-semibold">${item.kr} / ${item.en}</div>
    `;
    card.addEventListener("click", () => {
      const audioKR = new Audio(item.kr_audio_url);
      const audioEN = new Audio(item.en_audio_url);
      audioKR.play();
      audioKR.onended = () => audioEN.play();
    });
    container.appendChild(card);
  });
}
