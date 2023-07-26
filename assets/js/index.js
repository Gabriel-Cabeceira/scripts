// Funcionalidade do botão de copiar
function btnCopy() {
    const btnCopy = document.getElementById('copy');
    const textToCopy = document.getElementById('script-paragraf');

    btnCopy .addEventListener('click', () => {
        const text = textToCopy.innerText;

        navigator.clipboard.writeText(text)
            .then(() => {
                btnCopy.textContent = 'Copiado!';
                btnCopy.disabled = true;
            })
            .catch((error) => {
                console.log('Erro ao copiar o texto:', error);
            });
    });
}


/*----------------------------------- FORMULARIO DE SAUDAÇAO -----------------------------------*/

// Função que monta o Script de Saudação
function fScriptSaudacao(nomeContato, sla, substantive) {
    
    let boasVindas = '';
    let artigo = '';
    let seja = '';

    if(substantive == 'singular-masculino') {
        boasVindas = 'bem vindo';
        artigo = 'o';
        seja = 'seja';
    } else if(substantive == 'singular-feminino') {
        boasVindas = 'bem vinda';
        artigo = 'a';
        seja = 'seja';
    } else if (substantive == 'plural') {
        boasVindas = 'bem vindos';
        artigo = 'os';
        seja = 'sejam';
    }

    const scriptSaudacao =
    `
    <p id="script-paragraf">
    <span>Olá ${nomeContato}, ${seja} muito ${boasVindas} ao mundo ASCBrazil!</span><br><br>

    <span>Estamos analisando a sua solicitação e informaremos o status neste chamado para que possam acompanhar e validar se está tudo OK.</span><br><br>

    <span>O tempo estimado de resposta é de até ${sla}.</span><br><br>

    <span>Lembrando que poderá ser concluído antes! Quaisquer novidades, ${artigo} manteremos informados e precisando pode nos chamar.</span><br><br>

    Atenciosamente,<br>
    Time Helpdesk AscBrazil
    </p>
    <div id="div-button-copy">
        <button class="btn" id="copy" type="submit">Copiar</button>
    </div>
    `

    return scriptSaudacao
}

// Coloca o script de saudação no HTML
function generateSalutationScript() {
    let btnGenerateScript = document.getElementById('generate-script');

    btnGenerateScript.addEventListener('click', () => {

        let formSalutation = document.getElementById('salutation');
        formSalutation.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(formSalutation);

            let nomeContato = formData.get('contact-name');
            let sla = formData.get('selectSla');
            let substantive = formData.get('selectSubstantive');

            const boxScripts = document.getElementById('box-scripts');

            boxScripts.innerHTML = fScriptSaudacao(nomeContato, sla, substantive);

            btnCopy(); 
        });
    });
}

// Ativa o formulário de Saudações e Gera Formulário
let saudacao = document.getElementById('saudacao');

saudacao.addEventListener('click', () => {
    let boxFormsScripts = document.getElementById('box-forms-scripts');
    boxFormsScripts.innerHTML = salutationHtml;
    let boxScripts = document.getElementById('box-scripts');
    boxScripts.innerHTML = '';
    generateSalutationScript();
})



/*----------------------------------- FORMULARIO DE ESCALONAMENTO -----------------------------------*/

// Função que monta o Script de Escalonamento
function fScriptEscalation(nomeContato, section, sla, substantive) {
    
    let boasVindas = '';
    let artigo = '';
    let seja = '';

    if(substantive == 'singular-masculino') {
        boasVindas = 'bem vindo';
        artigo = 'o';
        seja = 'seja';
    } else if(substantive == 'singular-feminino') {
        boasVindas = 'bem vinda';
        artigo = 'a';
        seja = 'seja';
    } else if (substantive == 'plural') {
        boasVindas = 'bem vindos';
        artigo = 'os';
        seja = 'sejam';
    }

    const scriptEscalation =
    `
    <p id="script-paragraf">
    <span>Olá ${nomeContato}, ${seja} muito ${boasVindas} ao mundo ASCBrazil!</span><br><br>

    <span>O seu chamado foi encaminhado para o setor ${section} e informaremos nesta OS para que possam acompanhar e validar se está tudo Ok!</span><br><br>

    <span>O novo tempo estimado de resposta é de até ${sla}.</span><br><br>

    <span>Lembrando que poderá ser concluído antes! Quaisquer novidades, ${artigo} manteremos informados e precisando pode nos chamar.</span><br><br>

    Atenciosamente,<br>
    Time Helpdesk AscBrazil
    </p>
    <div id="div-button-copy">
        <button class="btn" id="copy" type="submit">Copiar</button>
    </div>
    `

    return scriptEscalation
}

