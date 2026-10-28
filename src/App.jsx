import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import logo from '../LogoSA.jpeg';

const servicesTech = [
  {
    title: 'Développement d’application web & mobile',
    text: 'Conception, développement, intégration et optimisation d’applications modernes pour les PME, startups et particuliers.',
  },
  {
    title: 'Design graphique',
    text: 'Identité visuelle, branding, supports marketing, visuels corporate et créations orientées performance.',
  },
  {
    title: 'Animation 3D',
    text: 'Motion design, rendu 3D, contenus visuels immersifs pour des projets média, marketing et communication.',
  },
  {
    title: 'Intelligence Artificielle',
    text: 'Solutions IA pour automatisation, analyse, chatbot, optimisation d’entreprise et nouveaux usages créatifs.',
  },
  {
    title: 'Sécurité informatique',
    text: 'Audit, protection des systèmes, sensibilisation et sécurisation des projets pour réduire les risques numériques.',
  },
  {
    title: 'Accompagnement digital',
    text: 'Conseil stratégique, accompagnement des entreprises et PME dans leur transformation digitale et leur présence en ligne.',
  },
];

const academyPrograms = [
  'Développement Web et Mobile',
  'Design graphique',
  'Animation 3D avec Blender',
  'Intelligence Artificielle',
  'Cybersécurité et Hacking',
  'Cours de répétition à domicile',
];

const whyUs = [
  'Accompagnement personnalisé pour les entreprises, PME et particuliers',
  'Approche pratique, professionnelle et orientée résultats',
  'Partenariat solide avec Phoenix Institut',
  'Formations certifiantes et programmes de montée en compétences',
];

const stats = [
  { value: 'Tech', label: 'Solutions digitales' },
  { value: 'Academy', label: 'Apprentissage pratique' },
  { value: 'Certif.', label: 'Programmes reconnus' },
  { value: 'Partenariat', label: 'Phoenix Institut' },
];

const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/237680409437', icon: '✆' },
  { label: 'Téléphone', href: 'tel:+237698419257', icon: '☎' },
  { label: 'Email', href: 'mailto:startapp113@gmail.com', icon: '✉' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@StartApp89', icon: '♪' },
  { label: 'Instagram', href: 'https://www.instagram.com/StartApp89/', icon: '◎' },
];

const steps = [
  {
    number: '01',
    title: 'Analyse',
    text: 'Nous identifions précisément le besoin, les objectifs et les contraintes pour proposer une solution adaptée.',
  },
  {
    number: '02',
    title: 'Conception',
    text: 'Nous élaborons une stratégie claire, une charte visuelle ou un plan de formation cohérent avec vos ambitions.',
  },
  {
    number: '03',
    title: 'Exécution',
    text: 'Nous mettons en œuvre les solutions, formons les équipes et accompagnons le projet jusqu’à la livraison.',
  },
];

