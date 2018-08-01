class MensagemView extends View<string>{

    template(model: string): any {
        return `<p class="alert alert-info">${model}</p>`
    }
}