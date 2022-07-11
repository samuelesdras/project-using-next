import SideBar from '../components/sideBar';

import styles from '../styles/Category.module.css';

const Category = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <div>Category Page</div>
    </div>
  );
};

export default Category;
