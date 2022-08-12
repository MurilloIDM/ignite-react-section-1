import { PencilLine } from "phosphor-react";

import styles from "./styles.module.css";

export function Sidebar() {
  const urlBanner = "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={urlBanner} />

      <div className={styles.profile}>
        <img className={styles.avatar} src="http://github.com/MurilloIDM.png" />

        <strong>Murillo Isidoro de Medeiros</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}