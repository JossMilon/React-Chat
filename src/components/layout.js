import { UserAuth } from "../context";
import styles from "./layout.module.scss";
import Welcome from "../components/welcome";
import Form from "../components/form";
import MessagesList from "./messagesList";

const Layout = () => {
  const { user } = UserAuth();
  return (
    <main className={styles.main}>
      {!user ? <Welcome user={user} /> : <MessagesList />}

      {user && <Form />}
    </main>
  );
};

export default Layout;
