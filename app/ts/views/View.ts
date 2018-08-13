export abstract class View<T>{

    protected _elemento: JQuery
    
    constructor(seletor: string, private _safe: boolean = true){
        this._elemento = $(seletor)
    }
    update(model: T): void{
        const template = this._safe
            ? this.template(model).replace(/<script>[\s\S]*?<\/script>/g, '')
            : this.template(model)

        this._elemento.html(template)
    }

    abstract template(model: T): string

}