# Instalação e execução do frontend

Frontend em Vue 3, TypeScript e Vite.

## Pré-requisitos

- Node.js 20.19+ na linha 20, ou 22.12+ (exigência do Vite instalado), com npm.
- Git para baixar e atualizar o projeto quando o repositório do frontend estiver configurado. A pasta local atual ainda não tem repositório Git próprio.
- Para executar a API junto, Docker com Compose e o backend disponível.

## Iniciar localmente

Na pasta `aeroclima-frontend`:

```sh
npm ci
npm run dev
```

Abra a URL informada no terminal, normalmente http://localhost:5173. Se a porta estiver ocupada, o Vite pode selecionar outra.

O frontend atual ainda é o template inicial e não possui configuração de integração com a API. O Compose do backend inicia somente API e PostgreSQL; mantenha o frontend neste terminal separado.

## Atualizar

Quando o frontend estiver em um repositório Git, com alterações locais salvas:

```sh
git pull
npm ci
npm run dev
```

## Gerar versão para publicação

```sh
npm run build
```

O comando verifica os tipos e gera os arquivos estáticos em `dist`. Para conferir essa versão localmente:

```sh
npm run preview
```

Abra a URL exibida no terminal. `preview` é para conferência local. A publicação deve enviar o conteúdo de `dist` ao serviço de hospedagem escolhido; o projeto ainda não define um destino de publicação.

## Iniciar o backend junto

Em outro terminal, na pasta `aeroclima-backend`, após configurar `.env`:

```sh
docker compose up -d --build
```

API: http://localhost:3000. Consulte o guia de instalação do backend para a configuração do banco.
