import React from 'react';
import ProdutoList from '../produtos/produto.list';

const ProdutoPage = () => {
  return (
    <div className="container">
      <div className="py-4">
        <ProdutoList />
      </div>
    </div>
  )
}

export default ProdutoPage;