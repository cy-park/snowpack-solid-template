import st from './footer.module.css';
import { Link } from 'solid-app-router';
export default () => {
  return (
    <footer class={st.footer + ' flex justify-center items-center gap-8'}> 
      <Link class={st.nav} target="_blank" href="//github.com/cy-park/snowpack-solid-template">view source code</Link>
      <Link class={st.nav} target="_blank" href="//designbycy.com">made by cy</Link>
    </footer>
  );
};
