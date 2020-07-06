import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import { FaClipboardList, FaMedal } from 'react-icons/fa';

import { Wrapper, Content, Buttons } from './styles';

interface SuccessProps {
  visible: boolean;
}

const Success: React.FC<SuccessProps> = ({ visible }) => {
  return (
    <Wrapper visible={visible}>
      <Content>
        <BsCheckCircle size={200} color="#12A454" />
        <strong>Venda cadastrada com sucesso!</strong>
        <Buttons>
          <Link to="/">
            <FaMedal size={20} />
            <span>Ver o Ranking</span>
          </Link>

          <Link to="/register">
            <FaClipboardList size={20} />
            <span>Cadastrar nova venda</span>
          </Link>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

export default Success;
