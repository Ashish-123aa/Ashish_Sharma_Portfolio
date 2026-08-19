interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-surface bg-surface px-3 py-1.5 font-mono text-xs text-secondary transition-colors duration-200 hover:border-signal/50 hover:text-signal">
      {label}
    </span>
  );
}
