const salutationHtml = `
<form id="salutation">
    <h1>Script de Saudação</h1>
    
    <div class="div-form-flex">
        <div id="div-form-1">
            <div class="div-inputs">
                <label class="labels" for="contact-name">Nome do Contato:</label>
                <input class="forms-inputs" name="contact-name" id="contact-name" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="sla">SLA:</label>
                <select class="forms-inputs" name="selectSla" id="selectSla">
                    <option disabled selected></option>
                    <option value="4 horas úteis">4 horas úteis</option>
                    <option value="8 horas úteis">8 horas úteis</option>
                    <option value="48 horas úteis">48 horas úteis</option>
                </select>
            </div>
        
            <div class="div-inputs">
                <label class="labels" for="substantive">Substantivo:</label>
                <select class="forms-inputs" name="selectSubstantive" id="selectSubstantive">
                    <option disabled selected></option>
                    <option value="plural">Plural</option>
                    <option value="singular-masculino">Singular Masculino</option>
                    <option value="singular-feminino">Singular Feminino</option>
                </select>
            </div>
        </div>
        <div id="div-buttons-1">
            <button class="btn" id="generate-script" type="submit">Gerar Script</button>
            <button class="btn" id="close" type="reset">Limpar</button>
        </div>
    </div>
</form>
`

const escalationHtml = `
<form id="escalation">
    <h1>Script de Escalonamento</h1>

    <div class="div-form-flex">
        <div id="div-form-1">
            <div class="div-inputs">
                <label class="labels" for="contact-name">Nome do Contato:</label>
                <input class="forms-inputs" name="contact-name" id="contact-name" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="section">Setor:</label>
                <select class="forms-inputs" name="selectSection" id="selectSection">
                    <option disabled selected></option>
                    <option value="Infraestrutura">Infraestrutura</option>
                    <option value="HelpDesk N2">HelpDesk N2</option>
                    <option value="Financeiro">Financeiro</option>
                    <option value="Desenvolvimento">Desenvolvimento</option>
                    <option value="Contratos">Contratos</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Projetos">Projetos</option>
                    <option value="Recursos Humanos">Recursos Humanos</option>
                    <option value="Segurança da Informação">Segurança da Informação</option>
                    <option value="Treinamento">Treinamento</option>
                    <option value="LGPD">LGPD</option>
                    <option value="UX">UX</option>
                </select>
            </div>

            <div class="div-inputs">
                <label class="labels" for="sla">SLA:</label>
                <select class="forms-inputs" name="selectSla" id="selectSla">
                    <option disabled selected></option>
                    <option value="4 horas úteis">4 horas úteis</option>
                    <option value="8 horas úteis">8 horas úteis</option>
                    <option value="48 horas úteis">48 horas úteis</option>
                </select>
            </div>
        
            <div class="div-inputs">
                <label class="labels" for="substantive">Substantivo:</label>
                <select class="forms-inputs" name="selectSubstantive" id="selectSubstantive">
                    <option disabled selected></option>
                    <option value="plural">Plural</option>
                    <option value="singular-masculino">Singular Masculino</option>
                    <option value="singular-feminino">Singular Feminino</option>
                </select>
            </div>
        </div>
        <div id="div-buttons-1">
            <button class="btn" id="generate-script" type="submit">Gerar Script</button>
            <button class="btn" id="close" type="reset">Limpar</button>
        </div>
    </div>
</form>
`

const clientScheduleUpdateHtml = `
<form id="client-schedule-update">
    <h1>Script de Agendamento de Atualização com o Cliente</h1>
</form>
`

const confirmScheduleUpdateHtml = `
<form id="confirm-schedule-update">
    <h1>Script de Confirmação de agendamento de atualização</h1>

    <div class="div-form-flex">
        <div id="div-form-1">
            <div class="div-inputs">
                <label class="labels" for="date">Data:</label>
                <input class="forms-inputs" name="date" id="date" type="date">
            </div>
            <div class="div-inputs">
                <label class="labels" for="time">Hora:</label>
                <input class="forms-inputs" name="time" id="time" type="time">
            </div>
        </div>
        <div id="div-buttons-1">
            <button class="btn" id="generate-script" type="submit">Gerar Script</button>
            <button class="btn" id="close" type="reset">Limpar</button>
        </div>
    </div>
</form>
`

