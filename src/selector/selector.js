import React from 'react';
import './selector.css';

class Selector extends React.Component{
    
    constructor(){
        super()
        this.state={
            selectedItem:"Selecione uma Opção",
            repCheck: [
                {
                    itemNomes:null
                }
            ],
            inputValue:"",
            itemList:[
                {
                    itemNomes:'Selecione uma Opção'
                }
            ]
        }
    }
    //mantem o texto do Input atualizado
    txtItem=(e)=>{
        this.setState({inputValue:e.target.value})
    }
    /*
    selectItem(e){
        this.setState({selectedItem:e
        })
    }
    */
   //Adiciona os items na lista e limpa o Input
    addItem=()=>{
        if(this.state.inputValue ===""){
            alert("Campo Vazio");
            return;
        }
        this.setState(x=>({
            inputValue: '',
            itemList:[
                ...x.itemList,
                {
                    itemNomes:x.inputValue}
            ]
        }))
        alert("Adicionado com Sucesso");
    }
    /*
    ---
    React requer que suas listas sejam enumeradas por uma key especifica por questões de performance
    Mas neste caso por ser uma quantia pequena de dados nao foi implementado
    ---
    uniqueId() {
        idCounter += 1
        return idCounter;
    }
    */
   //remove o item solicitado
    removeItem(e){
        if(this.state.inputValue === ''){
            alert("Campo Vazio");
            return;
        }
        this.setState(({itemList}) => ({
            inputValue: '',
            itemList: itemList.filter(i => i.itemNomes !== e)
        }))
        alert("Removido com Sucesso");
    }
    //função para limpar o Input
    clearInput(){
        this.setState(x=>({
            inputValue: '',
        }))
    }
    
    render(){
        //monta a Listbox com os seus respectivos itens
        let itemRegistro=this.state.itemList.map((x)=>{
            return(
                <option>
                    {x.itemNomes}
                </option>
            )
        })
        return(
            <div>
                <div className="lines">
                    <center>
                    <select onChange={() =>this.selectItem(this.itemList.itemNomes)}>
                    {itemRegistro}
                    </select>
                    </center>
                </div>
                <div className="lines">
                    <center>
                    <input type="text" 
                        value={this.state.inputValue}
                        placeholder='Insira um Item' 
                        onChange={this.txtItem}
                    />
                    </center>
                </div>
                <div className="lines">
                    <center>
                    <button onClick={this.addItem}>Adicionar</button>
                    <button onClick={() => this.removeItem(this.state.inputValue)}>Remover</button>
                    <button onClick={() => this.clearInput()}>Limpar caixa</button>
                    </center>
                </div>
            </div>
        )
    }
}

export default Selector;