import st from 'Pages/home.module.css';

export default () => {
  return (
    <div class={st.home}>
      <h1>Home</h1>
      <h2>Template Features</h2>
      <ul>
      	<li>Snowpack</li>
      	<li>Babel + Typescript</li>
      	<li>Solid App Router</li>
      	<li>GraphQL App</li>
      	<li>REST App</li>
      	<li>PWA Ready</li>
      	<li>CSS Modules</li>
      	<li>Tailwind CSS</li>
      </ul>
    </div>
  );
};
