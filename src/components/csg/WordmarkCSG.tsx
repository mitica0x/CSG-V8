// Brand wordmarks — "0" in C0insiglieri is ALWAYS cyan, "0" in Ax0n is ALWAYS amber,
// "0" in N0VA is ALWAYS rust. Locked per design system. Use these helpers everywhere
// instead of hardcoding spans so a future rename is one file.

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export function C0insiglieri({ className, style }: Props) {
  return (
    <span className={className} style={style}>
      C<span style={{ color: "#18b4d4" }}>0</span>insiglieri
    </span>
  );
}

export function Ax0n({ className, style }: Props) {
  return (
    <span className={className} style={style}>
      Ax<span style={{ color: "#D4A853" }}>0</span>n
    </span>
  );
}

export function N0VA({ className, style }: Props) {
  return (
    <span className={className} style={style}>
      N<span style={{ color: "#e8703a" }}>0</span>VA
    </span>
  );
}
