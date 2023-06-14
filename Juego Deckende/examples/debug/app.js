function arbolito(pisos) {
    for (let i = 0; i < pisos; i++) {
        let hojas= " ";
        for (let j = 0;j < i; j++) {
            hojas = hojas+"O";        
        }
        console.log(hojas);  
    }
}
arbolito(5)