// Coloca o script de escalonamento no HTML
function generateEscalationScript() {
    let btnGenerateScript = document.getElementById('generate-script');

    btnGenerateScript.addEventListener('click', () => {

        let formEscalation = document.getElementById('escalation');
        formEscalation.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(formEscalation);

            let nomeContato = formData.get('contact-name');
            let setor = formData.get('selectSection')
            let sla = formData.get('selectSla');
            let substantive = formData.get('selectSubstantive');

            const boxScripts = document.getElementById('box-scripts');

            boxScripts.innerHTML = fScriptEscalation(nomeContato, setor, sla, substantive);

            btnCopy(); 
        });
    });
}

// Ativa o formulário de Escalonamento e Gera Formulário
let escalonamento = document.getElementById('escalonamento');

escalonamento.addEventListener('click', () => {
    let boxFormsScripts = document.getElementById('box-forms-scripts');
    boxFormsScripts.innerHTML = escalationHtml;
    let boxScripts = document.getElementById('box-scripts');
    boxScripts.innerHTML = '';
    generateEscalationScript();
})



/*-------------------------- FORMULARIO DE AGENDAMENTO DE ATUALIZAÇAO PARA CLIENTE --------------------------*/

// Função que monta o Script de Atualização para o Cliente
function fScriptClientScheduleUpdate() {
    
    const scriptClientScheduleUpdate =
    `
    <p id="script-paragraf">
    <span>Caro cliente,</span><br><br>

    <span>Para agendar a atualização, basta nos informar 3 datas e 3 horários diferentes entre segunda e quinta-feira, desconsiderando feriados, com antecedência mínima de 24h e o horário sendo entre 18h e 21h.</span><br><br>

    <span>O processo de atualização tem duração prevista de até 2 horas e durante o período de atualização a plataforma ficará inacessível.</span><br><br>

    <span>A atualização é realizada por uma equipe especializada da ASC e não é necessário ter acompanhamento de alguém da empresa durante o processo de atualização.</span><br><br>

    <span>IMPORTANTE: O processo de atualização uma vez que for executado não há rollback (desfazer a atualização).</span><br><br>

    <span>Após a atualização o único procedimento necessário é limpar o cache de todas as máquinas (agentes e administradores) para carregar todas as atualizações corretamente.</span><br><br>

    <span>NOTA: As atualizações que são realizadas trazem consigo diversas melhorias de segurança, desempenho, novos recursos e funcionalidades na plataforma e, caso note algo diferente, pedimos que entrem em contato com nossa equipe de Suporte para verificar o item em questão.</span><br><br>

    <span>Em caso de dúvidas, estamos à disposição.</span><br><br>

    Atenciosamente,<br>
    Time Helpdesk AscBrazil
    </p>
    <div id="div-button-copy">
        <button class="btn" id="copy" type="submit">Copiar</button>
    </div>
    `

    return scriptClientScheduleUpdate
}

// Ativa o formulário de Escalonamento e Gera Formulário
let clientScheduleUpdate = document.getElementById('agenda-atualizacao-cliente');

clientScheduleUpdate.addEventListener('click', () => {
    let boxFormsScripts = document.getElementById('box-forms-scripts')
    let boxScripts = document.getElementById('box-scripts');
    boxFormsScripts.innerHTML = clientScheduleUpdateHtml;
    boxScripts.innerHTML = fScriptClientScheduleUpdate();
    btnCopy(); 
});



/*-------------------------- FORMULARIO DE CONFIRMAÇAO AGENDAMENTO DE ATUALIZAÇAO --------------------------*/

// Função que monta o Script de confirmação da Atualização para o Cliente
function fScriptConfirmScheduleUpdate(date, time) {
    
    const scriptConfirmScheduleUpdate =
    `
    <p id="script-paragraf">
    <span>Caro cliente,</span><br><br>

    <span>Apenas confirmando que a atualização da plataforma para o dia ${date}, após às ${time} horas.</span><br><br>

    <span>Ressaltamos que após a atualização é OBRIGATÓRIO que seja realizada a limpeza de cache dos navegadores (agentes e administradores) para carregar as novas atualizações nas máquinas que utilizam a plataforma.</span><br><br>

    <span>Após a conclusão da atualização informaremos nesta OS para que possam acompanhar.</span><br><br>

    <span>IMPORTANTE: O processo de atualização uma vez que for executado não há rollback (desfazer a atualização).</span><br><br>

    <span>Por gentileza, nos confirme a data e o horário citado acima para que possamos garantir o agendamento.</span><br><br>

    Atenciosamente,<br>
    Time Helpdesk AscBrazil
    </p>
    <div id="div-button-copy">
        <button class="btn" id="copy" type="submit">Copiar</button>
    </div>
    `

    return scriptConfirmScheduleUpdate
}

