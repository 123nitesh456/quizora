import { useEffect, useState } from "react";
import "./App.css";

const questions = [
  { category: "Web Development", difficulty: "Easy", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Machine Language", "Home Tool Markup Language"], answer: 0 },
  { category: "JavaScript", difficulty: "Easy", question: "Which keyword declares a block-scoped variable?", options: ["varonly", "define", "let", "static"], answer: 2 },
  { category: "CSS", difficulty: "Easy", question: "Which CSS property changes text color?", options: ["font-style", "color", "background", "text-weight"], answer: 1 },
  { category: "React", difficulty: "Medium", question: "Which hook manages component state?", options: ["useRoute", "useStyle", "useFetch", "useState"], answer: 3 },
  { category: "JavaScript", difficulty: "Medium", question: "Which method creates a new array by transforming each element?", options: ["filter()", "map()", "find()", "push()"], answer: 1 },
  { category: "Web Development", difficulty: "Easy", question: "What does CSS stand for?", options: ["Creative Style System", "Computer Styled Sections", "Cascading Style Sheets", "Colorful Style Syntax"], answer: 2 },
  { category: "React", difficulty: "Medium", question: "What is JSX?", options: ["A JavaScript syntax extension", "A CSS framework", "A database", "A browser"], answer: 0 },
  { category: "JavaScript", difficulty: "Medium", question: "Which value represents an intentional absence of a value?", options: ["false", "0", "undefined only", "null"], answer: 3 },
  { category: "Web Development", difficulty: "Easy", question: "Which protocol secures web communication?", options: ["FTP", "HTTPS", "SMTP", "HTTP only"], answer: 1 },
  { category: "React", difficulty: "Medium", question: "Why are keys used when rendering React lists?", options: ["To add CSS", "To encrypt data", "To help React identify list items", "To create routes"], answer: 2 }
];

const categories = ["All Topics", "Web Development", "JavaScript", "CSS", "React"];

function Icon({ name, size = 20 }) {
  const paths = {
    spark: (
      <>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
        <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" />
      </>
    ),
    arrow: (
      <>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z" />
        <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" />
      </>
    ),
    trophy: (
      <>
        <path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0z" />
        <path d="M7 6H4v2a4 4 0 0 0 4 4m9-6h3v2a4 4 0 0 1-4 4" />
      </>
    ),
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7z" />,
    back: (
      <>
        <path d="m15 18-6-6 6-6" />
        <path d="M9 12h12" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    restart: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <path d="M3 3v5h5" />
      </>
    )
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Brand() {
  return (
    <div className="brand">
      <span className="brand-icon"><Icon name="spark" size={22} /></span>
      <span>quizora<span className="brand-dot">.</span></span>
    </div>
  );
}

function Header() {
  return (
    <header className="topbar">
      <Brand />
      <div className="topbar-right">
        <span className="status-dot" /> YOUR SPACE TO GROW <span className="avatar">Q</span>
      </div>
    </header>
  );
}

function Welcome({ onStart, category, setCategory }) {
  return (
    <main className="welcome page-width">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-star"><Icon name="spark" size={14} /></span> YOUR NEXT LEVEL STARTS HERE
        </div>
        <h1>
          Knowledge is<br />your <span className="gradient-text">superpower.</span>
        </h1>
        <p className="hero-description">Small challenges. Big breakthroughs. Test what you know, discover what you don't, and get a little better every day.</p>
        <div className="hero-actions">
          <button className="primary-btn" onClick={onStart}>Start your quiz <Icon name="chevron" size={19} /></button>
          <span className="no-pressure">No pressure. Just progress.</span>
        </div>
        <div className="trust-row">
          <div className="mini-avatars"><span>Q</span><span>+</span><span>✦</span></div>
          <span>Built for curious minds</span>
          <span className="trust-separator">·</span>
          <span>10 questions</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="floating-tag tag-top">
          <span className="tag-icon purple"><Icon name="bolt" size={17} /></span>
          <span><b>Stay curious</b><small>Learn something new</small></span>
        </div>
        <div className="preview-card">
          <div className="preview-top"><span className="live-pill"><span /> READY TO PLAY</span><span className="preview-dots">•••</span></div>
          <div className="preview-number">01 <span>/ 10</span></div>
          <div className="preview-line" />
          <p className="preview-question">Every expert was once a beginner.</p>
          <div className="preview-answer"><span>A</span> Stay curious <Icon name="check" size={17} /></div>
          <div className="preview-answer muted-answer"><span>B</span> Stop exploring</div>
          <div className="preview-footer"><span><Icon name="clock" size={14} /> Go at your pace</span><span>LET'S DO THIS ↗</span></div>
        </div>
        <div className="floating-tag tag-bottom">
          <span className="tag-icon green"><Icon name="check" size={17} /></span>
          <span><b>Progress, not perfection</b><small>Every question counts</small></span>
        </div>
        <div className="visual-caption">A LITTLE KNOWLEDGE GOES A LONG WAY <span>✳</span></div>
      </div>

      <section className="category-section">
        <div className="section-heading">
          <div><span className="section-kicker">PICK YOUR PATH</span><h2>What are we exploring today?</h2></div>
          <span className="section-note">01 — CHOOSE A TOPIC</span>
        </div>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`category-card ${category === cat ? "category-active" : ""}`}
            >
              <span className={`category-icon cat-${i}`}>{["✳", "⌘", "JS", "▧", "⚛"][i]}</span>
              <span className="category-name">{cat}</span>
              <span className="category-count">
                {cat === "All Topics" ? "10 questions" : `${questions.filter((q) => q.category === cat).length} questions`}
              </span>
              <span className="category-arrow"><Icon name="arrow" size={17} /></span>
            </button>
          ))}
        </div>
      </section>

      <footer className="footer">
        <Brand />
        <span>MADE FOR THE LOVE OF LEARNING.</span>
        <span>LEARN SOMETHING. EVERY DAY. © 2026</span>
      </footer>
    </main>
  );
}

