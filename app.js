const mostrar = () => {
    Digital = new Date()
    horas = Digital.getHours()
    minutos = Digital.getMinutes()
    segundos = Digital.getSeconds()
    dn = "AM"
    if (horas > 12) {
            dn = "PM"
            horas = horas - 12
        }
    if (horas == 0)
            horas = 12
    if (minutos <= 9)
            minutos = "0" + minutos
    if (segundos <= 9)
            segundos = "0" + segundos
        document.getElementById('reloj').innerText = horas + ":" + minutos + ":" +
            segundos + " " + dn
        setTimeout("mostrar()", 1000)
}

mostrar()