// Coloca o script de confirmação de atualização no HTML
function generateConfirmScheduleScript() {
    let btnGenerateScript = document.getElementById('generate-script');

    btnGenerateScript.addEventListener('click', () => {

        let formConfirmScheduleUpdate = document.getElementById('confirm-schedule-update');
        formConfirmScheduleUpdate.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(formConfirmScheduleUpdate);

            let simpleDate = new Date(formData.get('date'));
            let day = simpleDate.getDate() + 1;
            let month = simpleDate.getMonth() + 1;
            let year = simpleDate.getFullYear();
            let date = `${day}/${month}/${year}`
            let time = formData.get('time');

            const boxScripts = document.getElementById('box-scripts');

            boxScripts.innerHTML = fScriptConfirmScheduleUpdate(date, time);

            btnCopy(); 
        });
    });
}

// Ativa o formulário de Confirmação e Gera Formulário
let confirmaAgendamentoAtualizacao = document.getElementById('confirma-agendamento');

confirmaAgendamentoAtualizacao.addEventListener('click', () => {
    let boxFormsScripts = document.getElementById('box-forms-scripts');
    boxFormsScripts.innerHTML = confirmScheduleUpdateHtml;
    let boxScripts = document.getElementById('box-scripts');
    boxScripts.innerHTML = '';
    generateConfirmScheduleScript();
})

/*-------------------------- FORMULARIO DE AGENDAMENTO DE ATUALIZAÇAO NO TRELLO --------------------------*/

// Função que monta o Script de agendamento de Atualização no Trello
function fScriptTrelloScheduleUpdate(formData) {
    
    const scriptTrelloScheduleUpdate =
    `
    <p id="script-paragraf">
        <span>OS: ${formData.get('os-number')} - ${formData.get('company-name')} - ${formData.get('client-url')} - Versão Atual: ${formData.get('version')} Sub Versão: ${formData.get('sub-version')} - às ${formData.get('time-update')}hs - ${formData.get('os-link')}</span>
    </p>
    <div id="div-button-copy">
        <button class="btn" id="copy" type="submit">Copiar</button>
    </div>
    `

    return scriptTrelloScheduleUpdate
}

// Coloca o script de confirmação de atualização no HTML
function generateTrelloScheduleScript() {
    let btnGenerateScript = document.getElementById('generate-script');

    btnGenerateScript.addEventListener('click', () => {

        let formTrelloScheduleUpdate = document.getElementById('trello-schedule-update');
        formTrelloScheduleUpdate.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(formTrelloScheduleUpdate);

            const boxScripts = document.getElementById('box-scripts');

            boxScripts.innerHTML = fScriptTrelloScheduleUpdate(formData);

            btnCopy(); 
        });
    });
}

// Ativa o formulário de Agendamento no Trello e Gera Formulário
let agendaAtualizacaoTrello = document.getElementById('agenda-atualizacao-trello');

agendaAtualizacaoTrello.addEventListener('click', () => {
    let boxFormsScripts = document.getElementById('box-forms-scripts');
    boxFormsScripts.innerHTML = trelloScheduleUpdateHtml;
    let boxScripts = document.getElementById('box-scripts');
    boxScripts.innerHTML = '';
    generateTrelloScheduleScript();
});

/*-------------------------- FORMULARIO DE REGISTRO DE INFORMAÇOES --------------------------*/

// Função que monta o Script de registro de informações
function fScriptRegisterInfo(formData) {
    
    let simpleDate = new Date(formData.get('occurrence-date'));
    let day = simpleDate.getDate() + 1;
    let month = simpleDate.getMonth() + 1;
    let year = simpleDate.getFullYear();
    let date = `${day}/${month}/${year}`


    const scriptRegisterInfo =
    `
    <p id="script-paragraf">
        <span>Protocolo: ${formData.get('protocol')}</span><br><br>

        <span>----- Demanda e Resolução -----</span><br>
        <span>${formData.get('demand')}</span><br><br>
        <span>----- Informações -----</span><br>
        <span>Nome do solicitante: ${formData.get('client-name')}</span><br>
        <span>E-mail: ${formData.get('client-email')}</span><br>
        <span>URL da Plataforma: ${formData.get('platform-url')}</span><br>
        <span>Data do ocorrido: ${date}</span><br><br>

        Atenciosamente,<br>
        Time Helpdesk AscBrazil
    </p>
    <div id="div-button-copy">
        <button class="btn" id="copy" type="submit">Copiar</button>
    </div>
    `

    return scriptRegisterInfo
}

