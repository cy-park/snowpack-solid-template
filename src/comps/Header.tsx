import st from './header.module.css';
import { Link } from 'solid-app-router';
export default () => {
  return (
    <> 
      <header>Snowpack SolidJS PWA Template</header>
      <h3>Tailwind applied on nav menus</h3>
      <nav class="flex justify-center items-center gap-8">
        <Link class={st.nav} href="/">
          Home
        </Link>
        <Link class={st.nav} href="/user">
          User
        </Link>
        <Link class={st.nav} href="/counter">
          Counter
        </Link>
        <Link class={st.nav} href="/api">
          API
        </Link>
      </nav>
    </>
  );
};
