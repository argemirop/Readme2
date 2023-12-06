let Pregunta1 = {
    enunciado: '¿En que ano dio Da Vinci su descrpiocion sobre la camara oscura?',
    respuesta1: '1515',
    respuesta2: '1329',
    respuesta3: '1413',
    respuesta4: '1672',
    respuestacorrecta: '1515',
    respuestaescogida: ''
}
let pregunta2 = {
    enunciado: '¿Quien es considerado el padre de la fotografia?',
    respuesta1: 'Da Vinci.',
    respuesta2: 'Alzan',
    respuesta3: 'Niepse',
    respuesta4: 'Platon',
    respuestacorrecta: 'Niepse',
    respuestaescogida: ''
}
let pregunta3 = {
    enunciado: 'Jacques Mande fue el primer hombre en conseguir una fotografía fija.',
    respuesta1: 'Verdadero.',
    respuesta2: 'Falso',
    respuesta3: 'fue platon',
    respuesta4: 'nunca paso',
    respuestacorrecta: 'Falso',
    respuestaescogida: ''
}
let pregunta4 = {
    enunciado: '¿Fue Deguerreian Joumal la primera revista fotografica? ',
    respuesta1: 'Verdadero.',
    respuesta2: 'Falso',
    respuesta3: 'fue Niepse',
    respuesta4: 'nunca paso',
    respuestacorrecta: 'Verdadero',
    respuestaescogida: ''
}
let pregunta5 = {
    enunciado: '¿Que tipo de fotografia se hace con fines informativos o pedagogicos; es decir, como parte de la trasmision de un mensaje? ',
    respuesta1: 'Fotografia publicitaria',
    respuesta2: 'Fotografia paisajista',
    respuesta3: 'Fotografia documental.',
    respuesta4: 'Fotografia cientifica',
    respuestacorrecta: 'Fotografia documental.',
    respuestaescogida: ''
}
let pregunta6 = {
    enunciado: '¿Que es un plano fotografico?',
    respuesta1: 'Es la proporcion o el Angulo que tiene el objeto dentro del encuadre.',
    respuesta2: 'Es el encuadre de la foto.',
    respuesta3: 'Es la posicion en la cual se encuentra el fotografo',
    respuesta4: 'Es el angulo de la camara',
    respuestacorrecta: 'Es la proporción o el Angulo que tiene el objeto dentro del encuadre.',
    respuestaescogida: ''
}
let pregunta7 = {
    enunciado: '¿Cual es el plano que ocupa el espacio de los hombros hacia arriba, el cual permite resaltar el rostro, rasgos, mirada, gestos y expresiones??',
    respuesta1: 'Primer plano',
    respuesta2: 'Plano medio',
    respuesta3: 'Plano americano',
    respuesta4: 'Plano general',
    respuestacorrecta: 'Primer plano',
    respuestaescogida: ''
}
let pregunta8 = {
    enunciado: '¿Quien patento una pelicula que consistia en una larga tira  de papel  recubierta con una emulsion sensible?',
    respuesta1: 'George Eastman.',
    respuesta2: 'Da Vinci.',
    respuesta3: 'Niepse',
    respuesta4: 'Maxwell.',
    respuestacorrecta: 'George Eastman.',
    respuestaescogida: ''
}
let pregunta9 = {
    enunciado: '¿Que tipo de fotografia sirven para tomar los estudios de la naturaleza atreves de los telescopios, microscopios y otras herramientas?',
    respuesta1: 'Fotografia documental.',
    respuesta2: 'Fotografia publicitaria.',
    respuesta3: 'Fotografia cientifica',
    respuesta4: 'Fotografia documental.',
    respuestacorrecta: 'Fotografia cientifica',
    respuestaescogida: ''
}
let pregunta10 = {
    enunciado: '¿Cual es el plano que proporciona una vision general y descriptiva?',
    respuesta1: 'Plano general.',
    respuesta2: 'Plano entero',
    respuesta3: 'Gran plano general',
    respuesta4: 'Plano americano.',
    respuestacorrecta: 'Gran plano general.',
    respuestaescogida: ''
}


let preguntaactual = 1
let respuestascorrectas = 0

