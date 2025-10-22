// src/App.jsx
import React from 'react';
import './styles.css';

/*
  Portfólio - Karina Nicoleti
  Simples, moderno, dark mode.
*/

const name = 'Karina Nicoleti';
const email = 'karinamoraes51@gmail.com';
const phone = '(14) 99883-9126';
const githubUrl = 'https://github.com/KarinaNicoleti';
const linkedinUrl = 'https://www.linkedin.com/in/karina-moraes-nicoleti-b51a88188/';

export default function App() {
  const [repos, setRepos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/KarinaNicoleti/repos?per_page=100&sort=updated');
        if (!res.ok) throw new Error('Erro ao buscar repositórios');
        const data = await res.json();
        const filtered = (data || []).filter(r => !r.fork).slice(0, 8);
        setRepos(filtered);
      } catch (err) {
        setError(err.message);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <div className="avatar">KN</div>
          <div>
            <h1>{name}</h1>
            <p className="subtitle">Desenvolvedora | Analista de Sistemas</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#about">Sobre</a>
          <a href="#formation">Formação</a>
          <a href="#experience">Experiência</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <main className="container">
        <section id="about" className="section hero">
          <div>
            <h2>Olá, eu sou <span className="accent">{name}</span></h2>
            <p className="lead">
              Analista de Sistemas (UNOPAR) em formação, com experiência em desenvolvimento web e sistemas.
              Trabalho com C#, Python, Delphi, JavaScript e bancos de dados SQL / MySQL.
              Foco em soluções práticas, qualidade e boa comunicação.
            </p>
            <div className="cta">
              <a href="#projects" className="btn primary">Meus projetos</a>
              <a href="#contact" className="btn">Contato</a>
            </div>
          </div>

          <aside className="card">
            <h3>Resumo Rápido</h3>
            <ul>
              <li>Formação: Análise e Desenvolvimento de Sistemas (UNOPAR — 2025)</li>
              <li>Atuação: desenvolvimento web, manutenção e integração de sistemas</li>
              <li>Soft skills: comunicação, empatia, trabalho em equipe</li>
            </ul>
          </aside>
        </section>

        <section id="formation" className="section">
          <h3>Formação</h3>
          <div className="grid-2">
            <div>
              <strong>UNOPAR</strong> — Análise e Desenvolvimento de Sistemas (conclusão 2025)
            </div>
            <div>
              <strong>ETEC Comendador João Rays</strong> — Desenvolvimento de Sistemas (2023)
            </div>
          </div>

          <h4 style={{ marginTop: '1rem' }}>Competências</h4>
          <div className="skills">
            {[
              'C#', 'Python', 'Delphi', 'JavaScript', 'HTML', 'CSS',
              'Angular', 'Ionic', 'SQL', 'MySQL', 'Git'
            ].map(skill => (
              <span key={skill} className="skill">{skill}</span>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h3>Experiência Profissional</h3>

          <div className="job">
            <h4>Analista de Sistemas — Zella Sistemas</h4>
            <p className="muted">07/2025 – Atualmente</p>
            <ul>
              <li>Desenvolvimento, manutenção e integração de sistemas.</li>
              <li>Levantamento de requisitos e suporte técnico.</li>
            </ul>
          </div>

          <div className="job">
            <h4>Auxiliar de Escritório — Escritório de Contabilidade de Barra Bonita</h4>
            <p className="muted">08/2024 - 01/2025</p>
            <p>Atividades: lançamento e conferência de notas fiscais, apuração de impostos, emissão de guias e transmissão de obrigações acessórias (SPED, REINF).</p>
          </div>

          <div className="job">
            <h4>Operador de Pedágio — Via Paulista</h4>
            <p className="muted">02/2021 - 04/2023</p>
            <p>Atendimento ao público e operações de cobrança.</p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="projects-header">
            <h3>Projetos do GitHub</h3>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="link">Ver no GitHub</a>
          </div>

          {loading && <p className="muted">Carregando projetos...</p>}
          {error && <p className="error">{error}</p>}

          <div className="grid-2 gap">
            {!loading && repos && repos.length === 0 && (
              <p className="muted">Nenhum repositório público encontrado.</p>
            )}
            {!loading && repos && repos.map(repo => (
              <a key={repo.id} className="project" href={repo.html_url} target="_blank" rel="noreferrer">
                <h4>{repo.name}</h4>
                <p className="muted">{repo.description || 'Sem descrição'}</p>
                <div className="meta">
                  <span>★ {repo.stargazers_count}</span>
                  <span>Forks: {repo.forks_count}</span>
                  <span>{repo.language || '—'}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section card">
          <h3>Contato</h3>
          <div className="grid-2">
            <div>
              <p><strong>{name}</strong></p>
              <p>{email}</p>
              <p>{phone}</p>

              <p style={{ marginTop: '8px' }}>
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="link">LinkedIn</a> •{' '}
                <a href={githubUrl} target="_blank" rel="noreferrer" className="link">GitHub</a>
              </p>
            </div>

            <div>
              <p className="muted">
                Quer que eu te envie o código pronto em um repositório ou um ZIP com instruções de deploy?
              </p>
              <div style={{ marginTop: '10px' }}>
                <a
                  className="btn"
                  href={`mailto:${email}?subject=Contato%20pelo%20portf%C3%B3lio`}
                  aria-label="Enviar e-mail para Karina"
                >
                  Enviar e-mail
                </a>
                <a className="btn" href={githubUrl} target="_blank" rel="noreferrer">Ver GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        Feito com ❤ • {name} • {new Date().getFullYear()}
      </footer>
    </div>
  );
}
