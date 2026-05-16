'use client';

import { useEffect, useRef, useState } from 'react';

const C = {
  bg:        '#f4f1ea',
  panel:     '#fbf9f3',
  ink:       '#1a1a17',
  soft:      '#6a6a62',
  rule:      'rgba(20,20,15,0.12)',
  accent:    '#3f7a4e',
  accentDim: 'rgba(63,122,78,0.10)',
};

const mono = '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace';
const sans = '"DM Sans", ui-sans-serif, system-ui, sans-serif';

const PORTFOLIO = {
  shortName: 'Umut',
  role: 'DevSecOps engineer',
  social: [
    { label: 'GitHub', handle: 'sonumuto',         href: 'http://github.com/sonumuto' },
    { label: 'Web',    handle: 'umutyigitoglu.com', href: 'https://umutyigitoglu.com' },
  ],
  intro:
    "Currently an Experienced DevOps Engineer at Airties, where I build and maintain DevSecOps pipelines, integrate SAST, SCA, and DAST workflows across web, mobile, and embedded projects, and provision AWS infrastructure with CDK. Mostly Python, with a focus on making security part of the development process rather than an afterthought.",
  about: [
    "I started out in QA, writing tests by hand, then building the framework that wrote them. Over time that evolved into DevSecOps: integrating BlackDuck, Coverity, and Polaris into CI/CD pipelines, running daily DAST scans across web, mobile, and embedded projects, and writing the Python tooling that turns a week's worth of scan output into something a team can actually act on. At Airties I've also built a secrets-detection plugin for Gerrit, provisioned cloud infrastructure with AWS CDK, and optimised Jenkins pipelines that teams depend on every day.",
    "The thread running through all of it is the same: automation should reduce friction, not create it, especially when security is involved. I'm a curious engineer by default, comfortable taking ownership of complex systems and operating across DevOps, application security, and software engineering. If you're building something in DevSecOps or platform engineering, I'd love to talk.",
  ],
  now: [
    { k: 'Now',       v: 'Experienced DevOps Engineer at Airties' },
    { k: 'Stack',     v: 'Python · AWS CDK · Jenkins · Docker · Ansible' },
    { k: 'Studied',   v: 'BSc Computer Engineering · İzmir Institute of Technology' },
    { k: 'Certified', v: 'AWS Solutions Architect Associate · Cloud Practitioner' },
  ],
  projects: [
    {
      n: '01',
      title: 'Secrets detection for Gerrit',
      tag: 'Gerrit plugin · 2025',
      blurb:
        "A small plugin for on-premise Gerrit that scans incoming code changes for things that look like exposed credentials. Findings either flag the review or block the merge, a quiet safety net so secrets don't end up on main.",
      meta: ['Java', 'Gerrit', 'Gitleaks'],
    },
    {
      n: '02',
      title: 'Weekly security digest',
      tag: 'Internal tool · 2025',
      blurb:
        'A Python tool that takes the weekly SAST, SCA, and DAST scan output and turns it into a readable summary, grouped along OWASP Top 10 and CWE Top 25 lines.',
      meta: ['Python', 'BlackDuck', 'Coverity', 'Polaris'],
    },
    {
      n: '03',
      title: 'AWS infrastructure as code',
      tag: 'Platform · 2025',
      blurb:
        'The AWS footprint behind a handful of internal tools (EC2, ECS, S3, RDS, ALB, Route 53, VPC) defined in AWS CDK with Python. Mostly an exercise in turning a pile of click-ops decisions into something reviewable and reproducible.',
      meta: ['AWS CDK', 'Python', 'ECS', 'RDS', 'Route 53'],
    },
    {
      n: '04',
      title: 'Multi-location image caching',
      tag: 'Ansible playbook · 2025',
      blurb:
        "An Ansible-driven Docker image caching setup across our deployment locations, so the same images don't get pulled across the world every time for each machine. Deployment time came down by about 75%, one of those changes that felt small until you measured it.",
      meta: ['Ansible', 'Docker', 'CI/CD'],
    },
  ],
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>('[data-reveal]');
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition =
        'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)';
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'none';
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}

