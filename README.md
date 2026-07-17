# W Wallet Frontend

Aplicación web desarrollada con React para la gestión de finanzas personales. Permite administrar ingresos, gastos, categorías y metas de ahorro desde una interfaz moderna, intuitiva y responsive.

---

## Características

- Autenticación mediante JWT (Access Token + Refresh Token).
- Dashboard con resumen financiero.
- Gestión de ingresos.
- Gestión de gastos.
- Administración de categorías.
- Creación y seguimiento de metas de ahorro.
- Registro de aportes a cada meta.
- Gestión del perfil del usuario.
- Interfaz responsive para escritorio y dispositivos móviles.

---

## Tecnologías

### Frontend

- React
- Vite
- React Router DOM
- TanStack Query
- React Hook Form
- Zod
- Tailwind CSS
- Heroicons
- React Hot Toast

---

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/wagnerwilliam/w_wallet_web.git
```

### Entrar al proyecto

```bash
cd w_wallet_web
```

### Instalar dependencias

```bash
npm install
```

### Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

```env
VITE_BACKEND_URL=http://localhost:3000/
VITE_APP_CLIENT_KEY=tu_client_key
```

### Ejecutar el proyecto

```bash
npm run dev
```

---

## Estructura del proyecto

```text
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
└── main.jsx
```

---

## Autenticación

La aplicación utiliza autenticación basada en JWT.

- El Access Token se almacena en `localStorage`.
- El Refresh Token se almacena en una cookie HTTP Only.
- Cuando el Access Token expira, el frontend solicita automáticamente uno nuevo al backend utilizando el Refresh Token.
- Si el Refresh Token también ha expirado o no es válido, el usuario deberá iniciar sesión nuevamente.

---

## Backend

Repositorio del backend:

https://github.com/wagnerwilliam/w_wallet_backend

---

## Demo

https://w-wallet-web.vercel.app/

---

## Autor

William Wagner