const carouselSlides = [
  {
    title: 'Transformation digitale durable',
    text: 'StartApp aide les entreprises à structurer leur présence numérique et à créer de vrais leviers de croissance.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Formation & montée en compétences',
    text: 'Des programmes certifiants et des cours pratiques pour que chacun acquière des compétences réelles et actionnables.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Solutions tech premium',
    text: 'Applications, branding, sécurité, IA et design 3D pour faire grandir votre projet avec une image forte.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
];

const initialForm = {
  name: '',
  email: '',
  service: 'StartApp Tech',
  message: '',
};

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = carouselSlides[activeIndex];

  return (
    <div className="hero-slider">
      <div className="slider-image" style={{ backgroundImage: `url(${slide.image})` }} />
      <div className="slider-overlay" />
      <div className="slider-content">
        <span className="eyebrow">Impact réel</span>
        <h3>{slide.title}</h3>
        <p>{slide.text}</p>
      </div>
      <div className="slider-dots" aria-label="Navigation du carrousel">
        {carouselSlides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={index === activeIndex ? 'dot active' : 'dot'}
            onClick={() => setActiveIndex(index)}
            aria-label={`Afficher le slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Startup innovante • Digital • Formation</span>
            <h1>StartApp transforme vos ambitions digitales en valeur concrète.</h1>
            <p>
              Nous accompagnons les entreprises, PME et particuliers dans la création de solutions numériques,
              le renforcement de leurs compétences et la mise en place de formations certifiantes à forte impact.
            </p>

            <div className="cta-row">
              <a href="https://wa.me/237680409437" className="primary-btn" target="_blank" rel="noreferrer">
                Demander un devis
              </a>
              <a href="#services" className="secondary-btn">
                Découvrir nos services
              </a>
            </div>

            <div className="contact-strip">
              {socials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-badge">
                  <span>{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <section className="logo-band">
        <div className="container band-content">
          <span>StartApp Tech</span>
          <span>StartApp Academy</span>
          <span>Phoenix Institut</span>
          <span>Digital Growth</span>
        </div>
      </section>

      <section className="section showcase">
        <div className="container showcase-grid">
          <div className="feature-card feature-image" />

          <div className="feature-card feature-copy">
            <span className="eyebrow dark">Pourquoi StartApp ?</span>
            <h2>Une vision digitale pensée pour la croissance, la qualité et l’excellence.</h2>
            <ul>
              {whyUs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="section alt-section">
        <div className="container section-header">
          <span className="eyebrow">Nos services</span>
          <h2>StartApp Tech : des services digitaux pour un développement réel.</h2>
        </div>

        <div className="container service-grid">
          {servicesTech.map((service) => (
            <article key={service.title} className="service-card reveal-card">
              <div className="card-icon">⚡</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-header align-left">
          <span className="eyebrow dark">Qui sommes-nous ?</span>
          <h2>Une startup conçue pour l’innovation, la performance et la transmission.</h2>
        </div>

        <div className="container about-grid">
          <div className="about-copy">
            <p>
              StartApp est une startup qui accompagne les entreprises, PME et particuliers dans la mise en place de
              services numériques performants, le développement d’applications et la montée en compétences.
            </p>
            <p>
              Nous allions expertise technique, formation pratique et accompagnement stratégique pour rendre les projets
              plus impactants, plus simples et plus durables.
            </p>
          </div>

          <div className="info-box">
            <h3>Notre mission</h3>
            <p>
              Créer des opportunités de croissance, d’autonomie et de performance grâce à la technologie, l’innovation et
              l’apprentissage continu.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container section-header">
          <span className="eyebrow">Notre méthode</span>
          <h2>Un accompagnement structuré, clair et orienté résultats.</h2>
        </div>

        <div className="container process-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-box reveal-card">
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AcademyPage() {
  return (
    <section className="page-section academy-bg">
      <div className="container">
        <div className="page-intro">
          <span className="eyebrow">StartApp Academy</span>
          <h1>Des formations pratiques, certifiantes et orientées vers le réel.</h1>
          <p>
            StartApp Academy met à disposition des enseignants de la startup pour des cours de répétition à domicile,
            avec une pédagogie adaptée aux besoins de chaque apprenant et selon le contrat établi.
          </p>
        </div>

        <div className="academy-grid page-grid">
          <div className="academy-panel">
            <h3>Répétitions à domicile</h3>
            <p>
              Des séances individualisées, interactives et pratiques, dispensées par des formateurs expérimentés dans le
              cadre d’un accompagnement personnalisé.
            </p>
          </div>

          <div className="academy-panel">
            <h3>Formations certifiantes</h3>
            <ul>
              {academyPrograms.map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="page-section about-bg">
      <div className="container">
        <div className="page-intro narrow">
          <span className="eyebrow">À propos</span>
          <h1>Une startup engagée dans la transformation numérique.</h1>
        </div>

        <div className="about-grid page-grid">
          <div className="about-copy">
            <p>
              StartApp est une startup qui réunit expertise technique, pédagogie, accompagnement stratégique et services
              numériques. Elle intervient dans plusieurs domaines, avec une attention particulière à la qualité des
              prestations et à l’impact réel sur les activités de ses clients.
            </p>
            <p>
              L’objectif est de donner à chaque entreprise, PME et particulier les moyens d’innover, de se développer et
              d’atteindre leurs objectifs grâce à l’usage intelligent des technologies.
            </p>
          </div>

          <div className="info-box">
            <h3>Notre valeur ajoutée</h3>
            <p>
              Une logique d’accompagnement complet : conseil, développement, design, formation, sécurité, et amélioration
              continue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/startapp113@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          _subject: 'Nouvelle demande StartApp',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue.');
      }

      setStatus({
        type: 'success',
        message: 'Merci ! Votre demande a bien été envoyée directement à l’équipe StartApp.',
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Le formulaire ne peut pas être envoyé pour le moment.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page-section contact-page contact-bg">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow dark">Contact</span>
          <h2>Parlons de votre projet.</h2>
          <p>
            Nous sommes disponibles pour vous accompagner dans vos projets digitaux, vos formations et vos solutions de
            croissance.
          </p>

          <div className="contact-list">
            <a href="https://wa.me/237680409437" target="_blank" rel="noreferrer">WhatsApp : +237 680 409 437</a>
            <a href="tel:+237698419257">Téléphone : +237 698 419 257</a>
            <a href="mailto:startapp113@gmail.com">Email : startapp113@gmail.com</a>
            <a href="https://www.instagram.com/StartApp89/" target="_blank" rel="noreferrer">Instagram : @StartApp89</a>
            <a href="https://www.tiktok.com/@StartApp89" target="_blank" rel="noreferrer">TikTok : @StartApp89</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <label>
              Nom complet
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </label>
          </div>

          <div className="input-row">
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
          </div>

          <div className="input-row">
            <label>
              Service souhaité
              <select name="service" value={form.service} onChange={handleChange}>
                <option>StartApp Tech</option>
                <option>StartApp Academy</option>
                <option>Formation certifiante</option>
                <option>Développement web/mobile</option>
                <option>Design graphique</option>
                <option>IA & cybersécurité</option>
              </select>
            </label>
          </div>

          <div className="input-row">
            <label>
              Message
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" required />
            </label>
          </div>

          {status.message ? <p className={`form-status ${status.type}`}>{status.message}</p> : null}

          <button type="submit" className="primary-btn full" disabled={isSubmitting}>
            {isSubmitting ? 'Envoi...' : 'Envoyer ma demande'}
          </button>
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <div className="container nav-wrapper">
            <NavLink to="/" className="brand" aria-label="StartApp home">
              <img src={logo} alt="Logo StartApp" className="brand-logo" />
              <span>StartApp</span>
            </NavLink>

            <nav className="main-nav" aria-label="Navigation principale">
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/about">À propos</NavLink>
              <NavLink to="/academy">Academy</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>

            <a href="https://wa.me/237680409437" className="primary-btn small" target="_blank" rel="noreferrer">
              Réserver un appel
            </a>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <NavLink to="/" className="brand footer-brand">
                <img src={logo} alt="Logo StartApp" className="brand-logo" />
                <span>StartApp</span>
              </NavLink>
              <p>Startup digitale, formation et accompagnement au service de la croissance.</p>
            </div>

            <div>
              <h4>Navigation</h4>
              <ul>
                <li><NavLink to="/about">À propos</NavLink></li>
                <li><NavLink to="/academy">Academy</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href="https://wa.me/237680409437">WhatsApp</a></li>
                <li><a href="tel:+237698419257">Téléphone</a></li>
                <li><a href="mailto:startapp113@gmail.com">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="container footer-bottom">
            <p>© 2026 StartApp. Tous droits réservés.</p>
          </div>
        </footer>

        <a
          href="https://wa.me/237680409437"
          className="whatsapp-float"
          target="_blank"
          rel="noreferrer"
          aria-label="Contacter StartApp sur WhatsApp"
        >
          ✆
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
