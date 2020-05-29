import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProdutoDataService from "../../services/produtos.service";

const ProdutoList = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    loadProdutos();
  }, []);

  const loadProdutos = async () => {
    ProdutoDataService.getAll()
      .then(res => {
        setProdutos(res.data.data);
      })
      .catch(err => { console.log(err); })
  };

  const deleteProduto = async id => {
    ProdutoDataService.remove(id)
      .then(res => {
        loadProdutos();
      })
      .catch(err => { console.log(err); });
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="d-flex flex-row bd-highlight mb-2">
          <div className="p-2 bd-highlight"><h1>Produtos</h1></div>
          <div className="ml-auto p-2 bd-highlight"><Link className="btn btn-primary btn-lg" to={`/produtos/novo`}>+ Novo Produto</Link></div>
        </div>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th className="align-middle" scope="col">#</th>
              <th className="align-middle" scope="col">Nome</th>
              <th className="align-middle" scope="col">Descrição</th>
              <th className="align-middle text-right" scope="col">Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className="align align-center">
            {produtos && produtos.map((produto, index) => (
              <tr>
                <th className="align-middle" scope="row">{index + 1}</th>
                <td className="align-middle">{produto.nome}</td>
                <td className="align-middle">{produto.descricao}</td>
                <td className="align-middle text-right">{produto.valor}</td>
                <td>
                  <Link className="btn btn-sm btn-outline-primary mr-2" to={`/produtos/${produto._id}`}>
                    <i className="far fa-edit"></i>
                  </Link>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => deleteProduto(produto._id)}>
                    <i className="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProdutoList;