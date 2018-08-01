class MensagemView extends View{
    
    update(model: string){
        this._elemento.innerHTML = this.template(model)
    }

    template(model: string): any {
        return `<p class="alert alert-info">${model}</p>`
    }
}