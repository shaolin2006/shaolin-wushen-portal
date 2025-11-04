const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Simple dataset de preguntas y respuestas en español
const qa = [
  { q: /niñ|niños|ninos|infantil|kids/i, a: "Las clases para niños son los sábados de 10:00 a 11:00." },
  { q: /sanda|sparring/i, a: "Las clases de Sanda son lun/mié/vie de 18:00 a 19:30." },
  { q: /tai chi|tai-chi/i, a: "Tai Chi es martes y jueves de 17:00 a 18:00." },
  { q: /precio|coste|cuota|mensualidad|precio|tarifa/i, a: "La cuota mensual es de 40€. Hay un 10% de descuento para familias." },
  { q: /ubicaci|donde|direcci|dirección|dónde/i, a: "Entrenamos en Calle Galicia 12, Getafe." }
];

function addMessage(text, cls){
  const div = document.createElement('div');
  div.classList.add('msg', cls);
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function botReply(text){
  // naive matcher
  for (let item of qa){
    if (item.q.test(text)) {
      return item.a;
    }
  }
  return "Lo siento, no conozco la respuesta. Puedes contactarnos en info@kungfu.example";
}

sendBtn.addEventListener('click', () => {
  const userText = inputEl.value.trim();
  if (!userText) return;
  addMessage(userText, 'user');
  inputEl.value = '';
  setTimeout(() => {
    const reply = botReply(userText);
    addMessage(reply, 'bot');
  }, 600);
});

// allow Enter key
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
