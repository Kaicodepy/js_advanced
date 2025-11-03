import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { enviromentsComponent } from './concepts/01-enviroments'
import { callbacksComponent } from './concepts/02-callbaks'
import { promiseComponent } from './concepts/promises'
import { promiseRaceComponent } from './concepts/promise-race'
import { asyncComponent } from './concepts/05-async'
import { asyncAwaitComponent } from './concepts/async-await'
import { asyncAwait2Component } from './concepts/07-async-await'
import { forAwaitComponent } from './concepts/08-for-await'
import { generatorFunctionComponent } from './concepts/09-generator-function'
import { generatorAsyncComponent } from './concepts/10-generator-async'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>

  </div>
`
const element = document.querySelector('.card');

// enviromentsComponent( element );
//callbacksComponent(element);
// promiseComponent(element); 
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwait2Component(element);
// forAwaitComponent(element);
// generatorFunctionComponent(element); 
generatorAsyncComponent(element);