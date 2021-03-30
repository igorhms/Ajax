function loadCustomer(){
    let xhtpp = new XMLHttpRequest();
    let file = ".../json/clientes.json"

    xhtpp.onreadystatechance() = function () {
        if((xhtpp.readyState == 4) && (xhtpp.status == 200)){
            printCustomers(xhtpp.responseText);

        }
    }

    xhtpp.open("GET", file, true);
    xhtpp.send();
}

function printCustomers(cliente){
    clientes = JSON.parse();
    console.log(cliente.nome);
    console.log(cliente.idade);
}