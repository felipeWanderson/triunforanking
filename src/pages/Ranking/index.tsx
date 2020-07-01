import React from 'react';
import { FaMedal } from 'react-icons/fa';

import Header from '../../Components/Header';
import { Container, TableContainer, PoleContainer } from './styles';

const Ranking: React.FC = () => {
  return (
    <>
      <Header size="small" />
      <Container>
        <PoleContainer>
          <table>
            <tbody>
              <tr>
                <td className="gold">1°</td>
                <td className="gold">
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td className="gold">Francistelmo Santos</td>
                <td className="gold vgv">R$ 10.000.000,00</td>
                <td className="gold">
                  <FaMedal size={80} color="#ffd700" />
                </td>
              </tr>
              <tr>
                <td className="silver">2°</td>
                <td className="silver">
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td className="silver">Francistelmo Santos</td>
                <td className="silver vgv">R$ 6.000.000,00</td>
                <td className="silver">
                  <FaMedal size={80} color="#C0C0C0" />
                </td>
              </tr>
              <tr>
                <td className="bronze">3°</td>
                <td className="bronze">
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td className="bronze">Francistelmo Santos</td>
                <td className="bronze vgv">R$ 4.000.000,00</td>
                <td className="bronze">
                  <FaMedal size={80} color="#cd7f32" />
                </td>
              </tr>
            </tbody>
          </table>
        </PoleContainer>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th />
                <th>Corretor</th>
                <th>VGV</th>
                <th>Quantidade de Imóveis</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="title">2°</td>
                <td>
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td>Francistelmo Santos</td>
                <td className="vgv">R$ 10.000.000,00</td>
                <td>5</td>
              </tr>
              <tr>
                <td className="title">3°</td>
                <td>
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td>Francistelmo Santos</td>
                <td className="vgv">R$ 10.000.000,00</td>
                <td>5</td>
              </tr>
              <tr>
                <td className="title">4°</td>
                <td>
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td>Francistelmo Santos</td>
                <td className="vgv">R$ 10.000.000,00</td>
                <td>5</td>
              </tr>
              <tr>
                <td className="title">5°</td>
                <td>
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td>Francistelmo Santos</td>
                <td className="vgv">R$ 10.000.000,00</td>
                <td>5</td>
              </tr>
              <tr>
                <td className="title">6°</td>
                <td>
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td>Francistelmo Santos</td>
                <td className="vgv">R$ 10.000.000,00</td>
                <td>5</td>
              </tr>
              <tr>
                <td className="title">7°</td>
                <td>
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td>Francistelmo Santos</td>
                <td className="vgv">R$ 10.000.000,00</td>
                <td>5</td>
              </tr>
              <tr>
                <td className="title">8°</td>
                <td>
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td>Francistelmo Santos</td>
                <td className="vgv">R$ 10.000.000,00</td>
                <td>5</td>
              </tr>
              <tr>
                <td className="title">9°</td>
                <td>
                  <img
                    className="picture-realtor"
                    src="https://www.triunfoimoveis.com/wp-content/uploads/2017/06/IMG_4415-350x350.jpg"
                    alt="corretor campeao"
                  />
                </td>
                <td>Francistelmo Santos</td>
                <td className="vgv">R$ 10.000.000,00</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Ranking;
