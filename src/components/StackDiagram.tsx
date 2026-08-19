export default function StackDiagram() {
  return (
    <svg
      viewBox="0 0 480 420"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="Diagram showing data flowing between a React frontend, a Node.js and Express backend with JWT authentication, and a database layer"
    >
      <title>Frontend, backend and database connected by API calls</title>

      {/* connector paths */}
      <path
        id="path-fe-be"
        d="M 120 90 C 190 90, 190 190, 240 210"
        fill="none"
        stroke="var(--diagram-border)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      <path
        id="path-be-db"
        d="M 240 210 C 290 230, 290 300, 360 330"
        fill="none"
        stroke="var(--diagram-border)"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />

      {/* traveling pulses along the connectors */}
      <circle r="3.5" fill="#2DD4BF">
        <animateMotion dur="2.6s" repeatCount="indefinite" begin="0s">
          <mpath href="#path-fe-be" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle r="3.5" fill="#F5A623">
        <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.3s">
          <mpath href="#path-be-db" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="2.6s" repeatCount="indefinite" begin="1.3s" />
      </circle>

      {/* Frontend node */}
      <g>
        <rect x="30" y="55" width="180" height="70" rx="12" fill="var(--diagram-surface)" stroke="var(--diagram-border)" strokeWidth="1" />
        <rect x="30" y="55" width="4" height="70" rx="2" fill="#2DD4BF" />
        <text x="52" y="84" fill="var(--diagram-text)" className="font-mono text-[13px] font-medium">
          Frontend
        </text>
        <text x="52" y="104" fill="var(--diagram-text-dim)" className="font-mono text-[11px]">
          React.js · Tailwind CSS
        </text>
      </g>

      {/* Backend node */}
      <g>
        <rect x="150" y="175" width="200" height="78" rx="12" fill="var(--diagram-surface)" stroke="var(--diagram-border)" strokeWidth="1" />
        <rect x="150" y="175" width="4" height="78" rx="2" fill="#F5A623" />
        <text x="172" y="203" fill="var(--diagram-text)" className="font-mono text-[13px] font-medium">
          Backend
        </text>
        <text x="172" y="223" fill="var(--diagram-text-dim)" className="font-mono text-[11px]">
          Node.js · Express.js
        </text>
        <text x="172" y="240" fill="var(--diagram-text-dim)" className="font-mono text-[11px]">
          JWT auth · REST APIs
        </text>
      </g>

      {/* Database node */}
      <g>
        <rect x="270" y="295" width="190" height="70" rx="12" fill="var(--diagram-surface)" stroke="var(--diagram-border)" strokeWidth="1" />
        <rect x="270" y="295" width="4" height="70" rx="2" fill="#2DD4BF" />
        <text x="292" y="324" fill="var(--diagram-text)" className="font-mono text-[13px] font-medium">
          Database
        </text>
        <text x="292" y="344" fill="var(--diagram-text-dim)" className="font-mono text-[11px]">
          MongoDB · PostgreSQL
        </text>
      </g>
    </svg>
  );
}
