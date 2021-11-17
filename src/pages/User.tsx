import { createEffect, createSignal, createResource } from 'solid-js';
import { useParams, useLocation, useData } from 'solid-app-router';
import st from './user.module.css';

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      // model: [Accessor<string>, Setter<string>]
      model: [() => any, (v: any) => any];
    }
  }
}

export default (props: any) => {

  const params = useParams();
  // console.log(params.id);
  const location = useLocation();
  console.log(location, location.pathname);
  const data = useData();
  // console.log(data);

  const [name, setName] = createSignal(params?.id);

  function model(el: any, value: any) {
    const [field, setField] = value();
    createEffect(() => (el.value = field() || ''));
    el.addEventListener('input', (e: Event) =>
      setField((e.target as HTMLInputElement).value),
    );
  }

  createEffect(() => {
    document.title = name() || 'User List';
  });

  return (
    <div class={st.user}>
      <h1 className="title">{name() || 'User List'}</h1>
      {params?.id ? (
        <p>
          <label>Name </label>
          <input type="text" use:model={[name, setName]} />
        </p>
      ) : (
        <ul>
          <li><a href="/user/Jane">Jane {data?.lastName.jane}</a></li>
          <li><a href="/user/John">John {data?.lastName.john}</a></li>
        </ul>
      )}
      <code>Path: {location.pathname}</code>
    </div>
  );
};
