import PortaModel from "../model/porta";

export function createDoor(qtde: number, selecionada: number): PortaModel[]{
    return Array.from({ length: qtde }, (_, i) => {
        const numero = i + 1
        const presente = numero === selecionada
        return new PortaModel(numero, presente)
    })
}

export function updateDoor(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualAModificada = portaAtual.numero === portaModificada.numero
 
        if(igualAModificada) {
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desmarcar()
        }
    })
}