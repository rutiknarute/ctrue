import Link from 'next/link';

const features = [
  { icon: '≋', title: 'Live transcription', text: 'Hear the conversation as clear text.' },
  { icon: '▣', title: 'Screen context', text: 'One shortcut to read what is on your screen.' },
  { icon: '↗', title: 'Quick answers', text: 'Short, useful answers when you ask.' },
];

export default function Home() {
  return <main id="main">
    <section className="hero wrap">
      <div className="eyebrow">For macOS &amp; Windows</div>
      <h1>Think <span className="accent">clearly.</span></h1>
      <p className="lead">A simple desktop assistant for practice and live conversations.</p>
      <div className="actions">
        <Link className="button primary" href="/downloads">Get Ctrue</Link>
        <Link className="button" href="/dashboard">Open workspace</Link>
      </div>
    </section>
    <section className="wrap section" id="features">
      <div className="feature-grid">
        {features.map(f => <article key={f.title}>
          <span className="feature-icon" aria-hidden="true">{f.icon}</span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </article>)}
      </div>
    </section>
  </main>;
}
