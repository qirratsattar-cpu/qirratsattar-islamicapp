const questions = [
  { q: "Who was the first Caliph after Prophet Muhammad (PBUH)?", options: ["Abu Bakr", "Umar", "Ali", "Usman"], answer: "Abu Bakr" },
  { q: "Which day is Friday in Islam?", options: ["Saturday", "Friday", "Sunday", "Thursday"], answer: "Friday" },
  { q: "The Quran has how many Surahs?", options: ["114", "120", "100", "90"], answer: "114" },
  { q: "Fasting in Ramadan is obligatory for?", options: ["Everyone", "Muslims", "Children", "Non-Muslims"], answer: "Muslims" },
  { q: "The first revelation was given to?", options: ["Ali", "Abu Bakr", "Prophet Muhammad (PBUH)", "Umar"], answer: "Prophet Muhammad (PBUH)" },
  { q: "The month of Hajj is?", options: ["Ramadan", "Shawwal", "Dhul-Hijjah", "Muharram"], answer: "Dhul-Hijjah" },
  { q: "Which angel brought revelation to Prophet Muhammad (PBUH)?", options: ["Angel Mikail", "Angel Jibreel", "Angel Israfil", "Angel Azrael"], answer: "Angel Jibreel" },
  { q: "Zakat is mandatory for Muslims who?", options: ["Are rich", "Are poor", "Are children", "Are elderly"], answer: "Are rich" },
  { q: "The Quran was revealed in which language?", options: ["Arabic", "Urdu", "Persian", "English"], answer: "Arabic" },
  { q: "The Hijra marks the migration to which city?", options: ["Mecca", "Medina", "Jerusalem", "Ta’if"], answer: "Medina" },
  { q: "Prayer in Islam is offered how many times a day?", options: ["3", "4", "5", "6"], answer: "5" },
  { q: "Which Surah is the longest in the Quran?", options: ["Al-Fatiha", "Al-Baqarah", "Al-Ikhlas", "An-Nas"], answer: "Al-Baqarah" },
  { q: "Which prophet built the Kaaba?", options: ["Prophet Musa", "Prophet Ibrahim", "Prophet Isa", "Prophet Nuh"], answer: "Prophet Ibrahim" },
  { q: "Which is the last month of Islamic calendar?", options: ["Ramadan", "Shawwal", "Dhul-Hijjah", "Muharram"], answer: "Dhul-Hijjah" },
  { q: "The Night of Decree is known as?", options: ["Lailat-ul-Qadr", "Lailat-ul-Miraj", "Lailat-ul-Bara’ah", "Lailat-ul-Isra"], answer: "Lailat-ul-Qadr" },
  { q: "Which day do Muslims celebrate Eid-ul-Fitr?", options: ["1st Ramadan", "1st Shawwal", "10th Dhul-Hijjah", "27th Rajab"], answer: "1st Shawwal" },
  { q: "Who led Muslims in the Battle of Badr?", options: ["Abu Bakr", "Umar", "Prophet Muhammad (PBUH)", "Ali"], answer: "Prophet Muhammad (PBUH)" },
  { q: "The Quran has how many verses (approx)?", options: ["6200", "6236", "6666", "6000"], answer: "6236" },
  { q: "The Hijri calendar started in which year?", options: ["622 CE", "610 CE", "632 CE", "600 CE"], answer: "622 CE" },
  { q: "Which Surah begins with 'Alhamdulillah'?", options: ["Al-Fatiha", "Al-Baqarah", "Al-Ikhlas", "Al-Ma'idah"], answer: "Al-Fatiha" },
  { q: "Who compiled the Quran in written form?", options: ["Abu Bakr", "Umar", "Uthman", "Ali"], answer: "Uthman" },
  { q: "Prayer facing which direction?", options: ["Mecca", "Medina", "Jerusalem", "Ta’if"], answer: "Mecca" },
  { q: "The pillar of Hajj involves?", options: ["Fasting", "Prayer", "Tawaf and Sa’i", "Charity"], answer: "Tawaf and Sa’i" },
  { q: "Which prophet was swallowed by a whale?", options: ["Prophet Musa", "Prophet Yunus", "Prophet Isa", "Prophet Nuh"], answer: "Prophet Yunus" },
  { q: "Which Surah is called heart of the Quran?", options: ["Al-Fatiha", "Ya-Sin", "Al-Ikhlas", "Al-Baqarah"], answer: "Ya-Sin" },
  { q: "Muslims fast in Ramadan from?", options: ["Fajr to Maghrib", "Dawn to Dusk", "Sunrise to Sunset", "Anytime"], answer: "Fajr to Maghrib" },
  { q: "Who was the mother of Prophet Isa (AS)?", options: ["Maryam", "Fatima", "Aisha", "Khadija"], answer: "Maryam" },
  { q: "Jihad in Islam primarily means?", options: ["War", "Struggle", "Fasting", "Pilgrimage"], answer: "Struggle" },
  { q: "Which Surah is about purity?", options: ["Al-Fatiha", "Al-Ikhlas", "Al-Ma’un", "An-Nur"], answer: "An-Nur" },
  { q: "Who was Prophet Muhammad (PBUH)'s first wife?", options: ["Aisha", "Khadija", "Fatima", "Hafsa"], answer: "Khadija" },
  { q: "Islam means?", options: ["Peace", "Submission to Allah", "Faith", "Charity"], answer: "Submission to Allah" },
  { q: "Which night is celebrated as Isra and Miraj?", options: ["27th Rajab", "15th Shaban", "1st Ramadan", "10th Muharram"], answer: "27th Rajab" },
  { q: "The last prophet in Islam?", options: ["Prophet Isa", "Prophet Musa", "Prophet Muhammad (PBUH)", "Prophet Nuh"], answer: "Prophet Muhammad (PBUH)" },
  { q: "Which Surah emphasizes charity?", options: ["Al-Baqarah", "Al-Ma’un", "Al-Ikhlas", "Al-Falaq"], answer: "Al-Ma’un" },
  { q: "Which is the first month of Islamic calendar?", options: ["Muharram", "Safar", "Ramadan", "Shawwal"], answer: "Muharram" },
  { q: "Zakat is paid on?", options: ["Income", "Wealth", "Food", "Clothes"], answer: "Wealth" },
  { q: "Which prophet built the Ark?", options: ["Prophet Nuh", "Prophet Musa", "Prophet Isa", "Prophet Ibrahim"], answer: "Prophet Nuh" },
  { q: "Which battle is known as the turning point for Muslims?", options: ["Badr", "Uhud", "Khandaq", "Tabuk"], answer: "Badr" },
  { q: "The Quran is divided into?", options: ["Chapters", "Sections", "Surahs", "Verses"], answer: "Surahs" },
  { q: "How many daily prayers are obligatory?", options: ["3", "5", "4", "6"], answer: "5" },
  { q: "Who gave the final sermon of Hajj?", options: ["Umar", "Abu Bakr", "Prophet Muhammad (PBUH)", "Ali"], answer: "Prophet Muhammad (PBUH)" },
  { q: "Which Surah is known as the chapter of purity?", options: ["An-Nur", "Al-Fatiha", "Al-Ikhlas", "Al-Baqarah"], answer: "An-Nur" },
  { q: "The Islamic declaration of faith is called?", options: ["Zakat", "Shahada", "Salah", "Hajj"], answer: "Shahada" },
  { q: "Which prophet received the Ten Commandments?", options: ["Prophet Musa", "Prophet Isa", "Prophet Nuh", "Prophet Muhammad"], answer: "Prophet Musa" },
  { q: "Eid-ul-Adha is celebrated on?", options: ["1st Shawwal", "10th Dhul-Hijjah", "27th Rajab", "15th Shaban"], answer: "10th Dhul-Hijjah" },
  { q: "Which prophet was known for patience?", options: ["Prophet Ayyub", "Prophet Yunus", "Prophet Musa", "Prophet Isa"], answer: "Prophet Ayyub" },
  { q: "The Quran was revealed over how many years?", options: ["10", "20", "23", "30"], answer: "23" },
  { q: "Which Surah is recited in every prayer?", options: ["Al-Fatiha", "Al-Ikhlas", "Al-Falaq", "An-Nas"], answer: "Al-Fatiha" },
  { q: "Which prophet’s story involves a whale?", options: ["Prophet Yunus", "Prophet Musa", "Prophet Isa", "Prophet Nuh"], answer: "Prophet Yunus" },
  { q: "Islam emphasizes?", options: ["Faith, Prayer, Charity, Fasting", "Only Charity", "Only Fasting", "Only Prayer"], answer: "Faith, Prayer, Charity, Fasting" },
  { q: "The Quran was revealed in which month?", options: ["Ramadan", "Shawwal", "Dhul-Hijjah", "Muharram"], answer: "Ramadan" },
  { q: "Who is called 'Seal of the Prophets'?", options: ["Prophet Isa", "Prophet Musa", "Prophet Muhammad (PBUH)", "Prophet Nuh"], answer: "Prophet Muhammad (PBUH)" },
  { q: "Muslims face which city while praying?", options: ["Medina", "Mecca", "Jerusalem", "Ta’if"], answer: "Mecca" },
  { q: "Islamic calendar is also called?", options: ["Hijri Calendar", "Gregorian Calendar", "Solar Calendar", "Lunar Calendar"], answer: "Hijri Calendar" },
];

let shuffledQuestions = questions.sort(() => Math.random() - 0.5);
let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");

let totalTime = 10 * 60;
let timer = setInterval(() => {
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  timerEl.innerText = `Time: ${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  totalTime--;
  if(totalTime < 0){
    clearInterval(timer);
    showResult();
  }
}, 1000);

function showQuestion() {
  const q = shuffledQuestions[current];
  questionEl.innerText = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-primary mb-2";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(btn, correct) {
  Array.from(optionsEl.children).forEach(b => b.disabled = true);
  if(btn.innerText === correct){
    btn.classList.remove("btn-outline-primary");
    btn.classList.add("btn-success");
    score++;
  } else {
    btn.classList.remove("btn-outline-primary");
    btn.classList.add("btn-danger");
    Array.from(optionsEl.children).forEach(b => {
      if(b.innerText === correct) b.classList.add("btn-success");
    });
  }
}

nextBtn.addEventListener("click", () => {
  current++;
  if(current >= shuffledQuestions.length){
    showResult();
  } else {
    showQuestion();
  }
});

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.innerHTML = `<h3>Your Score: ${score} / ${shuffledQuestions.length}</h3>`;
}

showQuestion(); 
