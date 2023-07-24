// Adicione o JavaScript do jQuery
$(document).ready(function () {
  // Manipule o envio do formulário
  $("#appointmentForm").submit(function (event) {
    event.preventDefault();

    // Obtenha a data, opção selecionada e os dados pessoais
    const selectedDate = $("#appointmentDate").val();
    const selectedOption = $("#appointmentOption").val();
    const userName = $("#userName").val();
    const userPhone = $("#userPhone").val();
    const userEmail = $("#userEmail").val();

    // Validação para garantir que a data esteja entre segunda e sexta
    const selectedDay = new Date(selectedDate).getDay();
    if (selectedDay === 0 || selectedDay === 6) {
      alert("Por favor, selecione uma data entre segunda e sexta-feira.");
      return;
    }

    // Validação para garantir que uma opção foi selecionada
    if (!selectedOption) {
      alert("Por favor, selecione uma opção.");
      return;
    }

    // Validação para garantir que todos os dados pessoais foram preenchidos
    if (!userName || !userPhone || !userEmail) {
      alert("Por favor, preencha todos os campos de dados pessoais.");
      return;
    }

    // Você pode agora utilizar as variáveis para salvar no banco de dados,
    // enviar por email ou qualquer outra ação relacionada ao agendamento.

    // Exemplo de exibição de mensagem de sucesso com os dados do agendamento:
    alert(
      "Agendamento realizado com sucesso!\nData: " +
        selectedDate +
        "\nOpção: " +
        selectedOption +
        "\nNome: " +
        userName +
        "\nTelefone: " +
        userPhone +
        "\nEmail: " +
        userEmail
    );

    // Ou você pode enviar os dados para o servidor usando Ajax:
    // $.ajax({
    //   url: "sua_url_de_processamento.php",
    //   method: "POST",
    //   data: {
    //     date: selectedDate,
    //     option: selectedOption,
    //     name: userName,
    //     phone: userPhone,
    //     email: userEmail
    //   },
    //   success: function (response) {
    //     // Lógica de sucesso
    //   },
    //   error: function (error) {
    //     // Lógica de erro
    //   }
    // });
  });
});
