const form = document.querySelector("#contact-form");
const note = document.querySelector("#form-note");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name")?.toString().trim() || "未入力";
  const topic = data.get("topic")?.toString() || "お問い合わせ";
  note.textContent = `${name} 様の「${topic}」として確認しました。本番版ではここから正式送信に接続します。`;
});
