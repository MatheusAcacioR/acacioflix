import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  useEffect(() => {
    console.log('alo alo');

    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    /* setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma categoria qualquer',
          cor: '#cbd1ff',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Outra categoria qualquer',
          cor: '#cbd1ff',
        },
      ]);
    }, 4 * 1000); */
  }, [

  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        console.log('Você tentou enviar o formulário né!?');
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          value={values.nome}
          onChange={handleChange}
          type="text"
          name="nome"
        />

        <FormField
          label="Descrição"
          value={values.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
        />

        <FormField
          label="Cor"
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
        />

        <Button>Cadastrar</Button>

      </form>

      {categorias.lenth === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
