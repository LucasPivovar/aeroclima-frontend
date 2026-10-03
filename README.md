# AeroClima — Frontend

Vue + TypeScript + Vite, Router e Pinia. Tela somente H1 AeroClima. src/main.ts faz fetch da API de saúde e registra o resultado no console do navegador.

Clone ao lado de aeroclima-backend. O único .env e o Compose ficam no backend; nessa pasta, execute docker compose up --build -d e abra http://localhost:5173.

Para o editor Windows reconhecer as bibliotecas, instale Node 24 (>=24.15 e <25) e execute npm.cmd ci neste clone e no backend. Os serviços continuam rodando pelo Docker.

- [Instalação](https://github.com/LucasPivovar/aeroclima-backend/blob/main/docs/INSTALACAO.md)
- [Desenvolvimento e integrações](https://github.com/LucasPivovar/aeroclima-backend/blob/main/docs/DESENVOLVIMENTO.md)
- [Documentação e versionamento](https://github.com/LucasPivovar/aeroclima-backend/blob/main/docs/DOCUMENTACAO.md)

MapLibre e idb estão instalados; mapa, downloads offline e telas de produto serão implementados depois. Não há testes unitários configurados; vocês vão criá-los depois. Build, lint e formatação permanecem.

```powershell
npm.cmd run build
npm.cmd run lint
npm.cmd run format:check
```
