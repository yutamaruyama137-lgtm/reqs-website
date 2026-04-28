// Header & Footer & shared UI shell
const { useState, useEffect } = React;

window.Header = function Header({ currentPage, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: 'about', label: 'About', jp: '私たちについて' },
    { id: 'services', label: 'Services', jp: 'サービス' },
    { id: 'works', label: 'Works', jp: '事例' },
    { id: 'company', label: 'Company', jp: '会社情報' },
  ];

  const handleNav = (id) => {
    setMenuOpen(false);
    onNav(id);
  };

  // Lock body scroll when menu open + Esc to close
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <a href="#/" onClick={(e) => { e.preventDefault(); handleNav('home'); }} className="brand-mark">
          <img src="assets/reqs-logo.png" alt="" className="brand-logo-img" />
          <span>REQS</span>
        </a>
        <nav className="nav-main">
          {links.map(l => (
            <a key={l.id}
               href={`#/${l.id}`}
               onClick={(e) => { e.preventDefault(); handleNav(l.id); }}
               className={currentPage === l.id ? 'active' : ''}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#/contact"
           onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
           className="nav-cta">Contact →</a>
        <button className="nav-toggle"
                aria-label="メニューを開く"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </header>
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        {links.map(l => (
          <a key={l.id} href={`#/${l.id}`} onClick={(e) => { e.preventDefault(); handleNav(l.id); }}>
            {l.label}
          </a>
        ))}
        <a href="#/contact"
           onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
           className="mobile-menu-cta">Contact →</a>
      </div>
    </>
  );
};

window.Footer = function Footer({ onNav }) {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="footer-massive">
        Translate <em>AI</em><br/>
        into <em>Reality</em>.
      </div>
      <div className="footer-grid">
        <div className="footer-col">
          <h4>REQS</h4>
          <p style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 14, lineHeight: 1.9, color: 'var(--gray-300)' }}>
            私たちはAI時代の翻訳者だ。<br/>
            最新AIを企業の業務に使える形に<br/>
            翻訳して届ける。
          </p>
        </div>
        <div className="footer-col">
          <h4>Sitemap</h4>
          <ul>
            <li><a href="#/about" onClick={(e)=>{e.preventDefault(); onNav('about');}}>About</a></li>
            <li><a href="#/services" onClick={(e)=>{e.preventDefault(); onNav('services');}}>Services</a></li>
            <li><a href="#/works" onClick={(e)=>{e.preventDefault(); onNav('works');}}>Works</a></li>
            <li><a href="#/company" onClick={(e)=>{e.preventDefault(); onNav('company');}}>Company</a></li>
            <li><a href="#/contact" onClick={(e)=>{e.preventDefault(); onNav('contact');}}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#/services" onClick={(e)=>{e.preventDefault(); onNav('services');}}>AX診断</a></li>
            <li><a href="#/services" onClick={(e)=>{e.preventDefault(); onNav('services');}}>業務AX</a></li>
            <li><a href="#/services" onClick={(e)=>{e.preventDefault(); onNav('services');}}>AI定着支援</a></li>
            <li><a href="#/services" onClick={(e)=>{e.preventDefault(); onNav('services');}}>CAIRO</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">X / Twitter</a></li>
            <li><a href="#">Note</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#/privacy" onClick={(e)=>{e.preventDefault(); onNav('privacy');}}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 REQS. All rights reserved.</span>
        <span>東京都 / Tokyo, Japan</span>
      </div>
    </footer>
  );
};

window.PageLoader = function PageLoader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1700);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`page-loader ${gone ? 'gone' : ''}`}>
      <div className="loader-inner">
        <div style={{ marginBottom: 20 }}>
          <img src="assets/reqs-logo.png" alt="REQS"
               style={{ height: 56, filter: 'invert(1) brightness(2)', opacity: 0.9 }} />
        </div>
        <div style={{ fontFamily: 'var(--font-serif-en)', fontStyle: 'italic', fontSize: 22, opacity: 0.8 }}>
          translating&nbsp;<em>AI</em>&nbsp;to&nbsp;reality
        </div>
        <div className="loader-bar"></div>
      </div>
    </div>
  );
};
