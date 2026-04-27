// All other pages in one file
const { useState: useS, useEffect: useE } = React;

// Reveal hook
function useReveal() {
  useE(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// =============== ABOUT (会社概要 + 私たちについて) ===============
window.AboutPage = function AboutPage({ onNav }) {
  useReveal();
  return (
    <main data-screen-label="About">
      <section className="page-hero tone-dark">
        <div className="container">
          <div className="page-hero-meta">
            <div className="eyebrow">§ About — 私たちについて</div>
            <div className="page-hero-num">01 / 06</div>
          </div>
          <h1 className="page-hero-title">
            <em style={{ fontFamily: 'var(--font-serif-en)' }}>Translators</em><br/>
            of <span style={{ color: 'var(--vermilion)' }}>the AI era.</span>
          </h1>
          <p className="page-hero-lede">
            私たちREQSは、AI導入とDXコンサルティングを通じて「最新AIを企業の業務に使える形に翻訳して届ける」ことをミッションとした会社です。マーケティング事業とAX事業を二つの軸に、戦略から実装、定着まで一気通貫で支援します。
          </p>
        </div>
      </section>

      <section className="about-story tone-light">
        <div className="container">
          <div className="about-story-grid">
            <div className="reveal">
              <div className="eyebrow">§ Why we exist</div>
              <h2 className="section-title" style={{ marginTop: 24 }}>
                技術と現場の<br/>あいだに、橋を架ける。
              </h2>
            </div>
            <div className="reveal delay-1">
              <p className="lede" style={{ marginBottom: 32 }}>
                AIの進化は、企業の業務を根本から変えうる力を持っています。しかし「使えるAI」と「使いこなせる組織」の間には、深く広い谷があります。
              </p>
              <p className="lede" style={{ marginBottom: 32 }}>
                その谷を埋めるのが、私たち翻訳者の仕事です。最新の技術を、現場の言葉に翻訳する。複雑な可能性を、明日の業務フローに翻訳する。
              </p>
              <p className="lede">
                技術に振り回される時代を終わらせ、技術を使いこなす企業を増やしていく。それがREQSの存在理由です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-pillars tone-dark">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 80 }}>
            <div className="eyebrow">§ Two pillars — 二つの事業軸</div>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              REQSの<em style={{ fontFamily: 'var(--font-serif-en)' }}>軸足</em>。
            </h2>
          </div>
          <div className="pillars-grid">
            <div className="pillar reveal">
              <div className="pillar-num">A</div>
              <h3 className="pillar-title">マーケティング事業</h3>
              <p className="pillar-body">
                認知獲得から、リード化、商談化まで。AIを駆使したマーケティングオートメーションで、再現性のある集客の仕組みを構築します。
              </p>
            </div>
            <div className="pillar reveal delay-1">
              <div className="pillar-num">B</div>
              <h3 className="pillar-title">AX事業</h3>
              <p className="pillar-body">
                AI Transformation。診断から実装、定着、そして組織全体のAI化まで。社内のあらゆる業務にAIを浸透させる、四段階のサービスで支援します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand onNav={onNav} />
    </main>
  );
};

// =============== SERVICES (詳細) ===============
window.ServicesPage = function ServicesPage({ onNav }) {
  useReveal();
  const [active, setActive] = useS(0);
  const services = [
    {
      num: 'A.01', en: 'AX Diagnosis', jp: 'AX診断（コンサルティング）', verb: '知る', pillar: 'AX',
      tagline: 'Where do you stand with AI?',
      desc: 'ITポートフォリオ最適化・業務プロセス診断・システム統合・データ利活用戦略。100以上のツールから最適なものを選定し、現状のAI活用ポテンシャルとロードマップを提示します。',
      bullets: ['ITポートフォリオ最適化', '業務プロセス診断', 'システム統合戦略', 'データ利活用ロードマップ', '100+ツールから最適化選定'],
    },
    {
      num: 'A.02', en: 'In-house AI Install', jp: '社内AI導入', verb: '始める', pillar: 'AX',
      tagline: 'Bring AI safely inside.',
      desc: '安全なAIを社内導入し、社員一人当たりの負担を削減。AIモデル選定・利用ガイドライン策定・効果計測・ローカルLLM構築までを一気通貫で支援します。',
      bullets: ['AIモデル比較・選定', '利用ガイドライン策定', 'KPI設計・効果計測', 'ローカルLLM構築（任意）', 'ハイブリッド運用設計'],
    },
    {
      num: 'A.03', en: 'Automation', jp: '業務自動化', verb: '変える', pillar: 'AX',
      tagline: 'Reshape every workflow.',
      desc: 'AI連携・業務自動化・Webアプリ開発・データベース統合。社内に散在するデータを一元化し、繰り返し作業をゼロにする。AIエージェントという選択肢も。',
      bullets: ['AI連携・業務自動化', 'LINEミニアプリ開発', '業務効率化ツール開発', 'AIエージェント設計・運用', 'データベース統合'],
    },
    {
      num: 'A.04', en: 'AI Enablement', jp: '定着支援', verb: '育てる', pillar: 'AX',
      tagline: 'From dependency to autonomy.',
      desc: '6ヶ月伴走で、社内自走体制を構築する。設計→定着→内製化の3フェーズプログラムで、AIを使いこなす組織文化までデザインします。',
      bullets: ['Phase 01 設計：業務棚卸し→AI活用マップ', 'Phase 02 定着：ハンズオン研修・プロンプトライブラリ', 'Phase 03 内製化：推進リーダー育成', '6ヶ月の伴走プログラム', '社内自走体制の確立'],
    },
    {
      num: 'B.01', en: 'Web Marketing', jp: 'WEBマーケティング', verb: '任せる', pillar: 'AIBPO',
      tagline: 'Outsource the operation, keep the strategy.',
      desc: 'AIBPO（AI Business Process Outsourcing）の中核サービス。AIを駆使したマーケティングオートメーションで、再現性のある集客の仕組みを業務代行で構築・運用します。',
      bullets: ['SNS運用：企画・制作・投稿・分析', '広告運用：Google / Meta / TikTok / LinkedIn', 'AI生成クリエイティブ + ABテスト', '月次戦略書 + 打ち手提案', '運用ダッシュボード'],
    },
  ];

  return (
    <main data-screen-label="Services">
      <section className="page-hero tone-dark">
        <div className="container">
          <div className="page-hero-meta">
            <div className="eyebrow">§ Services — 提供サービス</div>
            <div className="page-hero-num">02 / 06</div>
          </div>
          <h1 className="page-hero-title">
            <em style={{ fontFamily: 'var(--font-serif-en)' }}>AX</em> ×{' '}
            <em style={{ fontFamily: 'var(--font-serif-en)', color: 'var(--vermilion)' }}>AIBPO</em><br/>
            two pillars.
          </h1>
          <p className="page-hero-lede">
            「内製化を支援するAX」と「業務代行で外部化するAIBPO」の2軸で、企業のAI Transformationを設計・実装・運用まで一気通貫で伴走します。
          </p>
        </div>
      </section>

      <section className="services-tabs tone-light">
        <div className="container">
          <nav className="service-tab-nav reveal">
            {services.map((s, i) => (
              <button key={i}
                      className={`pillar-${s.pillar.toLowerCase()} ${active === i ? 'active' : ''}`}
                      onClick={() => setActive(i)}>
                <span className="tab-num">{s.num}</span>
                <span className="tab-jp">{s.jp}</span>
                <span className="tab-en"><em>{s.en}</em></span>
              </button>
            ))}
          </nav>

          <article className="service-detail reveal" key={active}>
            <div className="service-detail-meta">
              <div className="eyebrow">[ {services[active].verb} ]</div>
              <div className="service-detail-en">
                <em style={{ fontFamily: 'var(--font-serif-en)', fontStyle: 'italic' }}>
                  {services[active].tagline}
                </em>
              </div>
            </div>
            <div className="service-detail-body">
              <h2 className="section-title" style={{ marginBottom: 32 }}>{services[active].jp}</h2>
              <p className="lede" style={{ marginBottom: 48 }}>{services[active].desc}</p>
              <ul className="service-bullets">
                {services[active].bullets.map((b, i) => (
                  <li key={i}><span>{String(i+1).padStart(2,'0')}</span>{b}</li>
                ))}
              </ul>
            </div>
            <aside className="service-detail-aside">
              <div className="service-aside-pattern">
                <LogoMotif width={300} color="var(--vermilion)" opacity={0.6} />
              </div>
              <button className="cta-primary" onClick={() => onNav('contact')}>
                このサービスを相談する <span>→</span>
              </button>
            </aside>
          </article>
        </div>
      </section>

      <section className="service-flow tone-paper">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 80 }}>
            <div className="eyebrow">§ Customer Journey</div>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              <em style={{ fontFamily: 'var(--font-serif-en)' }}>One path,</em><br/>
              four stages.
            </h2>
          </div>
          <div className="flow-line">
            {['知る', '変える', '育てる', '任せる'].map((step, i) => (
              <div key={i} className="flow-node reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="flow-num">0{i+1}</div>
                <div className="flow-step">{step}</div>
                <div className="flow-en"><em>{['Diagnose', 'Build', 'Enable', 'Entrust'][i]}</em></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand onNav={onNav} />
    </main>
  );
};

// =============== WORKS (事例 / ブログ) ===============
window.WorksPage = function WorksPage({ onNav }) {
  useReveal();
  const works = [
    { tag: 'CASE', cat: '製造業 / 大手メーカー', title: '見積作成プロセスを82%自動化、月160時間を創出', body: '営業部門の見積もり作成を、過去案件のRAGとプロンプトテンプレートで自動化。属人化していたノウハウを構造化し、新人でも即戦力化。', meta: '業務AX × AI定着支援', date: '2026.03' },
    { tag: 'CASE', cat: '小売 / EC事業者', title: 'カスタマーサポートをAIエージェント化', body: '問い合わせ対応の一次受けをAIに任せ、有人対応は質問の本質に集中。CSAT 12pt向上、平均応答時間は1/4に。', meta: 'CAIRO × 業務AX', date: '2026.02' },
    { tag: 'CASE', cat: 'SaaS / スタートアップ', title: '採用面接の事前評価をAIで標準化', body: '一次選考の評価バラつきを、評価軸の定義とAI面接で解消。母集団形成から内定承諾までのリードタイムを40%短縮。', meta: 'CAIRO', date: '2026.01' },
    { tag: 'BLOG', cat: 'Insights', title: 'AIを「導入する」と「定着させる」は別の仕事だ', body: '導入したのに使われないAIツールが量産される時代に、定着のためのフレームワークを公開する。', meta: '千田 広成 / CEO', date: '2026.04' },
    { tag: 'BLOG', cat: 'Field Notes', title: 'プロンプト・ライブラリは社内文化のスナップショットだ', body: '「どう聞くか」が共有資産になることで、思考のクセまで組織化される。', meta: '丸山 侑太 / COO', date: '2026.03' },
    { tag: 'BLOG', cat: 'Method', title: 'AX診断で本当に見るべき5つの兆候', body: '診断100社から見えた、AI活用が進む組織と進まない組織の決定的な違い。', meta: 'REQS編集部', date: '2026.02' },
  ];
  return (
    <main data-screen-label="Works">
      <section className="page-hero tone-dark">
        <div className="container">
          <div className="page-hero-meta">
            <div className="eyebrow">§ Works & Stories — 事例と記録</div>
            <div className="page-hero-num">03 / 06</div>
          </div>
          <h1 className="page-hero-title">
            数字と物語、<br/>
            <em style={{ fontFamily: 'var(--font-serif-en)', color: 'var(--vermilion)' }}>both ways.</em>
          </h1>
          <p className="page-hero-lede">
            実装で得た知見と、現場で起きた変化。事例とエッセイの両方で、AI翻訳の現実をお届けします。
          </p>
        </div>
      </section>

      <section className="works-list tone-light">
        <div className="container">
          <div className="works-filter reveal">
            <button className="active">All</button>
            <button>Case</button>
            <button>Blog</button>
            <button>Method</button>
          </div>
          <div className="works-grid">
            {works.map((w, i) => (
              <article key={i} className="work-card reveal" style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="work-card-image">
                  <div className="work-image-placeholder">
                    <LogoMotif width={160} color="var(--gray-300)" opacity={0.5} />
                    <span className="placeholder-tag">image / {w.cat}</span>
                  </div>
                  <div className="work-tag">{w.tag}</div>
                </div>
                <div className="work-card-body">
                  <div className="work-meta">
                    <span>{w.cat}</span>
                    <span>·</span>
                    <span>{w.date}</span>
                  </div>
                  <h3 className="work-title">{w.title}</h3>
                  <p className="work-body">{w.body}</p>
                  <div className="work-bottom">
                    <span className="work-attribution">{w.meta}</span>
                    <span className="work-arrow">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand onNav={onNav} />
    </main>
  );
};

// =============== COMPANY (会社情報 / 法人情報) ===============
window.CompanyPage = function CompanyPage({ onNav }) {
  useReveal();
  return (
    <main data-screen-label="Company">
      <section className="page-hero tone-dark">
        <div className="container">
          <div className="page-hero-meta">
            <div className="eyebrow">§ Company — 法人情報</div>
            <div className="page-hero-num">04 / 06</div>
          </div>
          <h1 className="page-hero-title">
            Company<br/>
            <em style={{ fontFamily: 'var(--font-serif-en)', color: 'var(--vermilion)' }}>Information.</em>
          </h1>
        </div>
      </section>

      <section className="company-info tone-light">
        <div className="container">
          <dl className="company-table">
            {[
              ['屋号', 'REQS', 'REQS'],
              ['設立', '2024年', 'Founded 2024'],
              ['所在地', '東京都', 'Tokyo, Japan'],
              ['事業内容', 'AI導入・DXコンサルティング / マーケティング事業 / AX事業', 'AI implementation, DX consulting, Marketing & AX'],
              ['お問い合わせ', '本サイトのお問い合わせフォームより', 'Contact form on this site'],
            ].map(([k, v, en], i) => (
              <div key={i} className="company-row reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <dt>{k}</dt>
                <dd>
                  <div>{v}</div>
                  <div className="company-en"><em>{en}</em></div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTABand onNav={onNav} />
    </main>
  );
};

// =============== CONTACT ===============
window.ContactPage = function ContactPage({ onNav }) {
  useReveal();
  const [form, setForm] = useS({ name: '', company: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useS(false);
  const services = ['AX診断について', '業務AXについて', 'AI定着支援について', 'CAIROについて', 'その他のご相談'];

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main data-screen-label="Contact">
      <section className="page-hero tone-dark">
        <div className="container">
          <div className="page-hero-meta">
            <div className="eyebrow">§ Contact — お問い合わせ</div>
            <div className="page-hero-num">05 / 06</div>
          </div>
          <h1 className="page-hero-title">
            <em style={{ fontFamily: 'var(--font-serif-en)' }}>Let's translate</em><br/>
            <span style={{ color: 'var(--vermilion)' }}>your AI.</span>
          </h1>
          <p className="page-hero-lede">
            まずはお気軽にご相談ください。AI活用の可能性を、現状からお話しします。
          </p>
        </div>
      </section>

      <section className="contact-form-section tone-light">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-aside reveal">
              <div className="eyebrow">§ Reach us</div>
              <h2 className="section-title" style={{ marginTop: 24, marginBottom: 48 }}>
                直接、<br/>話しに来てください。
              </h2>
              <div className="contact-info">
                <div className="contact-info-row">
                  <div className="info-label">Form</div>
                  <div className="info-value">右のフォームよりお気軽に</div>
                </div>
                <div className="contact-info-row">
                  <div className="info-label">Response</div>
                  <div className="info-value">2 business days</div>
                </div>
                <div className="contact-info-row">
                  <div className="info-label">Hours</div>
                  <div className="info-value">Mon–Fri 10:00–19:00 JST</div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrap reveal delay-1">
              {!submitted ? (
                <form className="contact-form" onSubmit={onSubmit}>
                  <div className="form-row">
                    <label>お名前 <span>*</span></label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="山田 太郎" />
                  </div>
                  <div className="form-row">
                    <label>会社名 <span>*</span></label>
                    <input type="text" required value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="例：◯◯ Inc." />
                  </div>
                  <div className="form-row">
                    <label>メールアドレス <span>*</span></label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="taro@example.com" />
                  </div>
                  <div className="form-row">
                    <label>ご相談内容 <span>*</span></label>
                    <div className="form-radio-group">
                      {services.map(s => (
                        <label key={s} className={`form-radio ${form.service === s ? 'on' : ''}`}>
                          <input type="radio" name="service" value={s} checked={form.service === s} onChange={e => setForm({...form, service: e.target.value})} />
                          <span>{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-row">
                    <label>詳細</label>
                    <textarea rows={6} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="現状の課題やご要望を、できるだけ具体的にお聞かせください。"></textarea>
                  </div>
                  <button type="submit" className="cta-primary">送信する <span>→</span></button>
                </form>
              ) : (
                <div className="form-thanks">
                  <div style={{ fontFamily: 'var(--font-serif-en)', fontStyle: 'italic', fontSize: 64, color: 'var(--vermilion)', marginBottom: 24 }}>
                    Thank you.
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif-jp)', fontSize: 28, fontWeight: 600, marginBottom: 24 }}>
                    お問い合わせありがとうございます。
                  </h3>
                  <p className="lede">
                    内容を確認の上、2営業日以内にご連絡いたします。
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// =============== PRIVACY ===============
window.PrivacyPage = function PrivacyPage({ onNav }) {
  useReveal();
  return (
    <main data-screen-label="Privacy">
      <section className="page-hero tone-dark">
        <div className="container">
          <div className="page-hero-meta">
            <div className="eyebrow">§ Privacy Policy — プライバシーポリシー</div>
            <div className="page-hero-num">06 / 06</div>
          </div>
          <h1 className="page-hero-title">
            Privacy<br/>
            <em style={{ fontFamily: 'var(--font-serif-en)', color: 'var(--vermilion)' }}>Policy.</em>
          </h1>
        </div>
      </section>

      <section className="privacy-body tone-light">
        <div className="container">
          <article className="privacy-article reveal">
            <p className="lede" style={{ marginBottom: 64 }}>
              REQS（以下「当社」）は、お客様の個人情報の重要性を認識し、その保護の徹底を図るため、本プライバシーポリシーを定めます。
            </p>
            {[
              { num: '01', title: '個人情報の取得', body: '当社は、適法かつ公正な手段によってのみ個人情報を取得します。お問い合わせフォーム等を通じてご提供いただいた情報は、当社のサービス提供および関連業務の遂行のためにのみ利用いたします。' },
              { num: '02', title: '利用目的', body: 'お客様への連絡・サービスのご提案・契約履行・本サイトの改善・統計分析・新サービスのご案内等のために利用いたします。これら以外の目的で個人情報を利用する場合は、別途同意を得るものとします。' },
              { num: '03', title: '第三者への提供', body: '法令に基づく場合、人の生命・身体・財産の保護に必要な場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。' },
              { num: '04', title: '安全管理', body: '当社は個人情報への不正アクセス、紛失、破壊、改ざん、漏洩等を防止するため、適切な安全管理措置を講じます。従業員に対しても必要な教育を実施します。' },
              { num: '05', title: '開示・訂正・利用停止', body: 'お客様ご本人から個人情報の開示、訂正、利用停止等のご請求があった場合、本人確認の上で適切に対応いたします。お問い合わせ窓口までご連絡ください。' },
              { num: '06', title: 'Cookie', body: '本サイトはサービス向上のためCookieを使用することがあります。Cookieの利用を希望されない場合は、ブラウザの設定でこれを拒否することができます。' },
              { num: '07', title: '改定', body: '本ポリシーは法令の変更等に応じて改定されることがあります。重要な変更がある場合は本サイト上で通知いたします。' },
            ].map((s) => (
              <section key={s.num} className="privacy-section">
                <div className="privacy-num">{s.num}</div>
                <div>
                  <h3 className="privacy-title">{s.title}</h3>
                  <p className="privacy-text">{s.body}</p>
                </div>
              </section>
            ))}
            <div className="privacy-foot">
              <div>制定: 2024年</div>
              <div>REQS</div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

// =============== Shared CTA Band ===============
window.CTABand = function CTABand({ onNav }) {
  return (
    <section className="cta-band tone-paper">
      <div className="container">
        <div className="cta-band-inner reveal">
          <div>
            <div className="eyebrow">§ Next step</div>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              <em style={{ fontFamily: 'var(--font-serif-en)' }}>Begin</em> the<br/>
              translation.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
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
  );
};
