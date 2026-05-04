# Bot de Atendimento Automatizado para WhatsApp

Bot de atendimento via WhatsApp construído com [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js). Responde mensagens automaticamente com um menu interativo e permite transferência para atendimento humano.

## Funcionalidades

- Menu interativo ativado pela palavra **"menu"** ou ao iniciar uma conversa
- Respostas automáticas para as opções:
  1. Horário de atendimento
  2. Falar com um atendente (transfere para atendimento humano)
  3. Serviços disponíveis
  4. Localização
  5. Formas de pagamento
  6. Trabalhe conosco
- Comando **"Encerrar atendimento"** (enviado pelo atendente) reativa o bot para o número em questão

## Pré-requisitos

- [Node.js](https://nodejs.org/) v16 ou superior
- Google Chrome ou Chromium instalado (usado pelo whatsapp-web.js)

## Instalação

```bash
cd src
npm install
```

## Uso

```bash
node main.js
```

Na primeira execução, um QR Code será exibido no terminal. Escaneie-o com o WhatsApp do número que será usado como bot em **Dispositivos conectados**.

A sessão é salva localmente em `.wwebjs_auth/` e reutilizada nas execuções seguintes.

## Estrutura do projeto

```
botDeAI2026/
└── src/
    ├── main.js       # Inicialização do cliente e lógica de mensagens
    ├── messages.js   # Classe com todas as mensagens do bot
    └── package.json
```

## Personalização

Edite `src/messages.js` para alterar os textos das respostas ou adicionar novas opções ao menu.

## Dependências

| Pacote | Versão | Descrição |
|---|---|---|
| whatsapp-web.js | ^1.34.6 | Wrapper não oficial da API Web do WhatsApp |
| qrcode-terminal | ^0.12.0 | Exibe o QR Code de autenticação no terminal |
