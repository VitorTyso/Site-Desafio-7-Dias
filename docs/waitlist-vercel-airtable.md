# Lista de Espera com Vercel + Airtable

## 1. Criar a base no Airtable

Crie uma base com uma tabela chamada `Waitlist`.

Campos sugeridos:

- `name` -> single line text
- `email` -> email
- `whatsapp` -> phone number ou single line text
- `source` -> single line text
- `page` -> single line text
- `createdAt` -> date with time

## 2. Gerar o token

Crie um `Personal Access Token` no Airtable com permissao para:

- ler e escrever records na base escolhida

## 3. Pegar os dados necessarios

Voce vai precisar de:

- `AIRTABLE_TOKEN`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME`

## 4. Configurar na Vercel

No projeto da Vercel, adicione:

- `AIRTABLE_TOKEN`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_NAME`

## 5. Como o fluxo funciona

1. O usuario envia o formulario em `/lista-de-espera`
2. A rota `app/api/waitlist/route.ts` valida os dados
3. A Vercel envia o lead para o Airtable
4. O Airtable cria um novo record na tabela `Waitlist`

## 6. Arquivos envolvidos no projeto

- [app/lista-de-espera/page.tsx](/Users/vitor/Documents/Codex/2026-04-20-crie-uma-landing-page-completa-em-2/app/lista-de-espera/page.tsx:1)
- [app/api/waitlist/route.ts](/Users/vitor/Documents/Codex/2026-04-20-crie-uma-landing-page-completa-em-2/app/api/waitlist/route.ts:1)
- [.env.example](/Users/vitor/Documents/Codex/2026-04-20-crie-uma-landing-page-completa-em-2/.env.example:1)
