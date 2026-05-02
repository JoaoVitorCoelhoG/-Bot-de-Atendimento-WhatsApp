class Messages {
  messages = {
    0: 'Opção inválida, digite "Menu" para ver as opções disponíveis.',
    1: "Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.",
    2: "Um atendente humano irá entrar em contato com você em breve. Por favor, aguarde.",
    3: "Nosso serviços disponíveis são: \n1. Informações sobre produtos\n2. Suporte técnico\n3. Falar com um atendente",
    4: "Nossa localização é: Rua Exemplo, 123, Cidade, Estado. Estamos abertos de segunda a sexta, das 9h às 18h.",
    5: "Aceitamos os seguintes métodos de pagamento: Cartão de crédito, débito, boleto bancário e PayPal.",
    6: "Trabalhe conosco! Envie seu currículo para: exemplo@empresa.com",
    7: "Atendimento automático foi reativado para esse número.",
    10: `Ola! Seja bem vindo ao atendimento automático:
            1. Horário de atendimento
            2. Falar com um atendente
            3. Serviços disponíveis
            4. Localização
            5. Formas de pagamento
            6. Trabalhe conosco 
            
            Digite o número correspondente à opção desejada.`,
  };
  getMessage(index = 0) {
    return this.messages[index.toString()] ?? this.messages["0"];
  }
}

module.exports = new Messages();