function Line({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
      <span
        style={{
          fontFamily: mono,
          fontSize: 12,
          color: C.soft,
          width: 26,
          textAlign: 'right',
          userSelect: 'none',
          flexShrink: 0,
        }}
      >
        {String(n).padStart(2, '0')}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
    </div>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLElement>(null);
  useReveal(rootRef);
  const isMobile = useIsMobile();

  const P = PORTFOLIO;
  const today = new Date().toLocaleDateString('en-CA');
  const px = isMobile ? 20 : 48;

  return (
    <main
      ref={rootRef}
      style={{
        width: '100%',
        background: C.bg,
        color: C.ink,
        fontFamily: sans,
        fontSize: 16,
        lineHeight: 1.5,
      }}
    >
      {/* Status bar */}
      <header
        style={{
          padding: `14px ${px}px`,
          borderBottom: `1px solid ${C.rule}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: mono,
          fontSize: 12,
          color: C.soft,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: C.accent,
              display: 'inline-block',
            }}
          />
          <span>{P.shortName.toLowerCase()}@portfolio:~$</span>
          <span style={{ color: C.ink }}>cat about.md</span>
        </div>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 24 }}>
            <span>~/work</span>
            <span>~/about</span>
            <span>~/contact</span>
          </div>
        )}
      </header>

      {/* Hero */}
      <section style={{ padding: `${isMobile ? 72 : 120}px ${px}px ${isMobile ? 64 : 100}px` }}>
        <div
          data-reveal
          style={{
            fontFamily: mono,
            fontSize: 12,
            color: C.soft,
            marginBottom: 32,
            letterSpacing: '0.04em',
          }}
        >
          # README.md · last updated {today}
        </div>
        <h1
          data-reveal
          style={{
            margin: 0,
            fontFamily: sans,
            fontWeight: 500,
            fontSize: isMobile ? 34 : 80,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            maxWidth: isMobile ? '100%' : 1100,
          }}
        >
          Hi, I&apos;m {P.shortName}.
          <br />
          <span style={{ color: C.soft }}>A {P.role.toLowerCase()}</span>
          <br />
          building pipelines, infrastructure,
          <br />
          and the{' '}
          <span style={{ color: C.accent, fontStyle: 'italic' }}>small tools</span>{' '}
          that connect them.
        </h1>
        <div
          data-reveal
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: '32px 1fr',
            columnGap: 24,
            maxWidth: 720,
          }}
        >
          <div style={{ fontFamily: mono, fontSize: 13, color: C.accent, paddingTop: 4 }}>
            {'>'}
          </div>
          <p style={{ margin: 0, fontSize: isMobile ? 15 : 20, lineHeight: 1.55, color: C.ink }}>
            {P.intro}
          </p>
        </div>
      </section>

      {/* Meta strip */}
      <section
        style={{
          padding: `24px ${px}px`,
          borderTop: `1px solid ${C.rule}`,
          borderBottom: `1px solid ${C.rule}`,
          background: C.panel,
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 24 : 32,
        }}
      >
        <dl style={{ display: 'contents' }}>
          {P.now.map((row) => (
            <div key={row.k} data-reveal>
              <dt
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: C.soft,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {row.k}
              </dt>
              <dd style={{ margin: 0, marginTop: 6, fontSize: 14, color: C.ink, lineHeight: 1.45 }}>
                {row.v}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Selected work */}
      <section style={{ padding: `${isMobile ? 72 : 120}px ${px}px ${isMobile ? 32 : 40}px` }}>
        <div
          data-reveal
          style={{ marginBottom: isMobile ? 40 : 56, display: 'flex', alignItems: 'baseline', gap: 16 }}
        >
          <span style={{ fontFamily: mono, fontSize: 12, color: C.accent }}>{'//'}</span>
          <h2
            style={{
              margin: 0,
              fontFamily: mono,
              fontSize: 13,
              color: C.soft,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Selected work · {P.projects.length} entries
          </h2>
          <div style={{ flex: 1, height: 1, background: C.rule }} />
          {!isMobile && (
            <span style={{ fontFamily: mono, fontSize: 12, color: C.soft }}>2021–2026</span>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {P.projects.map((p) => (
            <article
              key={p.n}
              data-reveal
              style={{
                padding: `${isMobile ? 40 : 64}px 0`,
                borderTop: `1px solid ${C.rule}`,
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '100px 1fr',
                gap: isMobile ? 16 : 56,
                alignItems: 'start',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: isMobile ? 12 : 0, flexDirection: isMobile ? 'row' : 'column' }}>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: isMobile ? 28 : 64,
                    fontWeight: 400,
                    color: C.accent,
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {p.n}
                </div>
                <div
                  style={{
                    fontFamily: mono,
                    fontSize: 11,
                    color: C.soft,
                    marginTop: isMobile ? 0 : 4,
                    letterSpacing: '0.04em',
                  }}
                >
                  {p.tag.split(' · ')[0].toLowerCase()}
                </div>
              </div>

              <div style={{ maxWidth: 760 }}>
                <h3
                  style={{
                    margin: 0,
                    fontSize: isMobile ? 22 : 52,
                    fontWeight: 500,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.02,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    marginTop: isMobile ? 16 : 28,
                    marginBottom: 0,
                    fontSize: isMobile ? 14 : 19,
                    lineHeight: 1.6,
                    color: C.ink,
                    maxWidth: 640,
                  }}
                >
                  {p.blurb}
                </p>
                <div
                  style={{
                    marginTop: 32,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontFamily: mono,
                      fontSize: 11,
                      color: C.soft,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Built with
                  </span>
                  <div style={{ flex: 1, height: 1, background: C.rule, minWidth: 16 }} />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.meta.map((m) => (
                      <span
                        key={m}
                        style={{
                          fontFamily: mono,
                          fontSize: 12,
                          color: C.accent,
                          background: C.accentDim,
                          padding: '4px 10px',
                          borderRadius: 3,
                        }}
                      >
                        {m.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div style={{ borderTop: `1px solid ${C.rule}` }} />
        </div>
      </section>

      {/* About */}
      <section
        style={{
          padding: `${isMobile ? 72 : 120}px ${px}px`,
          background: C.panel,
          borderTop: `1px solid ${C.rule}`,
          borderBottom: `1px solid ${C.rule}`,
        }}
      >
        <div
          data-reveal
          style={{ marginBottom: 40, display: 'flex', alignItems: 'baseline', gap: 16 }}
        >
          <span style={{ fontFamily: mono, fontSize: 12, color: C.accent }}>{'//'}</span>
          <h2
            style={{
              margin: 0,
              fontFamily: mono,
              fontSize: 13,
              color: C.soft,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            About
          </h2>
        </div>
        <div style={{ maxWidth: 820 }}>
          {P.about.map((para, i) => (
            <Line n={i + 1} key={i}>
              <p
                data-reveal
                style={{
                  margin: i === 0 ? 0 : '24px 0 0',
                  fontSize: isMobile ? 14 : 19,
                  lineHeight: 1.6,
                  color: C.ink,
                }}
              >
                {para}
              </p>
            </Line>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: `${isMobile ? 72 : 120}px ${px}px ${isMobile ? 56 : 80}px` }}>
        <div
          data-reveal
          style={{ fontFamily: mono, fontSize: 12, color: C.accent, marginBottom: 24 }}
        >
          {'>'} say hello
        </div>
        <a
          href="https://www.linkedin.com/in/umut-yigitoglu/"
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          style={{
            display: 'block',
            fontSize: isMobile ? 24 : 72,
            fontWeight: 500,
            letterSpacing: '-0.03em',
            color: C.ink,
            textDecoration: 'none',
            borderBottom: `3px solid ${C.accent}`,
            paddingBottom: 6,
            lineHeight: 1.05,
            wordBreak: 'break-word',
          }}
        >
          linkedin.com/in/umut-yigitoglu
        </a>
        <div
          data-reveal
          style={{
            marginTop: isMobile ? 48 : 64,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            maxWidth: isMobile ? '100%' : 430,
          }}
        >
          {P.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              style={{
                textDecoration: 'none',
                color: C.ink,
                padding: '20px 0',
                borderTop: `1px solid ${C.rule}`,
                display: 'block',
              }}
            >
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 11,
                  color: C.soft,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </div>
              <div style={{ marginTop: 6, fontFamily: mono, fontSize: 15 }}>{s.handle}</div>
            </a>
          ))}
        </div>
      </section>

      <footer
        style={{
          padding: `20px ${px}px`,
          borderTop: `1px solid ${C.rule}`,
          background: C.panel,
          fontFamily: mono,
          fontSize: 11,
          color: C.soft,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>EOF · umutyigitoglu.com</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
