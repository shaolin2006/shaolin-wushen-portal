// Simulación de usuarios registrados
const users = [
  { email: "alumno1@wushen.com", password: "1234", name: "Carlos" },
  { email: "alumna2@wushen.com", password: "kungfu", name: "Laura" }
];

const loginForm = document.getElementById("login-form");
const loginSection = document.getElementById("login-section");
const studentArea = document.getElementById("student-area");
const studentName = document.getElementById("student-name");
const logoutBtn = document.getElementById("logout-btn");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    loginSection.style.display = "none";
    studentArea.style.display = "block";
    studentName.textContent = user.name;
  } else {
    alert("Credenciales incorrectas. Por favor, verifica tus datos.");
  }
});

logoutBtn.addEventListener("click", () => {
  studentArea.style.display = "none";
  loginSection.style.display = "block";
  loginForm.reset();
});
