// HOMEPAGE
const { useState: useStateHome, useEffect: useEffectHome, useRef: useRefHome } = React;

window.HomePage = function HomePage({ onNav }) {
  const [scrollY, setScrollY] = useStateHome(0);
  const [mouseX, setMouseX] = useStateHome(0.5);
  const [mouseY, setMouseY] = useStateHome(0.5);

  useEffectHome(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMouse = (e) => {
      setMouseX(e.clientX / window.innerWidth);
      setMouseY(e.clientY / window.innerHeight);
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', onMouse);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  // reveal observer
  useEffectHome(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main data-screen-label="Home">
      {/* HERO */}
      <section className="home-hero tone-dark" data-screen-label="Hero">
        <div className="hero-grid-bg" style={{
          transform: `translate(${(mouseX - 0.5) * 20}px, ${(mouseY - 0.5) * 20}px)`
        }}>
          <LogoMotif width={1800} color="rgba(245,242,234,0.06)" />
        </div>

        <div className="hero-meta-tl">
          <div className="eyebrow">REQS / Editorial No.001</div>
          <div style={{ fontFamily: 'var(--font-serif-en)', fontStyle: 'italic', fontSize: 13, color: 'var(--gray-500)', marginTop: 8 }}>
            Tokyo. April 26, 2026
          </div>
        </div>

        <div className="hero-meta-tr">
          <div style={{ fontFamily: 'var(--font-sans-en)', fontSize: 10, letterSpacing: '0.24em', color: 'var(--gray-500)' }}>
            ISSUE / 一号
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            We are<br/>
            <em style={{ fontFamily: 'var(--font-serif-en)', fontStyle: 'italic', color: 'var(--vermilion)' }}>Translators</em><br/>
            of the AI era<span style={{ color: 'var(--vermilion)' }}>.</span>
          </h1>
          <div className="hero-en-sub">
            私たちは<em>AI時代</em>の<em>翻訳者</em>だ。
          </div>
        </div>

        <div className="hero-scroll-cue">
          <div style={{ fontFamily: 'var(--font-sans-en)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
            Scroll ↓
          </div>
        </div>

        <div className="hero-marquee">
          <div className="marquee-track">
            {[1,2].map(k => (
              <span key={k}>
                AX診断 &nbsp;·&nbsp; 業務AX &nbsp;·&nbsp; AI定着支援 &nbsp;·&nbsp; CAIRO &nbsp;·&nbsp; 私たちはAI時代の翻訳者だ &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO / PROBLEM */}
      <section className="home-manifesto tone-light" data-screen-label="Manifesto">
        <div className="container">
          <div className="manifesto-grid">
            <div className="manifesto-left reveal">
              <div className="eyebrow">§01 — The Problem</div>
              <div className="manifesto-en-large">
                <em>Two truths</em><br/>
                about AI today.
              </div>
            </div>
            <div className="manifesto-right">
              <div className="problem-block reveal delay-1">
                <div className="problem-num">01</div>
                <div className="problem-text">
                  <h3 className="problem-jp">AIの情報が多すぎて、<br/>何が正解かわからない。</h3>
                  <p className="problem-body">
                    毎日のように新しいツールが登場する。試しても自社の業務に使えるかどうかが判断できない。情報の海の中で、本質を見極めることが難しい時代になりました。
                  </p>
                </div>
              </div>
              <div className="problem-block reveal delay-2">
                <div className="problem-num">02</div>
                <div className="problem-text">
                  <h3 className="problem-jp">AIを使いこなすには、<br/>専門技術が必要だ。</h3>
                  <p className="problem-body">
                    モデル性能の理解・プロンプト技術・ドメイン知見が不可欠。社内に人材がいない企業にとって、AIは依然として遠い存在のままです。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* mission */}
          <div className="mission-block reveal">
            <div className="eyebrow">§02 — ミッション</div>
            <h2 className="section-title mission-headline">
              AI活用の知識や技術に依存せず、<br/>
              誰もが常に<span style={{ color: 'var(--vermilion)' }}>最高精度</span>を。
            </h2>
            <p className="lede" style={{ marginTop: 40 }}>
              情報に追われるのではなく、情報を使いこなす企業を創る。私たちREQSは、最新AIの「翻訳者」として、技術と現場の間に立ち、企業のあらゆる業務にAIを浸透させていきます。
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="home-services tone-dark" data-screen-label="Services">
        <div className="container">
          <div className="services-header reveal">
            <div className="eyebrow">§03 — What we do</div>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              知る、変える、育てる、<br/>
              <em style={{ fontFamily: 'var(--font-serif-en)' }}>そして任せる。</em>
            </h2>
          </div>

          <div className="services-stairs">
            {[
              { num: '01', en: 'Diagnosis', jp: 'AX診断', verb: '知る', desc: 'AI活用ポテンシャル診断とロードマップ策定。100以上のツールから最適なものを選定し、現状とゴールの距離を可視化する。', tags: ['ポートフォリオ', 'プロセス診断', 'ロードマップ'] },
              { num: '02', en: 'Operational AX', jp: '業務AX', verb: '変える', desc: 'AI連携・業務自動化・Webアプリ開発・データベース統合。社内に散在するデータを束ね、現場の手触りごとAIに置き換える。', tags: ['業務自動化', 'アプリ開発', 'DB統合'] },
              { num: '03', en: 'Enablement', jp: 'AI定着支援', verb: '育てる', desc: '6ヶ月の伴走で社内自走体制を構築する3フェーズプログラム。設計から定着、内製化までを一気通貫で。', tags: ['研修', 'プロンプト', '推進リーダー'] },
              { num: '04', en: 'CAIRO', jp: 'CAIRO', verb: '任せる', desc: '採用・育成・組織・評価・文化の5領域でAIを組織に浸透させる最上位プラン。任せることで進化し続ける組織へ。', tags: ['採用', '組織文化', 'フルスタック'] },
            ].map((s, i) => (
              <article key={s.num}
                       className="service-row reveal"
                       style={{ '--stair': i, transitionDelay: `${i * 0.08}s` }}
                       onClick={() => onNav('services')}>
                <div className="service-num">{s.num}</div>
                <div className="service-en">
                  <em>{s.en}</em>
                </div>
                <div className="service-jp-block">
                  <div className="service-verb">[ {s.verb} ]</div>
                  <h3 className="service-jp">{s.jp}</h3>
                </div>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="service-arrow">→</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CASE / NUMBERS */}
      <section className="home-numbers tone-paper" data-screen-label="Numbers">
        <div className="container">
          <div className="numbers-header reveal">
            <div className="eyebrow">§04 — Impact in numbers</div>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              <em style={{ fontFamily: 'var(--font-serif-en)' }}>The math</em> of<br/>
              transformation.
            </h2>
            <p className="lede" style={{ marginTop: 32 }}>
              社員150名規模の企業の場合、繰り返し作業・外注費・ITツール管理費の合計で月額約160万円のコスト削減を実現。業務AXサービス費用との対比で、初年度から黒字化が見込めます。
            </p>
          </div>

          <div className="numbers-grid">
            {[
              { val: '¥1.4M', label: '繰り返し作業の人件費削減', sub: '/ 月', ratio: 0.875 },
              { val: '¥500K', label: '業務外注費の削減', sub: '/ 月', ratio: 0.31 },
              { val: '¥300K', label: 'ITツール管理費の削減', sub: '/ 月', ratio: 0.19 },
              { val: '¥1.6M', label: '合計コスト削減効果', sub: '/ 月', highlight: true, ratio: 1.0 },
            ].map((n, i) => (
              <div key={i} className={`number-card reveal ${n.highlight ? 'highlight' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="num-val">{n.val}</div>
                <div className="num-sub">{n.sub}</div>
                <div className="num-bar"><span style={{ width: `${n.ratio * 100}%` }}></span></div>
                <div className="num-label">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="home-values tone-dark" data-screen-label="Values">
        <div className="container">
          <div className="values-intro reveal">
            <div className="eyebrow">§05 — Six values</div>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              <em style={{ fontFamily: 'var(--font-serif-en)' }}>Six axes</em><br/>
              that hold us up.
            </h2>
          </div>

          <ol className="values-list">
            {[
              { en: 'Excitement', kanji: 'ワクワク', body: '心が動く熱を起点にしろ', sub: 'による発想' },
              { en: 'Essence', kanji: '本質', body: '前提を疑い、構造を捉え、解像度を上げろ', sub: 'によるハック' },
              { en: 'Kindness', kanji: '優しさ', body: '人間としての魅力で顧客と繋がれ', sub: 'による出会い' },
              { en: 'Wit × Skill', kanji: '知恵×技術', body: '理想を現実にする力を身につけろ', sub: 'による実現' },
              { en: 'Speed', kanji: '効率×量', body: '最速最善の結果を追い求め、止まるな', sub: 'によるスピード' },
              { en: 'Resolve', kanji: '自覚', body: '自分が世界一になる覚悟を持て', sub: 'による世界一' },
            ].map((v, i) => (
              <li key={i} className="value-item reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <span className="value-num">0{i+1}</span>
                <span className="value-en"><em>{v.en}</em></span>
                <span className="value-jp">「{v.kanji}」<small>{v.sub}</small></span>
                <span className="value-body">— {v.body}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta tone-light" data-screen-label="CTA">
        <div className="container">
          <div className="cta-block reveal">
            <div style={{ fontFamily: 'var(--font-serif-en)', fontStyle: 'italic', fontSize: 'clamp(28px, 4vw, 56px)', color: 'var(--vermilion)', marginBottom: 24 }}>
              Ready to translate?
            </div>
            <h2 className="section-title">
              AIを「使える形」に<br/>
              翻訳しに行きます。
            </h2>
            <div style={{ display: 'flex', gap: 16, marginTop: 56, flexWrap: 'wrap' }}>
              <button className="cta-primary" onClick={() => onNav('contact')}>
                お問い合わせ <span>→</span>
              </button>
              <button className="cta-secondary" onClick={() => onNav('services')}>
                サービスを見る
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