// Coloca o script de registro de informações no HTML
function generateRegisterInfoScript() {
    let btnGenerateScript = document.getElementById('generate-script');

    btnGenerateScript.addEventListener('click', () => {

        let formRegisterInfo = document.getElementById('register-information');
        formRegisterInfo.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(formRegisterInfo);

            const boxScripts = document.getElementById('box-scripts');

            boxScripts.innerHTML = fScriptRegisterInfo(formData);

            btnCopy(); 
        });
    });
}

// Ativa o formulário de Agendamento no Trello e Gera Formulário
let registroDeInformacoes = document.getElementById('registro-info');

registroDeInformacoes.addEventListener('click', () => {
    let boxFormsScripts = document.getElementById('box-forms-scripts');
    boxFormsScripts.innerHTML = registerInfoHtml;
    let boxScripts = document.getElementById('box-scripts');
    boxScripts.innerHTML = '';
    generateRegisterInfoScript();
});

/*-------------------------- FORMULARIO DE REGISTRO DE EHZ --------------------------*/

// Função que monta o Script de registro de EHZ
function fScriptEhz(formData) {
    
    const scriptEhz =
    `
    <p id="script-paragraf">
        <span>EHZ: ${formData.get('section')}</span><br><br>

        <span>URL: ${formData.get('url')}</span><br>
        <span>Versão: ${formData.get('version')}</span><br>
        <span>Canal: ${formData.get('channel')}</span><br>
        <span>API: ${formData.get('typeApi')}</span><br>
        <span>Cod. da Conta: ${formData.get('cod-account')}</span><br>
        <span>Nome da Conta: ${formData.get('name-account')}</span><br><br>

        <span>Ocorrência: ${formData.get('occurrence')}</span><br><br>

        <span>Check: ${formData.get('check')}</span><br><br>

        Atenciosamente,<br>
        Time Helpdesk AscBrazil
    </p>
    <div id="div-button-copy">
        <button class="btn" id="copy" type="submit">Copiar</button>
    </div>
    `

    return scriptEhz
}

// Coloca o script de registro de EHZ no HTML
function generateEhzScript() {
    let btnGenerateScript = document.getElementById('generate-script');

    btnGenerateScript.addEventListener('click', () => {

        let formEhz = document.getElementById('ehz');
        formEhz.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(formEhz);

            const boxScripts = document.getElementById('box-scripts');

            boxScripts.innerHTML = fScriptEhz(formData);

            btnCopy(); 
        });
    });
}

// Ativa o formulário de Agendamento no Trello e Gera Formulário
let registroDeEhz = document.getElementById('ehz-btn');

registroDeEhz.addEventListener('click', () => {
    let boxFormsScripts = document.getElementById('box-forms-scripts');
    boxFormsScripts.innerHTML = ehzHtml;
    let boxScripts = document.getElementById('box-scripts');
    boxScripts.innerHTML = '';
    generateEhzScript();
});

/*-------------------------- MENSAGEM DE TESTE CANAL PARADO --------------------------*/

// Função que faz o envio da mensagem de teste
function fsendMessage() {
    
    const form = document.getElementById('message-test');
    const contact = form.elements['contact'].value;
    const message = form.elements['message'].value;
    
    const url = `https://api.whatsapp.com/send?phone=${contact}&text=${encodeURIComponent(message)}`;

    window.open(url);
}

// Faz o envio da mensagem ao clicar no botão
function sendMessage() {
    let btnSendMessage = document.getElementById('generate-script');

    btnSendMessage.addEventListener('click', (e) => {
        e.preventDefault();
        fsendMessage();

    });
}

// Ativa o formulário de Envio de mensagem de teste
let envioDeMensagemTeste = document.getElementById('mensagem-teste');

envioDeMensagemTeste.addEventListener('click', () => {
    let boxFormsScripts = document.getElementById('box-forms-scripts');
    boxFormsScripts.innerHTML = messageTestHtml;
    let boxScripts = document.getElementById('box-scripts');
    boxScripts.innerHTML = '';
    sendMessage();
});