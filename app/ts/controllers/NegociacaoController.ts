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

        if(!this._ehDiaUtil(negociacao.data)){
            this._mensagemView.update('Não é possível adicionar negociações em fins de semana')
        } else {
            this._negociacoes.adiciona(negociacao)
    
            this._negociacoesView.update(this._negociacoes)
    
            this._mensagemView.update('Negociação adicionada com sucesso')
        }

    }

    private _ehDiaUtil(data:  Date){
        return data.getDay() !== DiaDaSemana.Domingo && data.getDay() !== DiaDaSemana.Sabado
    }
}

enum DiaDaSemana {
    Domingo = 0,
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
}