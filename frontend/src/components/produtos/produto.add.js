import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ProdutoDataService from "../../services/produtos.service";

const ProdutoAdd = () => {
  let history = useHistory();

  const initialProdutoState = {
    nome: "",
    descricao: "",
    valor: 0
  }

  const [produto, setProduto] = useState(initialProdutoState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  }

  const saveProduto = async () => {
    var data = {
      nome: produto.nome,
      descricao: produto.descricao,
      valor: produto.valor
    };

    ProdutoDataService.create(data)
      .then(res => {
        setProduto({
          nome: res.data.data.nome,
          descricao: res.data.data.descricao,
          valor: res.data.data.valor
        });

        console.log(res.data.success);
        console.log(res.data.data);

        history.push('/produtos');
      })
      .catch(err => { console.log(err); })
  }

  return (
    <div className="container">
      <div className="py-4">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Novo Produto</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nome">Nome do Produto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nome do produto"
                id="nome"
                required
                name="nome"
                value={produto.nome}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição do Produto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite a descricao do produto"
                id="descricao"
                required
                name="descricao"
                value={produto.descricao}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="valor">Preço do Produto</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                placeholder="Digite o preço"
                id="valor"
                name="valor"
                value={produto.valor}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={saveProduto} className="btn btn-primary btn-block">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProdutoAdd;