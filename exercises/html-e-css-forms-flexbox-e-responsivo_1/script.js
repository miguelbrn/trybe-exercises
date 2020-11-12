estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

for (estado of estados) {
    let option = document.createElement('option');
    let select = document.getElementById('select')
    option.innerText = estado
    select.appendChild(option)
}