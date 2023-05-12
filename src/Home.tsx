import { useState } from 'react'
import Logo from './assets/diagrama.png'

import './App.css'

function Home() {
  

  return (
    <>
      <div className="superior">
       <h1 className='titulo'>O Diagrama de Venn</h1>
      </div>
      
      
      <div className="card">
       <img className="logo"src={Logo} alt="Diagramaa de Venn"/>
       <p className="texto">O matemático alemão de origem russa, George F. L. P. Cantor (1845-1918), ou, mais simplesmente, Cantor, como é conhecido, foi um dos criadores da moderna Teoria dos Conjuntos.

Os conceitos matemáticos inovadores propostos por Cantor enfrentaram resistência por parte da comunidade matemática da época. Os matemáticos contemporâneos, por seu lado, aceitam plenamente o trabalho desenvolvido por Cantor, complementado pela teoria dos conjuntos de Zermelo-Fraenkel, desenvolvida pelos matemáticos Ernst F. F. Zermelo (1871-1953) e Abraham A. H. Fraenkel (1891-1965), reconhecendo a Teoria dos Conjuntos como uma mudança de paradigma da maior importância. O eminente matemático alemão David Hilbert (1862-1943) resumiu com muita propriedade essa criação:

“Ninguém poderá nos expulsar do Paraíso que Cantor criou.”

A ideia da Teoria dos Conjuntos era reformular toda a Matemática na linguagem dos conjuntos, o que em grande parte foi feito. Este projeto teve seus percalços, principalmente devido ao aparecimento de paradoxos aparentemente incontornáveis, mas sua ideia geral permanece útil.

John Venn (1834-1923) foi um matemático inglês, tendo-se licenciado na Universidade de Cambridge, onde depois ensinou Lógica e Teoria das Probabilidades. Publicou, em 1866, Logic of Chance, que foi considerado muito original e influenciou o desenvolvimento da Estatística. Em 1881, lançou Symbolic Logic e, em 1889, The Principles of Empirical Logic</p>
<p className="texto">Venn introduziu os diagramas em um trabalho de lógica formal publicado em 1880 na Philosophical Magazine and Journal of Science, intitulado Da representação mecânica e diagramática de proposições e raciocínios.

Embora a primeira forma de representação geométrica de silogismos seja frequentemente atribuída ao matemático alemão Gottfried Wilhelm Leibniz (1646-1716), e tenha sido retomada já durante o século XIX pelos matemáticos britânicos George Boole (1815-1864) e Augustus De Morgan (1806-1871), o método de Venn superava os sistemas anteriores em termos de clareza e simplicidade, ao ponto de ser aceito como método padrão ao fim de algum tempo.

O próprio Venn não se referia aos diagramas como sendo da sua autoria, mas sim como círculos eulerianos, fazendo referência aos diagramas criados pelo matemático suíço Leonhard Euler (1707-1783), motivo pelo qual alguns autores se referem a diagramas de Venn como diagramas de Euler-Venn. No parágrafo introdutório do seu artigo, Venn afirmou:

“Esquemas de representação diagramática têm sido tão familiarmente introduzidos nos tratados de Lógica durante o último século, que se pode supor que muitos leitores, mesmo aqueles que não fizeram qualquer estudo profissional de Lógica, possam ter familiaridade com a noção geral de tais objetos. Dentre tais esquemas, apenas um - aquele comumente chamado ‘círculos eulerianos’, encontrou aceitação geral...”

A primeira referência escrita conhecida do termo diagrama de Venn surgiu apenas em 1918, no livro A Survey of Symbolic Logic do lógico Clarence Irving Lewis (1883-1964).

No século XX, os diagramas para representação de conjuntos passaram por novos desenvolvimentos, os quais fogem ao escopo destas reflexões (o leitor que tiver interesse em se aprofundar sobre esse assunto pode acessar</p>
       
      </div>
      
    </>
  )
  
}

export default Home