const trelloScheduleUpdateHtml = `
<form id="trello-schedule-update">
    <h1>Script para agendamento de atualização no Trello</h1>

    <div class="div-form-flex">
        <div id="div-form-trello">

            <div class="div-inputs">
                <label class="labels" for="os-number">Número da OS:</label><br>
                <input class="forms-inputs" name="os-number" id="os-number" type="number">
            </div>

            <div class="div-inputs">
                <label class="labels" for="company-name">Nome da Empresa:</label><br>
                <input class="forms-inputs" name="company-name" id="company-name" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="client-url">Link da Plataforma:</label><br>
                <input class="forms-inputs" name="client-url" id="client-url" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="version">Versão Atual:</label><br>
                <input class="forms-inputs" name="version" id="version" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="sub-version">Sub Versão:</label><br>
                <input class="forms-inputs" name="sub-version" id="sub-version" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="time-update">Horário:</label><br>
                <input class="forms-inputs" name="time-update" id="time-update" type="time">
            </div>

            <div class="div-inputs">
                <label class="labels" for="os-link">Link da O.S</label><br>
                <input class="forms-inputs" name="os-link" id="os-link" type="text">
            </div>

        </div>
        <div id="div-buttons-1">
            <button class="btn" id="generate-script" type="submit">Gerar Script</button>
            <button class="btn" id="close" type="reset">Limpar</button>
        </div>
    </div>
</form>
`

const registerInfoHtml = `
<form id="register-information">
    <h1>Script para Registro de informações no ERP</h1>

    <div class="div-form-flex">
        <div id="div-form-r-info">

            <div class="div-inputs">
                <label class="labels" for="protocol">Protocolo:</label><br>
                <input class="forms-inputs" name="protocol" id="protocol" type="number">
            </div>

            <div class="div-inputs">
                <label class="labels" for="occurrence-date">Data do ocorrido:</label><br>
                <input class="forms-inputs" name="occurrence-date" id="occurrence-date" type="date">
            </div>

            <div class="div-inputs">
                <label class="labels" for="platform-url">URL da Plataforma:</label><br>
                <input class="forms-inputs" name="platform-url" id="platform-url" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="client-name">Nome do cliente:</label><br>
                <input class="forms-inputs" name="client-name" id="client-name" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="client-email">E-mail:</label><br>
                <input class="forms-inputs" name="client-email" id="client-email" type="email">
            </div>

            <div class="div-inputs">
                <label class="labels" for="demand">Demanda e Resolução:</label><br>
                <textarea class="forms-inputs" name="demand" id="demand" type="text"></textarea>
            </div>

        </div>
        <div id="div-buttons-1">
            <button class="btn" id="generate-script" type="submit">Gerar Script</button>
            <button class="btn" id="close" type="reset">Limpar</button>
        </div>
    </div>
</form>
`

