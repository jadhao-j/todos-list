# 😇 Karma-Kaand React App

"**Jab bhi kuch karma karne jata hu, kaand ho jata hai!**" – यही इस ऐप का मूल विचार है।

यह एक React प्रोजेक्ट है जो हमारे जीवन के अच्छे कर्मों और उसके बाद घटे कांडों को दिखाता है। जब भी कोई "Karo" बटन दबाता है, उस कर्म से जुड़ा कांड एक alert popup में दिखाई देता है।


### All Karma Cards

![Karma Screenshot](./Screenshot%202025-05-17%20185315.png)

### Kaand after pressing "Karo"

![Kaand Alert Screenshot](./Screenshot%202025-05-17%20185348.png)

---

## 🛠️ How it works

- `App.js` – Contains Karma list state.
- `Karma.js` – Maps and displays all Karma.
- `Kaand.js` – Shows each Karma with buttons.
  - ✅ `Karo` – shows Kaand via `alert()`
  - ❌ `Hatao` – deletes the Karma from list

Each Karma has a matching Kaand, shown when the "Karo" button is clicked.

---

## 🔧 Setup

```bash
npm install
npm start
