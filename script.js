const time = setInterval(() => {

    let dateToday = new Date();
    let horas = dateToday.getHours();
    let minutos = dateToday.getMinutes();
    let segundos = dateToday.getSeconds();

    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;
})

