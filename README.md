# AeroClima — Frontend

Vue 3 + TypeScript + Vite, Vue Router, Vitest, lint e formatação. Página inicial com verificação da API e do banco. Funcionalidades de viagens serão construídas depois.

**[Guia completo e explicação de cada arquivo](https://github.com/LucasPivovar/aeroclima-backend/blob/main/docs/GUIA.md).**

## Rodar localmente

Clone este repositório ao lado de [aeroclima-backend](https://github.com/LucasPivovar/aeroclima-backend). Na pasta do backend, copie `.env.example` para `.env` uma única vez e execute:

```powershell
docker compose up --build -d
```

Abra http://localhost:5173. O único `.env` fica no backend. O Compose fornece as variáveis públicas e encaminha `/api/v1` para NestJS. Não crie outro `.env` aqui. O [README do backend](https://github.com/LucasPivovar/aeroclima-backend#readme) contém o passo a passo compartilhado e o desenho do banco.

## Testar

Na pasta do backend:

```powershell
docker compose exec frontend npm run build
docker compose exec frontend npm test
docker compose exec frontend npm run lint
```

## Só com Node

Node 24, `npm ci` e `npm run dev`. O proxy padrão aponta para http://localhost:3000. `npm run build`, `npm test` e `npm run lint` validam o projeto. Para trocar o proxy temporariamente no PowerShell: `$env:API_PROXY_TARGET = 'http://localhost:3000'`.

Dockerfile para desenvolvimento local. VPS, mapas e funcionamento offline serão preparados depois.
