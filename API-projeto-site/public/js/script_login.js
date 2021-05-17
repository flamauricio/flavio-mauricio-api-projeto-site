function analisar() {
    var login = inp_user.value;
    var senha = inp_password.value;

    if (login == '' || senha == '') {
        msg_aviso.innerHTML = 'Preencha todos os campos!';

    } else if ((login == 'Termosense' || login == 'Drogasil' || login == 'DrogariaSP' ||
            login == 'DrogaRaia' || login == 'UltraFarma' || login == 'Farmais' || login == 'Intermedica') && senha == '1234') {
        window.location.href = "AreaDoCliente.html";

    } else {
        msg_aviso.innerHTML = 'Algo está errado, preencha os campos corretamente!';
    }
}