function iniciarevalucion() {
    document.getElementById('boton').classList.add('oculto')
    document.getElementById('Pregunta').classList.remove('oculto')

    document.getElementById('enunciado').innerHTML = Pregunta1.enunciado
    document.getElementById('respuesta1').value = Pregunta1.respuesta1
    document.getElementById('lrespuesta1').innerHTML = Pregunta1.respuesta1

    document.getElementById('respuesta2').value = Pregunta1.respuesta2
    document.getElementById('lrespuesta2').innerHTML = Pregunta1.respuesta2

    document.getElementById('respuesta3').value = Pregunta1.respuesta3
    document.getElementById('lrespuesta3').innerHTML = Pregunta1.respuesta3

    document.getElementById('respuesta4').value = Pregunta1.respuesta4
    document.getElementById('lrespuesta4').innerHTML = Pregunta1.respuesta4
}
function responder() {
    let respuesta1 = document.getElementById('respuesta1')
    let respuesta2 = document.getElementById('respuesta2')
    let respuesta3 = document.getElementById('respuesta3')
    let respuesta4 = document.getElementById('respuesta4')

    if (preguntaactual == 1) {
        if (respuesta1.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    }
    else if (preguntaactual == 2) {
        if (respuesta3.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    }
    else if (preguntaactual == 3) {
        if (respuesta2.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    } else if (preguntaactual == 4) {
        if (respuesta1.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    } else if (preguntaactual == 5) {
        if (respuesta3.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    } else if (preguntaactual == 6) {
        if (respuesta1.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    }else if (preguntaactual == 7) {
        if (respuesta1.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    }else if (preguntaactual == 8) {
        if (respuesta1.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    }else if (preguntaactual == 9) {
        if (respuesta3.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    }else if (preguntaactual == 10) {
        if (respuesta3.checked) {
            respuestascorrectas += 1
            //respuestascorrectas = respuestascorrectas + 1
        }

    }


    if (preguntaactual < 10) {
        preguntaactual++

        let preguntaA = document.getElementById('preguntaactual')
        preguntaA.innerHTML = 'pregunta' + preguntaactual + 'de 10'
        if (preguntaactual == 2) {
            document.getElementById('enunciado').innerHTML = pregunta2.enunciado
            document.getElementById('respuesta1').value = pregunta2.respuesta1
            document.getElementById('lrespuesta1').innerHTML = pregunta2.respuesta1

            document.getElementById('respuesta2').value = pregunta2.respuesta2
            document.getElementById('lrespuesta2').innerHTML = pregunta2.respuesta2

            document.getElementById('respuesta3').value = pregunta2.respuesta3
            document.getElementById('lrespuesta3').innerHTML = pregunta2.respuesta3

            document.getElementById('respuesta4').value = pregunta2.respuesta4
            document.getElementById('lrespuesta4').innerHTML = pregunta2.respuesta4
        }
        if (preguntaactual == 3) {
            document.getElementById('enunciado').innerHTML = pregunta3.enunciado
            document.getElementById('respuesta1').value = pregunta3.respuesta1
            document.getElementById('lrespuesta1').innerHTML = pregunta3.respuesta1

            document.getElementById('respuesta2').value = pregunta3.respuesta2
            document.getElementById('lrespuesta2').innerHTML = pregunta3.respuesta2

            document.getElementById('respuesta3').value = pregunta3.respuesta3
            document.getElementById('lrespuesta3').innerHTML = pregunta3.respuesta3

            document.getElementById('respuesta4').value = pregunta3.respuesta4
            document.getElementById('lrespuesta4').innerHTML = pregunta3.respuesta4
        }
        if (preguntaactual == 4) {
            document.getElementById('enunciado').innerHTML = pregunta4.enunciado
            document.getElementById('respuesta1').value = pregunta4.respuesta1
            document.getElementById('lrespuesta1').innerHTML = pregunta4.respuesta1

            document.getElementById('respuesta2').value = pregunta4.respuesta2
            document.getElementById('lrespuesta2').innerHTML = pregunta4.respuesta2

            document.getElementById('respuesta3').value = pregunta4.respuesta3
            document.getElementById('lrespuesta3').innerHTML = pregunta4.respuesta3

            document.getElementById('respuesta4').value = pregunta4.respuesta4
            document.getElementById('lrespuesta4').innerHTML = pregunta4.respuesta4
        }
        if (preguntaactual == 5) {
            document.getElementById('enunciado').innerHTML = pregunta5.enunciado
            document.getElementById('respuesta1').value = pregunta5.respuesta1
            document.getElementById('lrespuesta1').innerHTML = pregunta5.respuesta1

            document.getElementById('respuesta2').value = pregunta5.respuesta2
            document.getElementById('lrespuesta2').innerHTML = pregunta5.respuesta2

            document.getElementById('respuesta3').value = pregunta5.respuesta3
            document.getElementById('lrespuesta3').innerHTML = pregunta5.respuesta3

            document.getElementById('respuesta4').value = pregunta5.respuesta4
            document.getElementById('lrespuesta4').innerHTML = pregunta5.respuesta4
        }
        if (preguntaactual == 6) {
            document.getElementById('enunciado').innerHTML = pregunta6.enunciado
            document.getElementById('respuesta1').value = pregunta6.respuesta1
            document.getElementById('lrespuesta1').innerHTML = pregunta6.respuesta1

            document.getElementById('respuesta2').value = pregunta6.respuesta2
            document.getElementById('lrespuesta2').innerHTML = pregunta6.respuesta2

            document.getElementById('respuesta3').value = pregunta6.respuesta3
            document.getElementById('lrespuesta3').innerHTML = pregunta6.respuesta3

            document.getElementById('respuesta4').value = pregunta6.respuesta4
            document.getElementById('lrespuesta4').innerHTML = pregunta6.respuesta4
        }
        if (preguntaactual == 7) {
            document.getElementById('enunciado').innerHTML = pregunta7.enunciado
            document.getElementById('respuesta1').value = pregunta7.respuesta1
            document.getElementById('lrespuesta1').innerHTML = pregunta7.respuesta1

            document.getElementById('respuesta2').value = pregunta7.respuesta2
            document.getElementById('lrespuesta2').innerHTML = pregunta7.respuesta2

            document.getElementById('respuesta3').value = pregunta7.respuesta3
            document.getElementById('lrespuesta3').innerHTML = pregunta7.respuesta3

            document.getElementById('respuesta4').value = pregunta7.respuesta4
            document.getElementById('lrespuesta4').innerHTML = pregunta7.respuesta4
        }
        if (preguntaactual == 8) {
            document.getElementById('enunciado').innerHTML = pregunta8.enunciado
            document.getElementById('respuesta1').value = pregunta8.respuesta1
            document.getElementById('lrespuesta1').innerHTML = pregunta8.respuesta1

            document.getElementById('respuesta2').value = pregunta8.respuesta2
            document.getElementById('lrespuesta2').innerHTML = pregunta8.respuesta2

            document.getElementById('respuesta3').value = pregunta8.respuesta3
            document.getElementById('lrespuesta3').innerHTML = pregunta8.respuesta3

            document.getElementById('respuesta4').value = pregunta8.respuesta4
            document.getElementById('lrespuesta4').innerHTML = pregunta8.respuesta4
        }
        if (preguntaactual == 9) {
            document.getElementById('enunciado').innerHTML = pregunta9.enunciado
            document.getElementById('respuesta1').value = pregunta9.respuesta1
            document.getElementById('lrespuesta1').innerHTML = pregunta9.respuesta1

            document.getElementById('respuesta2').value = pregunta9.respuesta2
            document.getElementById('lrespuesta2').innerHTML = pregunta9.respuesta2

            document.getElementById('respuesta3').value = pregunta9.respuesta3
            document.getElementById('lrespuesta3').innerHTML = pregunta9.respuesta3

            document.getElementById('respuesta4').value = pregunta9.respuesta4
            document.getElementById('lrespuesta4').innerHTML = pregunta9.respuesta4
        }
        if (preguntaactual == 10) {
            document.getElementById('enunciado').innerHTML = pregunta10.enunciado
            document.getElementById('respuesta1').value = pregunta10.respuesta1
            document.getElementById('lrespuesta1').innerHTML = pregunta10.respuesta1

            document.getElementById('respuesta2').value = pregunta10.respuesta2
            document.getElementById('lrespuesta2').innerHTML = pregunta10.respuesta2

            document.getElementById('respuesta3').value = pregunta10.respuesta3
            document.getElementById('lrespuesta3').innerHTML = pregunta10.respuesta3

            document.getElementById('respuesta4').value = pregunta10.respuesta4
            document.getElementById('lrespuesta4').innerHTML = pregunta10.respuesta4
        }
    }


    else {
        let resultado = document.getElementById('resultado')
        resultado.classList.remove('oculto')
        resultado.innerHTML = `Respondio correctamente ${respuestascorrectas} de 10`
    }

}

document.getElementById('boton').addEventListener('click', iniciarevalucion)
