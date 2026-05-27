interface Props {
  color?: string;
  size?: number;
  animate?: boolean;
}

// LIVE indicator dot — used by /advertise contact block, /pricing B2B badge, AdvertiseCTASection.
export default function PulseDot({ color = "#0dbe82", size = 6, animate = true }: Props) {
  return (
    <span
      className={animate ? "pulse-dot" : undefined}
      style={{
        width: size,
        height: size,
        background: color,
        borderRadius: "50%",
        display: "inline-block",
        boxShadow: animate ? `0 0 8px ${color}` : "none",
      }}
    />
  );
}
