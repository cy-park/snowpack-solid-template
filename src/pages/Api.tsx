import { Component, createSignal, onMount } from 'solid-js';
import axios from 'redaxios';
import { request, gql } from 'graphql-request';
import st from './api.module.css';

export default () => {

  const [img, setImg] = createSignal(undefined);
  const [jobs, setJobs] = createSignal([]);
  let textArea;

  async function fetchCat() {
    const res = await axios('https://thatcopy.pw/catapi/rest/'); // can chain with `.then()`
    console.log('catapi', res);
    setImg(res.data?.url);
  }

  async function fetchGraphQLJobs() {
    const res = await request(
      'https://api.graphql.jobs',
      gql`
        {
          jobs {
            title
            cities {
              name
            }
          }
        }
      `,
    );
    console.log('gra', res);
    setJobs(res.jobs);
  }

  function getManifest() {
    return new Promise(resolve => {
      axios('./manifest.webmanifest').then((res) => {
        console.log('manifest', res);
        resolve(res)
      });
    })
  }

  async function showManifest() {
    textArea.innerHTML = JSON.stringify(await getManifest());
  }

  fetchCat();
  fetchGraphQLJobs();

  return (
    <div class={st.api}>
      <h1>API</h1>
      <h2>Cat API</h2>
      <button onClick={fetchCat}>Refresh</button>
      <img src={img()} />
      <h2>GraphQL Jobs</h2>
      <ul>
        {jobs().map(j=>
          <li>{j.title} | <span>{j.cities[0]?.name}</span></li>
        )}
      </ul>
      <h2>Web Manifest</h2>
      <button onClick={showManifest}>Get Manifest</button>
      <textarea ref={textArea} readonly />
    </div>
  );
};
