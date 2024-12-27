// 1️⃣ Парне чи непарне число
// 🔢 Напишіть програму, яка визначає, чи число парне або непарне.  
// Вхід: Число (наприклад, 4)
// Вихід:
// "Число парне."
// "Число непарне."

x  = 7;
if(x % 2 === 0){
    console.log('число парне')
}
else{
    console.log('число не парне ')
} ;


// 2️⃣ Привітання за часом
// ⏰ Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
// Вхід: Година (наприклад, 15)
// Вихід:
// Якщо год < 12: "Доброго ранку!"
// Якщо год 12–18: "Доброго дня!"
// Якщо год > 18: "Доброго вечора!"


 time = 9;
 if(time < 12){
    console.log("Доброго ранку!")
 }
 if(time >= 12 && time <=18){
    console.log("Доброго дня!")
 }
 if(time > 18)
 {
    console.log("Доброго вечора!")
} 

// 3️⃣ Перевірка оцінки
// 📚 Якщо бал >= 50 — "Тест складено". Якщо < 50 — "Тест не складено".

score = 34;
if(score >= 50){
    console.log("Тест складено")
}
else{
    console.log('Тест не складено')
}


// 4️⃣ Вік для голосування
// 🗳 Напишіть програму, яка перевіряє, чи можна користувачу голосувати.
// Вхід: Вік (наприклад, 17)
// Вихід:
// Якщо >= 18: "Ви можете голосувати."
// Інакше: "Ви ще не можете голосувати."

age = 5;
if(age >= 18){
    console.log("Ви можете голосувати.")
}
else{
    console.log("Ви ще не можете голосувати.")
}



// Порівняння чисел
// ⚖️ Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
// Вхід: Два числа (наприклад, 8 і 10)
// Вихід:
// "Перше число більше."
// "Друге число більше."
// "Числа рівні."

x = 4;
y = 7;
if(x>y){
    console.log("Перше число більше.")
}
if(x<y){
    console.log("Друге число більше")
}
if(x===y){
    console.log("Числа рівні.")
};


// 6️⃣ Дорога і світлофор
// 🚦 Якщо зелений — переходьте. Жовтий — підготуйтеся. Червоний — зачекайте.

color = "червоний";
if(color === "зелений") {
    console.log("переходьте")
}
if(color === "жовтий") {
    console.log("підготуйтеся")
}
if(color === "червоний"){
    console.log("зачекайте")
};


// Визначення типу числа
// ➕➖ Напишіть програму, яка визначає, чи число додатнє, від’ємне або дорівнює нулю.
// Вхід: Число (наприклад, -5)
// Вихід:
// "Число додатнє."
// "Число від’ємне."
// "Число дорівнює нулю."

digit = 88;

if(digit > 0){
    console.log("число додатнє")
}
if(digit < 0){
    console.log("число від’ємне")
}
if(digit === 0){
    console.log("Число дорівнює нулю.")
};