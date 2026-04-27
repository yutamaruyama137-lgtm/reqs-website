// SPA routing root — hash-based navigation across pages.
const { useState: useAppState, useEffect: useAppEffect } = React;

function getRouteFromHash() {
  const m = (location.hash || '').match(/^#\/(\w+)/);
  return m ? m[1] : 'home';
}

window.App = function App() {
  const [page, setPage] = useAppState(getRouteFromHash());

  useAppEffect(() => {
    const onHash = () => {
      setPage(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (id) => {
    const target = id === 'home' ? '#/' : `#/${id}`;
    if (location.hash === target) {
      setPage(id);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      location.hash = target;
    }
  };

  let view;
  switch (page) {
    case 'about':    view = <AboutPage onNav={navigate} />; break;
    case 'services': view = <ServicesPage onNav={navigate} />; break;
    case 'works':    view = <WorksPage onNav={navigate} />; break;
    case 'company':  view = <CompanyPage onNav={navigate} />; break;
    case 'contact':  view = <ContactPage onNav={navigate} />; break;
    case 'privacy':  view = <PrivacyPage onNav={navigate} />; break;
    case 'home':
    default:         view = <HomePage onNav={navigate} />;
  }

  return (
    <>
      <PageLoader />
      <Header currentPage={page} onNav={navigate} />
      {view}
      <Footer onNav={navigate} />
    </>
  );
};
