import { useContext } from 'react';
import Image from 'next/image';

import { MyContext } from '../context';
import SideBar from '../components/sideBar';
import Page from '../components/pages';
import { Button, InputGroup, Form, Table, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BiSearch } from 'react-icons/bi';

import styles from '../styles/Products.module.css';

const Products = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className={styles.products__container}>
        <SideBar />
        <div className={styles.products__title__div}>
          <div className={styles.products__title}>
            <label className={styles.products__title_label}>Produtos</label>
            <div>
              <Button variant="primary">Novo Produto</Button>{' '}
            </div>
          </div>
          <div>
            <label>Todos</label>
            <hr />
          </div>
          <div className={styles.products__search}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <BiSearch color="#1366E2" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Busque por: Nome, EAN ou Código"
                aria-label="Produto"
              />
            </InputGroup>
          </div>
          <div className={styles.products__table}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <Form.Check />
                  </th>
                  <th></th>
                  <th>Produto</th>
                  <th>Qtd. Estoque</th>
                  <th>Código</th>
                </tr>
              </thead>
              <tbody>
                {context.products ? (
                  context.products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <Form.Check />
                      </td>
                      <td>
                        <Image
                          src={product.image}
                          alt="Vercel Logo"
                          width={72}
                          height={30}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.id}</td>
                    </tr>
                  ))
                ) : (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </tbody>
            </Table>
          </div>
          <div className={styles.footer}>
            <div className={styles.products__pagination}>
              <Page />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
