import React, { useState } from 'react';

import Header from '../../Components/Header';
import Success from '../../Components/Success';
import { Container, Field, FieldGroup, Button } from './styles';

const Register: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleRegisterSale = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Header size="small" />
      <Success visible={visible} />
      <Container>
        <h1>Cadastrar venda</h1>
        <form>
          <fieldset>
            <legend>
              <h2>Venda</h2>
            </legend>
          </fieldset>

          <Field>
            <label htmlFor="property">Empreedimento</label>
            <input id="property" name="property" type="text" />
          </Field>
          <FieldGroup>
            <Field>
              <label htmlFor="unity">Unidade</label>
              <input id="unity" name="unity" type="text" />
            </Field>
            <Field>
              <label htmlFor="dateSale">Data da venda</label>
              <input
                id="dateSale"
                name="dateSale"
                type="date"
                placeholder="DD/MM/AAAA"
              />
            </Field>
          </FieldGroup>
          <Field>
            <label htmlFor="valueProperty">Valor do Imovel</label>
            <input id="valueProperty" name="valueProperty" type="number" />
          </Field>

          <FieldGroup>
            <Field>
              <label htmlFor="realtorSale">Corretor Vendedor</label>
              <input id="realtorSale" name="realtorSale" type="text" />
            </Field>
            <Field>
              <label htmlFor="realtorCap">Corretor Captador</label>
              <input id="realtorCap" name="realtorCap" type="text" />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <label htmlFor="coodSale">Coordenador da Venda</label>
              <select name="coodSale" id="coodSale">
                <option selected value="0" disabled>
                  Coordenador da Venda
                </option>
                <option value="gregory">Gregory</option>
                <option value="rossilene">Rossilene</option>
                <option value="joseRocha">José Rocha</option>
              </select>
            </Field>
            <Field>
              <label htmlFor="DirSale">Gerente ou Diretor(a) da venda</label>
              <select name="DirSale" id="DirSale">
                <option selected value="0" disabled>
                  Gerente ou Diretor(a) da venda
                </option>
                <option value="cristiane/raunin">Cristiane/Raunin</option>
                <option value="talita/harryson">Talita/Harryson</option>
                <option value="meire/emerson">Meire/Emerson</option>
              </select>
            </Field>
          </FieldGroup>

          <fieldset>
            <legend>
              <h2>Comprador</h2>
            </legend>
          </fieldset>

          <Field>
            <label htmlFor="name">Nome Completo</label>
            <input id="name" name="name" type="text" />
          </Field>

          <FieldGroup>
            <Field>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" name="cpf" type="text" />
            </Field>
            <Field>
              <label htmlFor="tel">Telefone</label>
              <input id="tel" name="tel" type="tel" />
            </Field>
          </FieldGroup>

          <Field>
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" />
          </Field>

          <fieldset>
            <legend>
              <h2>Vendedor</h2>
            </legend>
          </fieldset>

          <Field>
            <label htmlFor="builder">Construtora / Cliente Vendedor </label>
            <input id="builder" name="builder" type="type" />
          </Field>

          <fieldset>
            <legend>
              <h2>Comissionamento</h2>
            </legend>
          </fieldset>

          <FieldGroup>
            <Field>
              <label htmlFor="valueCommision">Valor do Comissionamento</label>
              <input id="valueCommision" name="valueCommision" type="number" />
            </Field>
            <Field>
              <label htmlFor="porcent">Porcentagem</label>
              <input id="porcent" name="porcent" type="number" />
            </Field>
          </FieldGroup>

          <fieldset>
            <legend>
              <h2>Observação da Negociação</h2>
            </legend>
          </fieldset>

          <Field>
            <textarea rows={4} cols={50}>
              informe as observações aqui
            </textarea>
          </Field>

          <Button type="submit" onSubmit={handleRegisterSale}>
            Cadastrar venda
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Register;
