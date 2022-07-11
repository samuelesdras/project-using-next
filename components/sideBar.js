import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/SideBar.module.css';
import { FaTag, FaPercent, FaUserCog } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className={styles.sideBarb__container__main}>
      <div className={styles.sideBar__container}>
        <div className={styles.sideBar__logo}>
          <Image src="/logo.png" alt="SM.Places" width={135} height={29} />
        </div>
        <ul>
          <div className={styles.sideBar__li__div}>
            <div>
              <FaTag color="#1366E2" size={12} />
            </div>
            <div className={styles.sideBar__li}>
              <li>Catálogo</li>
            </div>
          </div>
          <ul className={styles.sideBar__ul}>
            <Link href="/products">
              <li className={styles.sideBar__ul__link}>Produtos</li>
            </Link>
            <Link href="/category">
              <li className={styles.sideBar__ul__link}>Categoria</li>
            </Link>
            <Link href="/attributes">
              <li className={styles.sideBar__ul__link}>Atributos</li>
            </Link>
          </ul>
          <div className={styles.sideBar__li__div}>
            <div>
              <FaPercent color="#7D7D7D" size={12} />
            </div>
            <div className={styles.sideBar__li_commission}>
              <Link href="/commissions">
                <li className={styles.sideBar__li}>Comissões</li>
              </Link>
            </div>
          </div>
        </ul>
      </div>
      <div className={styles.footer}>
        <div>
          <FaUserCog color="#22262D" size={22} />
        </div>
        <div className={styles.sideBar__li}>
          <li>Administrador</li>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