function Quiz({ quizQuestions, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);

  const question = quizQuestions[current];
  const answered = selected[current] !== undefined;
  const correctCount = Object.keys(selected).filter((i) => selected[i] === quizQuestions[Number(i)].answer).length;
  const progress = ((current + 1) / quizQuestions.length) * 100;

  function next() {
    if (!answered) return;
    if (current === quizQuestions.length - 1) {
      onFinish({ score: correctCount, answers: selected, questions: quizQuestions });
    } else {
      setCurrent((v) => v + 1);
      setShowExplanation(false);
    }
  }

  return (
    <main className="quiz-page page-width">
      <button className="back-btn" onClick={() => window.dispatchEvent(new Event("quizora-home"))}><Icon name="back" size={18} /> Back to home</button>
      <div className="quiz-layout">
        <section className="quiz-main">
          <div className="quiz-meta">
            <span className="section-kicker">YOUR LEARNING SESSION</span>
            <span className="question-count">
              QUESTION <b>{String(current + 1).padStart(2, "0")}</b> <span>/ {String(quizQuestions.length).padStart(2, "0")}</span>
            </span>
          </div>

          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="question-card">
            <div className="question-tags">
              <span className="topic-tag">{question.category}</span>
              <span className="difficulty-tag">{question.difficulty}</span>
            </div>
            <h1>{question.question}</h1>
            <p className="select-hint">CHOOSE THE BEST ANSWER</p>

            <div className="options-list">
              {question.options.map((option, i) => {
                const isSelected = selected[current] === i;
                const isCorrect = answered && question.answer === i;
                const stateClass = showExplanation && isCorrect
                  ? "option-correct"
                  : showExplanation && isSelected
                    ? "option-wrong"
                    : isSelected
                      ? "option-selected"
                      : "";

                return (
                  <button
                    key={option}
                    className={`option ${stateClass}`}
                    onClick={() => !showExplanation && setSelected((s) => ({ ...s, [current]: i }))}
                    disabled={showExplanation}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                    <span className="option-text">{option}</span>
                    <span className="option-check">
                      {showExplanation && isCorrect ? <Icon name="check" size={19} /> : isSelected ? "●" : <Icon name="chevron" size={18} />}
                    </span>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className={`feedback ${selected[current] === question.answer ? "feedback-good" : "feedback-bad"}`}>
                {selected[current] === question.answer ? "✓ Correct answer. Nicely done!" : `The correct answer is ${question.options[question.answer]}.`}
              </div>
            )}

            <div className="quiz-controls">
              <span className="autosave-note"><span className="status-dot" /> YOUR PROGRESS IS SAVED</span>
              <button className="primary-btn next-btn" disabled={!answered} onClick={() => (showExplanation ? next() : setShowExplanation(true))}>
                {showExplanation ? (current === quizQuestions.length - 1 ? "See my results" : "Next question") : "Check answer"} <Icon name="chevron" size={18} />
              </button>
            </div>
          </div>
        </section>

        <aside className="quiz-sidebar">
          <div className="sidebar-card">
            <span className="sidebar-icon"><Icon name="spark" size={22} /></span>
            <span className="section-kicker">A GENTLE REMINDER</span>
            <h3>You're here to learn, not to be perfect.</h3>
            <p>Take your time. Read each question carefully. Every attempt is progress.</p>
            <div className="sidebar-divider" />
            <div className="sidebar-stat">
              <span>Questions answered</span>
              <b>{Object.keys(selected).length} / {quizQuestions.length}</b>
            </div>
            <div className="sidebar-stat">
              <span>Correct so far</span>
              <b>{correctCount}</b>
            </div>
          </div>

          <div className="tip-card">
            <span>✳</span>
            <p><b>Quick tip</b><br />Trust what you know, and don't overthink it.</p>
          </div>
        </aside>
      </div>

      <footer className="footer">
        <Brand />
        <span>ONE QUESTION AT A TIME.</span>
        <span>QUIZORA © 2026</span>
      </footer>
    </main>
  );
}

function Results({ result, onRestart, onHome }) {
  const total = result.questions.length;
  const percent = Math.round((result.score / total) * 100);
  const message =
    percent >= 80
      ? ["Outstanding work!", "You've got a great grasp of these topics. Keep that momentum going."]
      : percent >= 50
        ? ["You're making progress!", "You've got a solid start. Review your answers and keep learning."]
        : ["Every expert starts somewhere.", "This is a chance to learn something new. Try again and see how far you can go."];

  return (
    <main className="results-page page-width">
      <div className="results-header">
        <span className="eyebrow"><Icon name="spark" size={14} /> YOUR SESSION IS COMPLETE</span>
        <span className="result-date">THE JOURNEY CONTINUES ✳</span>
      </div>

      <section className="results-hero">
        <div className="result-orb" />
        <div className="score-ring" style={{ "--score": `${percent}%` }}>
          <div className="score-inner">
            <Icon name="trophy" size={28} />
            <strong>{percent}%</strong>
            <span>YOUR SCORE</span>
          </div>
        </div>
        <div className="result-copy">
          <span className="section-kicker">THAT'S A WRAP</span>
          <h1>{message[0]}</h1>
          <p>{message[1]}</p>
          <div className="result-actions">
            <button className="primary-btn" onClick={onRestart}><Icon name="restart" size={17} /> Try again</button>
            <button className="secondary-btn" onClick={onHome}>Back to home</button>
          </div>
        </div>
      </section>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-icon stat-purple"><Icon name="book" size={20} /></span>
          <span className="stat-label">TOTAL QUESTIONS</span>
          <strong>{total}</strong>
          <small>Questions explored</small>
        </div>
        <div className="stat-card">
          <span className="stat-icon stat-green"><Icon name="check" size={20} /></span>
          <span className="stat-label">CORRECT ANSWERS</span>
          <strong>{result.score}<span className="stat-denom"> / {total}</span></strong>
          <small>Things you know</small>
        </div>
        <div className="stat-card">
          <span className="stat-icon stat-orange"><Icon name="bolt" size={20} /></span>
          <span className="stat-label">NEEDS PRACTICE</span>
          <strong>{total - result.score}</strong>
          <small>Room to grow</small>
        </div>
      </div>

      <section className="review-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">LEARN FROM EVERY ANSWER</span>
            <h2>Your answer review</h2>
          </div>
          <span className="section-note">{total} QUESTIONS REVIEWED</span>
        </div>

        <div className="review-list">
          {result.questions.map((q, i) => {
            const correct = result.answers[i] === q.answer;

            return (
              <div className="review-row" key={q.question}>
                <span className={`review-status ${correct ? "review-good" : "review-bad"}`}>
                  {correct ? <Icon name="check" size={17} /> : "×"}
                </span>
                <div className="review-content">
                  <strong>{q.question}</strong>
                  <span>
                    {correct ? `Your answer: ${q.options[q.answer]}` : `Your answer: ${q.options[result.answers[i]]} · Correct: ${q.options[q.answer]}`}
                  </span>
                </div>
                <span className={`review-label ${correct ? "label-good" : "label-bad"}`}>
                  {correct ? "CORRECT" : "REVIEW"}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="footer">
        <Brand />
        <span>EVERY ANSWER IS A STEP FORWARD.</span>
        <span>QUIZORA © 2026</span>
      </footer>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [category, setCategory] = useState("All Topics");
  const [result, setResult] = useState(null);
  const quizQuestions = questions.filter((q) => category === "All Topics" || q.category === category);

  useEffect(() => {
    const handler = () => setScreen("home");

    window.addEventListener("quizora-home", handler);

    return () => {
      window.removeEventListener("quizora-home", handler);
    };
  }, []);

  function start() {
    setResult(null);
    setScreen("quiz");
  }

  function finish(data) {
    setResult(data);
    setScreen("results");
  }

  function home() {
    setScreen("home");
  }

  return (
    <div className="app-shell">
      <Header />
      {screen === "home" ? (
        <Welcome onStart={start} category={category} setCategory={setCategory} />
      ) : screen === "quiz" ? (
        <Quiz key={`${category}-${screen}`} quizQuestions={quizQuestions} onFinish={finish} />
      ) : (
        <Results result={result} onRestart={start} onHome={home} />
      )}
    </div>
  );
}
