# 🎫 HelpDesk App

Sistema de chamados (Helpdesk) fullstack desenvolvido para portfólio.

## 🚀 Tecnologias

**Frontend**
- Next.js 16 + TypeScript
- Tailwind CSS
- React Hooks (useState, useEffect)

**Backend**
- Node.js + Express
- JWT (autenticação)
- Prisma ORM
- PostgreSQL

## ✅ Funcionalidades

- Autenticação com JWT
- Dashboard com métricas de chamados
- Listagem e criação de chamados
- Badge de status (Aberto, Em andamento, Fechado)
- Proteção de rotas
- Logout

## ⚙️ Como rodar localmente

### Backend
```bash
cd helpdesk-api
npm install
# Configure o .env com DATABASE_URL e JWT_SECRET
npx prisma migrate dev
npx ts-node src/seed.ts
npm run dev
```

### Frontend
```bash
cd helpdesk-app
npm install
npm run dev
```

Acesse `http://localhost:3000`

**Credenciais de teste:**
- Email: `tecnico@helpdesk.com`
- Senha: `123456`