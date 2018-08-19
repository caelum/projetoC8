import { View } from "../../views/View";

export function logTempoExecucao(){
    return function(instance: View<any>, propertyName: string, propertyDescriptor: PropertyDescriptor){
        const metodoDecorado = propertyDescriptor.value
        
        propertyDescriptor.value = function(...args: any[]){
            const tempoInicial = performance.now()
            metodoDecorado.apply(this, args)
            const tempoFinal = performance.now()
            console.log(`Tempo de execução de update: ${tempoFinal - tempoInicial} ms`)
        }
    }
}