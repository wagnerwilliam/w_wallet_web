# 💰 W Wallet - Frontend

Frontend de **W Wallet**, una aplicación web desarrollada para la gestión de finanzas personales.

Permite administrar ingresos, gastos, categorías y metas de ahorro mediante una interfaz moderna, intuitiva y completamente responsive.

---

## 🚀 Demo

🌐 https://w-wallet-web.vercel.app/

---

## 📸 Características

- 🔐 Autenticación mediante JWT.
- 🔄 Renovación automática del Access Token mediante Refresh Token.
- 📊 Dashboard financiero.
- 💵 Gestión de ingresos.
- 💸 Gestión de gastos.
- 🗂 Administración de categorías.
- 🎯 Creación y seguimiento de metas de ahorro.
- 💰 Registro de aportes a las metas.
- 👤 Gestión del perfil de usuario.
- 📱 Diseño responsive.

---

## 🛠 Tecnologías

- React 19
- React Router DOM
- TanStack Query
- React Hook Form
- Zod
- Tailwind CSS
- Heroicons
- React Hot Toast
- Vite

---

## 📂 Estructura del proyecto

```
src/
│
├── assets/
├── components/
├── context/
├── custom_hooks/
├── layouts/
├── pages/
├── queries/
├── services/
├── utils/
└── App.jsx
```

---

## ⚙️ Instalación

Clonar el repositorio

```bash
git clone https://github.com/wagnerwilliam/w_wallet_web.git
```

Entrar al proyecto

```bash
cd w_wallet_web
```

Instalar dependencias

```bash
npm install
```

---

## 🔧 Variables de entorno

Crear un archivo **.env** en la raíz del proyecto.

```env
VITE_BACKEND_URL=http://localhost:3000/
VITE_APP_CLIENT_KEY=TU_CLIENT_KEY
```

---

## ▶️ Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## 📦 Build de producción

```bash
npm run build
```

Previsualizar la build:

```bash
npm run preview
```

---

## 🔒 Autenticación

La aplicación utiliza un sistema basado en:

- Access Token (JWT)
- Refresh Token almacenado en cookies HttpOnly
- Renovación automática del Access Token cuando expira
- Cierre de sesión seguro invalidando el Refresh Token

---

## 📁 Backend

Repositorio del backend:

https://github.com/wagnerwilliam/w_wallet_backend

---

## 👨‍💻 Autor

**William Wagner**

Backend Engineer

GitHub

https://github.com/wagnerwilliam

LinkedIn

https://www.linkedin.com/in/wagnerwilliam

---

## 📄 Licencia

Proyecto desarrollado con fines educativos y de demostración.