const ehzHtml = `
<form id="ehz">
    <h1>Script para Registro de EHZ</h1>

    <div class="div-form-flex">
        <div id="div-form-ehz">

            <div class="div-inputs">
                <label class="labels" for="section">Setor:</label><br>
                <select class="forms-inputs" name="section" id="section">
                    <option disabled selected></option>
                    <option value="Infraestrutura">Infraestrutura</option>
                    <option value="HelpDesk N2">HelpDesk N2</option>
                    <option value="Financeiro">Financeiro</option>
                    <option value="Desenvolvimento">Desenvolvimento</option>
                    <option value="Contratos">Contratos</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Projetos">Projetos</option>
                    <option value="Recursos Humanos">Recursos Humanos</option>
                    <option value="Segurança da Informação">Segurança da Informação</option>
                    <option value="Treinamento">Treinamento</option>
                    <option value="LGPD">LGPD</option>
                    <option value="UX">UX</option>
                </select>
            </div>

            <div class="div-inputs">
                <label class="labels" for="channel">Canal:</label><br>
                <select class="forms-inputs" name="channel" id="channel">
                    <option disabled selected></option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Chat">Chat</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Telegram">Telegram</option>
                    <option value="WorkPlace">WorkPlace</option>
                    <option value="Twitter">Twitter</option>
                    <option value="App Chat">App Chat</option>
                    <option value="E-mail">E-mail</option>
                    <option value="Mercado Livre">Mercado Livre</option>
                    <option value="SMS">SMS</option>
                    <option value="Bot Telegram">Bot Telegram</option>
                    <option value="Bot Skype">Bot Skype</option>
                    <option value="Voz">Voz</option>
                    <option value="Bot Messenger">Bot Messenger</option>
                    <option value="API">API</option>
                    <option value="Slack">Slack</option>
                    <option value="Microsoft Teams">Microsoft Teams</option>
                    <option value="Hangouts">Hangouts</option>
                    <option value="DirectLine">DirectLine</option>
                    <option value="Reclame Aqui">Reclame Aqui</option>
                </select>
            </div>

            <div class="div-inputs">
                <label class="labels" for="typeApi">Tipo de API:</label><br>
                <select class="forms-inputs" name="typeApi" id="typeApi">
                    <option disabled selected></option>
                    <option value="Padrão">Padrão</option>
                    <option value="ASC Oficial">ASC Oficial</option>
                    <option value="INTERAXA">INTERAXA</option>
                    <option value="INTERAXA Terceiro">INTERAXA Terceiro</option>
                    <option value="INFOBLIP">INFOBLIP</option>
                    <option value="MOVILE">MOVILE</option>
                    <option value="SMOOCH">SMOOCH</option>
                    <option value="SMOOCH (CC CLIENTE)">SMOOCH (CC CLIENTE)</option>
                    <option value="SMOOCH (terceiro)">SMOOCH (terceiro)</option>
                    <option value="BOTMAKER (terceiro)">BOTMAKER (terceiro)"</option>
                    <option value="TWILIO (terceiro)">TWILIO (terceiro)</option>
                    <option value="ZENVIA (terceiro)">ZENVIA (terceiro)</option>
                    <option value="POSITUS">POSITUS</option>
                    <option value="BOTICARIO (terceiro)">BOTICARIO (terceiro)</option>
                    <option value="GUPSHUP (terceiro)">GUPSHUP (terceiro)</option>
                </select>
            </div>

            <div class="div-inputs">
                <label class="labels" for="url">URL:</label><br>
                <input class="forms-inputs" name="url" id="url" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="version">Versão:</label><br>
                <input class="forms-inputs" name="version" id="version" type="text">
            </div>

            <div class="div-inputs">
                <label class="labels" for="cod-account">Cod. da Conta:</label><br>
                <input class="forms-inputs" name="cod-account" id="cod-account" type="number">
            </div>

            <div class="div-inputs">
                <label class="labels" for="name-account">Nome da Conta:</label><br>
                <input class="forms-inputs" name="name-account" id="name-account" type="number">
            </div>

            <div class="div-inputs">
                <label class="labels" for="occurrence">Ocorrência:</label><br>
                <textarea class="forms-inputs" name="occurrence" id="occurrence" type="text"></textarea>
            </div>

            <div class="div-inputs">
                <label class="labels" for="check">Check:</label><br>
                <textarea class="forms-inputs" name="check" id="check" type="text"></textarea>
            </div>

        </div>
        <div id="div-buttons-1">
            <button class="btn" id="generate-script" type="submit">Gerar Script</button>
            <button class="btn" id="close" type="reset">Limpar</button>
        </div>
    </div>
</form>
`

const messageTestHtml = `
<form id="message-test">
<h1>Enviar Mensagem de Teste</h1>

<div class="div-form-flex">
    <div id="div-form-1">
        <div class="div-inputs">
            <label class="labels" for="contact">Contato do Cliente:</label>
            <input class="forms-inputs" name="contact" id="contact" type="number">
        </div>
        <div class="div-inputs">
            <label class="labels" for="message">Mensagem:</label>
            <input class="forms-inputs" name="message" id="message" type="text">
        </div>
    </div>
    <div id="div-buttons-1">
        <button class="btn" id="generate-script" type="submit">Enviar</button>
        <button class="btn" id="close" type="reset">Limpar</button>
    </div>
</div>
<section id="obs">
    <p><strong>*OBS: Para funcionar corretamente, certifique-se de que esteja com seu WhatsApp logado no <a href="https://web.whatsapp.com/" terget="_blank" title="Acessar WhatsApp web para login">WhatsApp Web</a>. Ao clicar em enviar será aberta uma nova aba do navegador</strong><p>
</section>
</form>

`