export abstract class View<T>{

    protected _elemento: JQuery
    
    constructor(seletor: string, private _safe: boolean = true){
        this._elemento = $(seletor)
    }

    update(model: T): void{
        const tempoInicial = performance.now()

        const template = this._safe
            ? this.template(model).replace(/<script>[\s\S]*?<\/script>/g, '')
            : this.template(model)

        this._elemento.html(template)

        const tempoFinal = performance.now()

        console.log(`Tempo de execução de update: ${tempoFinal - tempoInicial} ms`)
    }

    abstract template(model: T): string

}