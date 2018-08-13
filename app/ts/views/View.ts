export abstract class View<T>{

    protected _elemento: JQuery
    private _safe: boolean
    
    constructor(seletor: string, safe?: boolean){
        this._elemento = $(seletor)
        this._safe = safe
    }
    update(model: T): void{
        const template = this._safe
            ?  this.template(model).replace(/<script>[\s\S]*?<\/script>/g, '')
            : this.template(model)

        this._elemento.html(template)
    }

    abstract template(model: T): string

}