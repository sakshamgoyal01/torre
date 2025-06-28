# 🔍 Torre Talent Explorer

A full-stack, interactive clone of the [Torre People Search](https://torre.ai/search/people-name) tool, built as part of the Torre Engineering Technical Test.

This application allows you to search Torre profiles, view professional details, and toggle between light and dark themes — with a beautiful UI, 3D effects, and real-time API integration using a custom proxy server.

---

## 🚀 Features

- 🌐 Real-time Torre people search (via `/entities/_searchStream`)
- 👤 Click-to-view detailed profiles (via `/genome/bios/:username`)
- 🌗 Dark / Light mode toggle
- 🎨 3D parallax tilt on profile cards
- 🧠 Framer Motion animations and tilt effects
- ⚙️ Backend proxy server to bypass CORS
- ⚡ Vite + React + Tailwind + Express stack

---

## 🏗️ Tech Stack

| Frontend      | Backend           | UI / Animations         |
| ------------- | ----------------- | ----------------------- |
| React + Vite  | Node.js + Express | Tailwind, Framer Motion |
| Parallax Tilt | Axios Proxy       | Dark Mode Support       |

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/torre-talent-explorer.git
cd torre-talent-explorer
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Proxy Server

```bash
cd server
npm install
node index.js
```

> The proxy runs at: `http://localhost:4000`

### 4. Start Frontend App

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure

```
📦 torre-talent-explorer/
├── public/
├── src/
│   ├── pages/
│   │   ├── SearchPage.jsx
│   │   └── ProfileDetail.jsx
│   ├── services/
│   │   └── torreAPI.js
│   ├── hooks/
│   │   └── useDarkMode.js
│   └── main.jsx
├── server/
│   └── index.js        ← Proxy server (Express)
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🧪 API Endpoints Used

- `POST /entities/_searchStream`
  → Search profiles based on name (via proxy)

- `GET /genome/bios/:username`
  → Get user’s genome (bio + strengths + skills)

---

## 🧠 AI & Prompt Usage Log

| Purpose                           | Tool    | Model  | Prompt                                                                                                                                                |
| --------------------------------- | ------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Build SearchPage.jsx UI           | ChatGPT | GPT-4o | “Build a beautiful responsive UI for searching Torre profiles using their stream API. Include a search bar, results list with images, and dark mode.” |
| Add 3D animation to profile cards | ChatGPT | GPT-4o | “Add Parallax Tilt to cards in React for hover 3D effect.”                                                                                            |
| Debug CORS issues on frontend     | ChatGPT | GPT-4o | “Torre stream API is blocked by CORS. How can I build a proxy using Express to call it?”                                                              |
| Animate cards on entry            | ChatGPT | GPT-4o | “Use Framer Motion to stagger animate a list of profile cards on render.”                                                                             |

> All prompts used in development are stored in `/docs/ai-prompts.md` and committed to Git history.

---

## 📸 Screenshots

![Search Page](./docs/screenshot-search.png)
![Profile View](./docs/screenshot-profile.png)
![Dark Mode](./docs/screenshot-darkmode.png)

---

## 📽️ Demo Video (5 mins)

📺 [Click to Watch](https://drive.google.com/your-demo-video-link)

---

## 🔐 Author

**Saksham Goyal**
📧 [sakshamgoyal1974@gmail.com](mailto:sakshamgoyal1974@gmail.com)
🌐 [LinkedIn](https://www.linkedin.com/in/saksham-goyal-ab3a1817b/)
🐙 [GitHub](https://github.com/sakshamgoyal01)

---

## ✅ Deliverables

- ✅ GitHub Repo with commits and AI prompts
- ✅ Hosted Frontend Link (Vercel/Netlify optional)
- ✅ 5-min Demo Walkthrough Video
- ✅ README with instructions and API usage
- ✅ Feature-rich, scalable architecture

---

```

---

## 🧰 Need Help With:

- ✅ Auto-deploy to Vercel or Netlify?
- ✅ Preparing the `.zip` of the entire project?
- ✅ Final walkthrough or demo script?

Just say the word — I’ll help finish and polish the final delivery.
```
