# Lista de Espera com Vercel + Google Sheets

## 1. Criar a planilha

1. Crie uma planilha no Google Sheets.
2. Abra `Extensoes` -> `Apps Script`.
3. Apague o conteudo inicial.
4. Cole o codigo de [google-apps-script-waitlist.gs](/Users/vitor/Documents/Codex/2026-04-20-crie-uma-landing-page-completa-em-2/docs/google-apps-script-waitlist.gs:1).

## 2. Configurar o segredo no Apps Script

1. No Apps Script, abra `Project Settings`.
2. Em `Script Properties`, crie:
   `WAITLIST_WEBHOOK_SECRET`
3. Defina um valor forte, por exemplo:
   `desafio-atencao-2026-segredo`

## 3. Publicar o webhook

1. Clique em `Deploy` -> `New deployment`.
2. Escolha `Web app`.
3. Em `Execute as`, selecione sua conta.
4. Em `Who has access`, use `Anyone`.
5. Publique e copie a URL final do Web App.

## 4. Configurar na Vercel

No projeto da Vercel, adicione estas variaveis de ambiente:

- `WAITLIST_GOOGLE_SCRIPT_URL`
  Cole a URL publicada do Apps Script.
- `WAITLIST_WEBHOOK_SECRET`
  Use exatamente o mesmo valor salvo nas Script Properties.

## 5. Como o fluxo funciona

1. O usuario envia o formulario em `/lista-de-espera`.
2. A rota `app/api/waitlist/route.ts` valida nome, email e WhatsApp.
3. A Vercel adiciona o segredo privado no payload.
4. O Apps Script valida o segredo e grava o lead na aba `Waitlist`.

## 6. Campos enviados para a planilha

- `createdAt`
- `name`
- `email`
- `whatsapp`
- `source`
- `page`
- `ip`
- `userAgent`

## 7. Arquivos envolvidos no projeto

- [app/lista-de-espera/page.tsx](/Users/vitor/Documents/Codex/2026-04-20-crie-uma-landing-page-completa-em-2/app/lista-de-espera/page.tsx:1)
- [app/api/waitlist/route.ts](/Users/vitor/Documents/Codex/2026-04-20-crie-uma-landing-page-completa-em-2/app/api/waitlist/route.ts:1)
- [.env.example](/Users/vitor/Documents/Codex/2026-04-20-crie-uma-landing-page-completa-em-2/.env.example:1)
- [docs/google-apps-script-waitlist.gs](/Users/vitor/Documents/Codex/2026-04-20-crie-uma-landing-page-completa-em-2/docs/google-apps-script-waitlist.gs:1)
