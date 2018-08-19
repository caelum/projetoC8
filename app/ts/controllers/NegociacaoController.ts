import {Negociacao, Negociacoes} from '../models/index.js'
import {NegociacoesView, MensagemView} from '../views/index.js'

export class NegociacaoController {
    private _inputData: JQuery
    private _inputQuantidade: JQuery
    private _inputValor: JQuery
    private _negociacoes: Negociacoes = new Negociacoes()
    private _negociacoesView: NegociacoesView = new NegociacoesView("#negociacoesView")
    private _mensagemView: MensagemView = new MensagemView('#mensagemView')

    constructor(){
        this._inputData = <JQuery>$("#data")
        this._inputQuantidade = <JQuery>$("#quantidade")
        this._inputValor = <JQuery>$("#valor")
        this._negociacoesView.update(this._negociacoes)
    }

    adiciona(event: Event){
        event.preventDefault()
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.adiciona(negociacao)

        this._negociacoesView.update(this._negociacoes)

        this._mensagemView.update('Negociação adicionada com sucesso')
    }

}