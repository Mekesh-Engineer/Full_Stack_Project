# ⚡ GridX: AI-IoT Integrated Smart Grid System



## 🔹 One-Line Summary

A modular full-stack smart grid management system integrating AI, IoT, billing, and control to modernize energy infrastructure.

---

## 📑 Table of Contents

* [🔍 Project Overview](#-project-overview)
* [🧱 Tech Stack](#-tech-stack)
* [📁 Folder Structure](#-folder-structure)
* [🚀 Features](#-features)
* [🖥️ Screenshots / GIFs](#️-screenshots--gifs)
* [⚙️ Setup Instructions](#️-setup-instructions)
* [🔒 Authentication & Access Control](#-authentication--access-control)
* [📡 IoT Integration](#-iot-integration)
* [🤖 AI Module APIs](#-ai-module-apis)
* [🧪 Testing](#-testing)
* [☁️ Deployment](#-deployment)
* [📄 Documentation](#-documentation)
* [🤝 Contributing](#-contributing)
* [📜 License](#-license)
* [📧 Contact / Credits](#-contact--credits)

---

## 🔍 Project Overview

**GridX** is a smart, scalable grid management platform for monitoring, forecasting, controlling, and transacting energy in real-time. Designed with modularity, security, and extensibility in mind, GridX unites AI, IoT, and energy systems under one unified dashboard.

### 🔑 Key Features

* Real-time Grid Monitoring Dashboard
* AI-based Load Forecasting and Fault Detection
* Smart Metering and Dynamic Billing
* SCADA-style Load Control and Simulation
* Predictive Maintenance Alerts
* Role-based Admin/Operator/User Access
* Optional Blockchain-based P2P Energy Trading

---

## 🧱 Tech Stack

| Layer      | Tech                                          |
| ---------- | --------------------------------------------- |
| Frontend   | HTML, CSS, JavaScript (Bootstrap 5, Chart.js) |
| Backend    | Node.js, Express.js                           |
| Database   | MongoDB (MongoDB Atlas)                       |
| AI Modules | Python, Flask, scikit-learn, TensorFlow       |
| IoT        | ESP32, MQTT (Mosquitto/Firebase RTDB)         |
| Auth       | JWT/Firebase Auth                             |
| Deployment | Render, Vercel, PythonAnywhere                |

---

## 📁 Folder Structure

```
GridX/
├── frontend/            # UI Templates, JS, CSS
│   ├── dashboard.html
│   └── assets/
├── backend/             # Node.js Server
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
├── ai-models/           # Python Flask APIs
│   ├── load_forecast.py
│   ├── fault_detect.py
│   └── app.py
├── iot/                 # ESP32 Code, MQTT Handlers
│   └── esp32_firmware.ino
├── public/              # Static Files
├── .env.example         # Sample Environment Config
├── README.md
└── Dockerfile           # (Optional for deployment)
```

---

## 🚀 Features

* 📊 Live voltage/current/power charts
* 💵 Meter-wise usage + real-time billing
* 🌞 Renewable energy share & visual input (pie chart)
* 🤖 AI Forecasting & Fault Detection (ML models)
* 🛠️ Predictive maintenance table (health status)
* 🎛️ SCADA-like controls (toggle relays/load)
* 🔁 Blockchain-powered P2P Trading (Web3.js + Ganache)

---

## 🖥️ Screenshots / GIFs

> *(Add UI images of dashboard, billing, maintenance cards, etc.)*

---

## ⚙️ Setup Instructions

### 🧰 Prerequisites

* Node.js v18+
* Python 3.8+
* MongoDB Atlas account
* MQTT Broker (Mosquitto or Firebase RTDB)

### 🔧 Configuration

1. Copy `.env.example` → `.env`
2. Set MongoDB URI, JWT\_SECRET, MQTT\_BROKER\_URL

### 🔌 Run Locally

```bash
# Backend
cd backend
npm install
node server.js

# AI Models
cd ai-models
pip install -r requirements.txt
python app.py

# Frontend (static)
Open frontend/dashboard.html in browser
```

---

## 🔒 Authentication & Access Control

* JWT-based login system
* Roles: Admin, Operator, User
* Role-based route protection on backend

---

## 📡 IoT Integration

* ESP32 reads voltage/current & publishes over MQTT
* MQTT.js subscriber in backend
* Firebase RTDB optional as alternative transport layer

---

## 🤖 AI Module APIs

| Endpoint       | Method | Input                    | Output               |
| -------------- | ------ | ------------------------ | -------------------- |
| /predict/load  | POST   | { date: "2025-06-22" }   | { forecast: \[...] } |
| /predict/fault | POST   | { sensor\_data: \[...] } | { status: "normal" } |

---

## 🧪 Testing

* API testing via Postman collections
* ESP32 test scripts
* Flask unit tests (PyTest)

---

## ☁️ Deployment

| Component | Platform               |
| --------- | ---------------------- |
| Backend   | Render / Heroku        |
| Frontend  | Netlify / GitHub Pages |
| AI Models | PythonAnywhere         |
| Database  | MongoDB Atlas          |

---

## 📄 Documentation

* 📊 Presentation PDF: \[Link to your slide deck/report]
* 📐 Circuit Diagrams: \[Add images or schematic links]

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature-X`
3. Commit your changes: `git commit -m 'Add feature X'`
4. Push to the branch: `git push origin feature-X`
5. Open a pull request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact / Credits

**Team GridX**
📧 [gridx.energy@protonmail.com](mailto:gridx.energy@protonmail.com)
🔗 [LinkedIn](https://linkedin.com) • [Twitter](https://twitter.com)

> Designed as part of a Third Year Project / SIH Prototype Initiative
