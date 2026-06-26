"use client";

export default function VitruvianPanel() {
  const CX = 240, CY = 440, R = 265;
  const r4 = (n: number) => Math.round(n * 1e4) / 1e4;

  const ticks = Array.from({ length: 24 }, (_, i) => {
    const a = (i * 15 * Math.PI) / 180;
    const inner = i % 2 === 0 ? R - 13 : R - 7;
    return {
      x1: r4(CX + inner * Math.cos(a)),
      y1: r4(CY - inner * Math.sin(a)),
      x2: r4(CX + R * Math.cos(a)),
      y2: r4(CY - R * Math.sin(a)),
      major: i % 2 === 0,
    };
  });

  const squareCorners: [number, number, number, number][] = [
    [30, 175, 1, 1],
    [450, 175, -1, 1],
    [30, 595, 1, -1],
    [450, 595, -1, -1],
  ];

  return (
    <div className="hidden md:block flex-1 bg-ink overflow-hidden">
      <svg
        viewBox="0 0 560 840"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="vd" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="7" cy="7" r="0.6" fill="#F9F8F5" fillOpacity="0.07" />
          </pattern>
        </defs>

        <rect width="560" height="840" fill="#111111" />
        <rect width="560" height="840" fill="url(#vd)" />

        {/* Central axis lines */}
        <line x1={CX} y1="0" x2={CX} y2="840" stroke="#F9F8F5" strokeWidth="0.4" opacity="0.05" />
        <line x1="0" y1={CY} x2="560" y2={CY} stroke="#F9F8F5" strokeWidth="0.4" opacity="0.05" />

        {/* Circle — outer glow + main ring */}
        <circle cx={CX} cy={CY} r={R + 3} stroke="#F9F8F5" strokeWidth="14" fill="none" opacity="0.012" />
        <circle cx={CX} cy={CY} r={R} stroke="#F9F8F5" strokeWidth="1.4" fill="none" opacity="0.36" />

        {/* Degree ticks */}
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke="#F9F8F5"
            strokeWidth={t.major ? "0.9" : "0.5"}
            opacity={t.major ? "0.28" : "0.15"}
          />
        ))}

        {/* Square */}
        <rect x="30" y="175" width="420" height="420"
          stroke="#F9F8F5" strokeWidth="0.8" fill="none" opacity="0.22" />

        {/* Square corner brackets (yellow) */}
        {squareCorners.map(([x, y, sx, sy], i) => (
          <g key={i} stroke="#FFE141" strokeWidth="1.3" opacity="0.6">
            <line x1={x} y1={y} x2={x + sx * 20} y2={y} />
            <line x1={x} y1={y} x2={x} y2={y + sy * 20} />
          </g>
        ))}

        {/* Inner dashed construction circle */}
        <circle cx={CX} cy={CY} r="162"
          stroke="#F9F8F5" strokeWidth="0.4" fill="none" opacity="0.1" strokeDasharray="4 7" />

        {/* Diagonal construction lines: center to square corners */}
        {squareCorners.map(([x, y], i) => (
          <line key={i} x1={CX} y1={CY} x2={x} y2={y}
            stroke="#F9F8F5" strokeWidth="0.35" opacity="0.06" />
        ))}

        {/* SECONDARY POSITION: raised arms + spread legs (ghost) */}
        <g stroke="#F9F8F5" strokeWidth="1.2" fill="none" opacity="0.2" strokeLinecap="round">
          <line x1="170" y1="265" x2="53" y2="253" />
          <line x1="310" y1="265" x2="427" y2="253" />
          <circle cx="53" cy="253" r="3" fill="#F9F8F5" />
          <circle cx="427" cy="253" r="3" fill="#F9F8F5" />
          <line x1="195" y1="450" x2="107" y2="669" />
          <line x1="285" y1="450" x2="373" y2="669" />
          <circle cx="107" cy="669" r="3" fill="#F9F8F5" />
          <circle cx="373" cy="669" r="3" fill="#F9F8F5" />
        </g>

        {/* ── PRIMARY FIGURE ── */}
        <g stroke="#F9F8F5" strokeWidth="1.7" fill="none"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.9">

          {/* HEAD */}
          <circle cx={CX} cy="203" r="28" />

          {/* Facial features */}
          <ellipse cx="228" cy="199" rx="5.5" ry="3.5" />
          <ellipse cx="252" cy="199" rx="5.5" ry="3.5" />
          <circle cx="228" cy="199" r="2.2" fill="#F9F8F5" stroke="none" opacity="0.7" />
          <circle cx="252" cy="199" r="2.2" fill="#F9F8F5" stroke="none" opacity="0.7" />
          <path d="M240,205 L237,218 L244,220" strokeWidth="1.2" />
          <path d="M231,228 Q240,234 249,228" strokeWidth="1.3" />
          <path d="M218,192 Q240,179 262,192" strokeWidth="1" opacity="0.48" />

          {/* NECK */}
          <line x1="233" y1="231" x2="229" y2="260" />
          <line x1="247" y1="231" x2="251" y2="260" />

          {/* CLAVICLES */}
          <path d="M229,260 Q185,252 145,278" strokeWidth="1.3" />
          <path d="M251,260 Q295,252 335,278" strokeWidth="1.3" />

          {/* SHOULDER LINE */}
          <line x1="145" y1="278" x2="335" y2="278" />

          {/* LEFT ARM: shoulder → elbow → hand */}
          <path d="M145,290 L88,298 L30,298" strokeWidth="1.8" />
          <circle cx="88" cy="298" r="3.5" fill="#F9F8F5" />

          {/* Left hand fingers */}
          <g strokeWidth="1.1" opacity="0.68">
            <line x1="30" y1="298" x2="20" y2="288" />
            <line x1="30" y1="298" x2="19" y2="294" />
            <line x1="30" y1="298" x2="19" y2="300" />
            <line x1="30" y1="298" x2="20" y2="306" />
            <line x1="30" y1="298" x2="23" y2="311" />
          </g>

          {/* RIGHT ARM: shoulder → elbow → hand */}
          <path d="M335,290 L392,298 L450,298" strokeWidth="1.8" />
          <circle cx="392" cy="298" r="3.5" fill="#F9F8F5" />

          {/* Right hand fingers */}
          <g strokeWidth="1.1" opacity="0.68">
            <line x1="450" y1="298" x2="460" y2="288" />
            <line x1="450" y1="298" x2="461" y2="294" />
            <line x1="450" y1="298" x2="461" y2="300" />
            <line x1="450" y1="298" x2="460" y2="306" />
            <line x1="450" y1="298" x2="457" y2="311" />
          </g>

          {/* TORSO — curved sides */}
          <path d="M145,278 Q157,355 152,450" />
          <path d="M335,278 Q323,355 328,450" />

          {/* Waist indent hint */}
          <path d="M152,385 Q196,372 240,370 Q284,372 328,385"
            strokeWidth="0.7" opacity="0.38" />

          {/* Hip line */}
          <line x1="152" y1="450" x2="328" y2="450" />

          {/* Square edge contact marks */}
          <line x1="24" y1="290" x2="24" y2="306" strokeWidth="1" opacity="0.4" />
          <line x1="456" y1="290" x2="456" y2="306" strokeWidth="1" opacity="0.4" />
        </g>

        {/* ── ANATOMICAL DETAIL ── */}
        <g stroke="#F9F8F5" fill="none" strokeLinecap="round">
          {/* Ribcage ellipse */}
          <ellipse cx={CX} cy="365" rx="82" ry="98" strokeWidth="1" opacity="0.36" />

          {/* Sternum */}
          <line x1={CX} y1="260" x2={CX} y2="445"
            strokeWidth="0.7" opacity="0.26" />

          {/* Rib pairs (5 pairs each side) */}
          <g strokeWidth="0.8" opacity="0.22">
            <path d="M240,295 Q208,303 177,323" fill="none" />
            <path d="M240,295 Q272,303 303,323" fill="none" />
            <path d="M240,320 Q203,330 168,352" fill="none" />
            <path d="M240,320 Q277,330 312,352" fill="none" />
            <path d="M240,345 Q200,356 160,380" fill="none" />
            <path d="M240,345 Q280,356 320,380" fill="none" />
            <path d="M240,368 Q204,380 170,403" fill="none" />
            <path d="M240,368 Q276,380 310,403" fill="none" />
            <path d="M240,390 Q210,402 185,419" fill="none" />
            <path d="M240,390 Q270,402 295,419" fill="none" />
          </g>

          {/* Pelvis arc */}
          <path d="M152,450 Q196,476 240,479 Q284,476 328,450"
            strokeWidth="1" opacity="0.4" />
          <path d="M170,460 Q240,496 310,460"
            strokeWidth="0.8" opacity="0.26" />

          {/* Navel ring */}
          <circle cx={CX} cy={CY} r="9" strokeWidth="0.8" opacity="0.28" />
        </g>

        {/* Spine (dashed) */}
        <path
          d="M240,232 Q237,312 240,388 Q243,418 240,450"
          stroke="#F9F8F5" strokeWidth="0.8" fill="none"
          opacity="0.26" strokeDasharray="3 5"
        />

        {/* ── LEGS ── */}
        <g stroke="#F9F8F5" strokeWidth="1.8" fill="none" strokeLinecap="round">
          {/* Left leg */}
          <path d="M192,450 Q185,494 182,534 Q184,562 188,595" />
          {/* Right leg */}
          <path d="M288,450 Q295,494 298,534 Q296,562 292,595" />

          {/* Knee caps */}
          <ellipse cx="182" cy="534" rx="11" ry="7" strokeWidth="1.2" opacity="0.82" />
          <ellipse cx="298" cy="534" rx="11" ry="7" strokeWidth="1.2" opacity="0.82" />

          {/* Calf muscle suggestion */}
          <path d="M182,534 Q176,558 180,580" strokeWidth="0.8" opacity="0.4" />
          <path d="M298,534 Q304,558 300,580" strokeWidth="0.8" opacity="0.4" />

          {/* Feet */}
          <path d="M188,595 Q178,603 164,606 Q153,603 148,596" strokeWidth="1.4" />
          <path d="M292,595 Q302,603 316,606 Q327,603 332,596" strokeWidth="1.4" />

          {/* Ankle marks */}
          <line x1="175" y1="590" x2="175" y2="602" strokeWidth="1" opacity="0.52" />
          <line x1="305" y1="590" x2="305" y2="602" strokeWidth="1" opacity="0.52" />
        </g>

        {/* ── NAVEL — yellow, marks the circle center ── */}
        <circle cx={CX} cy={CY} r="5" fill="#FFE141" opacity="0.92" />

        {/* Yellow contact points */}
        {/* Horizontal arm tips on square */}
        <circle cx="30" cy="298" r="4.5" fill="#FFE141" opacity="0.78" />
        <circle cx="450" cy="298" r="4.5" fill="#FFE141" opacity="0.78" />
        {/* Feet on square base */}
        <circle cx="188" cy="595" r="3.5" fill="#FFE141" opacity="0.6" />
        <circle cx="292" cy="595" r="3.5" fill="#FFE141" opacity="0.6" />
        {/* Top of head on square top / circle */}
        <circle cx={CX} cy="175" r="3" fill="#FFE141" opacity="0.48" />
        {/* Ghost raised arm contacts */}
        <circle cx="53" cy="253" r="3" fill="#FFE141" opacity="0.26" />
        <circle cx="427" cy="253" r="3" fill="#FFE141" opacity="0.26" />

        {/* Radius indicator */}
        <line x1={CX} y1={CY} x2={CX + R} y2={CY}
          stroke="#FFE141" strokeWidth="0.5" opacity="0.18" />

        {/* ── DECORATIVE ── */}
        {/* Corner brackets */}
        <g stroke="#F9F8F5" strokeWidth="0.4" opacity="0.15">
          <line x1="8" y1="0" x2="8" y2="44" /><line x1="0" y1="8" x2="44" y2="8" />
          <line x1="552" y1="0" x2="552" y2="44" /><line x1="516" y1="8" x2="560" y2="8" />
          <line x1="8" y1="840" x2="8" y2="796" /><line x1="0" y1="832" x2="44" y2="832" />
          <line x1="552" y1="840" x2="552" y2="796" /><line x1="516" y1="832" x2="560" y2="832" />
        </g>

        {/* Bottom inscription */}
        <line x1="55" y1="794" x2="465" y2="794"
          stroke="#F9F8F5" strokeWidth="0.4" opacity="0.1" />
        <text
          x={CX} y="812" textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="9.5" fill="#F9F8F5" opacity="0.2" letterSpacing="0.26em"
        >
          CORPUS OPERIS
        </text>
      </svg>
    </div>
  );
}
