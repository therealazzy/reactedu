import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Write } from './components/Write.js';
import {List} from './components/List.js';
import {Spell} from './components/Spell.js'
import {Flashcards} from './components/Flashcards.js'
import {Test} from './components/Test.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/Write" element={<Write/>}/>
        <Route path="/List" element={<List/>}/>
        <Route path="/Spell" element={<Spell/>}/>
        <Route path="/Flashcards" element={<Flashcards/>}/>
        <Route path="/Test" element={<Test/>}/>
        </Routes>
  </BrowserRouter>
);



reportWebVitals(console.log);
