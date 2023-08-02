import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Contactus } from './Contactus';
import { ListEmployee } from './ListEmployee';
import {Nopage} from './Nopage'
import {Employee} from './Employee'
import {Employeeedit} from './Employeeedit'
import {Employeedel} from './Employeedel'
import { Tour } from './Tour';
import { Touredit } from './Touredit';
import {Person} from './Person'
import {Tourdel} from './Tourdel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Personedit } from './Personedit';
import { Persondel } from './Persondel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="Home" element={<Home />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="ListEmployee" element={<ListEmployee />} />
          <Route path="emp/:id" element={<Employee/>} />
          <Route path="empedit/:id" element={<Employeeedit/>} />
          <Route path="empdel/:id" element={<Employeedel/>} />

          <Route path="Tour" element={<Tour />} />
          <Route path="touredit/:id" element={<Touredit/>} />
          <Route path="tourdel/:id" element={<Tourdel/>} />
          
          <Route path="Person" element={<Person />} />
          <Route path="personedit/:id" element={<Personedit/>} />
          <Route path="persondel/:id" element={<Persondel/>} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
