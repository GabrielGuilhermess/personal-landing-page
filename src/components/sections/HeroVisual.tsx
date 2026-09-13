interface VisualProps {
  className?: string;
}

function IdeWindow() {
  return (
    <g data-part="ide">
      <rect style={{ filter: "drop-shadow(0 8px 14px rgba(17,19,24,.10))" }} x="0" y="0" width="430" height="270" rx="16" fill="var(--hero-dark)" stroke="var(--hero-dark-2)" />
      <circle cx="22" cy="22" r="5" fill="#6A717C" />
      <circle cx="39" cy="22" r="5" fill="#7A828E" />
      <circle cx="56" cy="22" r="5" fill="#8A929D" />
      <line vectorEffect="non-scaling-stroke" strokeWidth="1.35" x1="96" y1="0" x2="96" y2="270" stroke="var(--hero-dark-2)" />

      {[58, 79, 100, 121, 142, 163, 184, 205].map((y, index) => (
        <circle key={y} cx="22" cy={y} r="4" fill={index === 0 ? "var(--hero-brand)" : "#515965"} />
      ))}

      <rect x="126" y="48" width="104" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="126" y="68" width="45" height="7" rx="3.5" fill="var(--hero-brand)" />
      <rect x="181" y="68" width="41" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="232" y="68" width="84" height="7" rx="3.5" fill="var(--hero-dark-line-soft)" />
      <rect x="145" y="88" width="66" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="220" y="88" width="123" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="145" y="108" width="38" height="7" rx="3.5" fill="var(--hero-brand)" />
      <rect x="193" y="108" width="72" height="7" rx="3.5" fill="var(--hero-dark-line-soft)" />
      <rect x="126" y="128" width="72" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="207" y="128" width="119" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="145" y="148" width="51" height="7" rx="3.5" fill="var(--hero-brand)" />
      <rect x="205" y="148" width="65" height="7" rx="3.5" fill="var(--hero-dark-line-soft)" />
      <rect x="279" y="148" width="89" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="145" y="168" width="92" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="247" y="168" width="54" height="7" rx="3.5" fill="var(--hero-dark-line-soft)" />
      <rect x="126" y="188" width="44" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="180" y="188" width="111" height="7" rx="3.5" fill="var(--hero-brand)" />
      <rect x="301" y="188" width="42" height="7" rx="3.5" fill="var(--hero-dark-line)" />
      <rect x="126" y="208" width="63" height="7" rx="3.5" fill="var(--hero-dark-line)" />
    </g>
  );
}

function DatabaseWindow() {
  return (
    <g data-part="database">
      <rect style={{ filter: "drop-shadow(0 8px 14px rgba(17,19,24,.10))" }} x="0" y="0" width="390" height="245" rx="16" fill="var(--hero-light)" stroke="var(--hero-outline)" />
      <circle cx="22" cy="22" r="5" fill="#AAB1BA" />
      <circle cx="39" cy="22" r="5" fill="#B7BDC5" />
      <circle cx="56" cy="22" r="5" fill="#C4C9D0" />
      <line vectorEffect="non-scaling-stroke" strokeWidth="1.35" x1="92" y1="0" x2="92" y2="245" stroke="var(--hero-light-line-soft)" />

      <ellipse cx="25" cy="58" rx="11" ry="5" fill="none" stroke="var(--hero-brand)" strokeWidth="2" />
      <path d="M14 58v12c0 3 5 5 11 5s11-2 11-5V58" fill="none" stroke="var(--hero-brand)" strokeWidth="2" />
      <ellipse cx="25" cy="70" rx="11" ry="5" fill="none" stroke="var(--hero-brand)" strokeWidth="2" />
      <ellipse cx="25" cy="91" rx="8" ry="4" fill="none" stroke="var(--hero-light-line)" strokeWidth="2" />
      <ellipse cx="25" cy="113" rx="8" ry="4" fill="none" stroke="var(--hero-light-line)" strokeWidth="2" />
      <ellipse cx="25" cy="135" rx="8" ry="4" fill="none" stroke="var(--hero-light-line)" strokeWidth="2" />

      <rect x="45" y="55" width="31" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="45" y="88" width="24" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="45" y="110" width="30" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="45" y="132" width="25" height="6" rx="3" fill="var(--hero-light-line)" />

      <rect x="116" y="50" width="74" height="8" rx="4" fill="var(--hero-light-line)" />
      <circle cx="346" cy="54" r="6" fill="var(--hero-brand)" />
      <rect x="116" y="80" width="244" height="132" rx="10" fill="var(--hero-light-2)" stroke="var(--hero-light-line-soft)" />
      <line vectorEffect="non-scaling-stroke" strokeWidth="1.35" x1="116" y1="107" x2="360" y2="107" stroke="var(--hero-light-line-soft)" />
      <line vectorEffect="non-scaling-stroke" strokeWidth="1.35" x1="165" y1="80" x2="165" y2="212" stroke="var(--hero-light-line-soft)" />
      <line vectorEffect="non-scaling-stroke" strokeWidth="1.35" x1="229" y1="80" x2="229" y2="212" stroke="var(--hero-light-line-soft)" />
      <line vectorEffect="non-scaling-stroke" strokeWidth="1.35" x1="294" y1="80" x2="294" y2="212" stroke="var(--hero-light-line-soft)" />

      <circle cx="132" cy="95" r="5" fill="#B7BDC5" />
      <rect x="145" y="92" width="40" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="181" y="92" width="26" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="245" y="92" width="28" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="309" y="92" width="31" height="6" rx="3" fill="var(--hero-brand)" />
      <circle cx="132" cy="124" r="5" fill="var(--hero-brand)" />
      <rect x="145" y="121" width="40" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="181" y="121" width="27" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="245" y="121" width="31" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="309" y="121" width="30" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="132" cy="151" r="5" fill="#B7BDC5" />
      <rect x="145" y="148" width="35" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="181" y="148" width="23" height="6" rx="3" fill="var(--hero-brand)" />
      <rect x="245" y="148" width="33" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="309" y="148" width="28" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="132" cy="178" r="5" fill="#B7BDC5" />
      <rect x="145" y="175" width="43" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="181" y="175" width="29" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="245" y="175" width="30" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="309" y="175" width="22" height="6" rx="3" fill="var(--hero-brand)" />
    </g>
  );
}

function ApiClientWindow() {
  return (
    <g data-part="api-client">
      <rect style={{ filter: "drop-shadow(0 8px 14px rgba(17,19,24,.10))" }} x="0" y="0" width="360" height="230" rx="16" fill="var(--hero-light)" stroke="var(--hero-outline)" />
      <circle cx="22" cy="22" r="5" fill="#AAB1BA" />
      <circle cx="39" cy="22" r="5" fill="#B7BDC5" />
      <circle cx="56" cy="22" r="5" fill="#C4C9D0" />
      <line vectorEffect="non-scaling-stroke" strokeWidth="1.35" x1="102" y1="0" x2="102" y2="230" stroke="var(--hero-light-line-soft)" />

      <circle cx="24" cy="58" r="5" fill="var(--hero-brand)" />
      <rect x="39" y="55" width="42" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="24" cy="82" r="5" fill="#B7BDC5" />
      <rect x="39" y="79" width="34" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="24" cy="106" r="5" fill="#B7BDC5" />
      <rect x="39" y="103" width="39" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="24" cy="130" r="5" fill="#B7BDC5" />
      <rect x="39" y="127" width="29" height="6" rx="3" fill="var(--hero-light-line)" />

      <rect x="124" y="49" width="150" height="34" rx="9" fill="var(--hero-light-2)" stroke="var(--hero-light-line-soft)" />
      <rect x="136" y="62" width="38" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="182" y="62" width="66" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="287" y="49" width="50" height="34" rx="9" fill="var(--hero-brand)" />
      <rect x="299" y="63" width="26" height="6" rx="3" fill="#FFFFFF" opacity=".85" />
      <rect x="124" y="100" width="92" height="105" rx="10" fill="var(--hero-light-2)" stroke="var(--hero-light-line-soft)" />
      <rect x="228" y="100" width="109" height="105" rx="10" fill="var(--hero-light-2)" stroke="var(--hero-light-line-soft)" />
      <circle cx="140" cy="119" r="5" fill="#B7BDC5" />
      <rect x="151" y="116" width="41" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="140" cy="141" r="5" fill="#B7BDC5" />
      <rect x="151" y="138" width="29" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="140" cy="163" r="5" fill="var(--hero-brand)" />
      <rect x="151" y="160" width="38" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="244" cy="120" r="3" fill="#B7BDC5" />
      <rect x="254" y="117" width="38" height="6" rx="3" fill="var(--hero-brand)" />
      <rect x="300" y="117" width="22" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="244" cy="141" r="3" fill="#B7BDC5" />
      <rect x="254" y="138" width="25" height="6" rx="3" fill="var(--hero-light-line)" />
      <rect x="287" y="138" width="31" height="6" rx="3" fill="var(--hero-light-line)" />
      <circle cx="244" cy="162" r="3" fill="#B7BDC5" />
      <rect x="254" y="159" width="46" height="6" rx="3" fill="var(--hero-brand)" />
      <circle cx="244" cy="183" r="3" fill="#B7BDC5" />
      <rect x="254" y="180" width="33" height="6" rx="3" fill="var(--hero-light-line)" />
    </g>
  );
}

function Connector({ d, from, to, radius }: { d: string; from: [number, number]; to: [number, number]; radius: number }) {
  return (
    <>
      <path d={d} fill="none" stroke="var(--hero-connector)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <circle cx={from[0]} cy={from[1]} r={radius} fill="var(--hero-brand)" />
      <circle cx={to[0]} cy={to[1]} r={radius} fill="var(--hero-brand)" />
    </>
  );
}

function MobileVisual() {
  return (
    <svg viewBox="0 0 390 390" className="h-auto w-full">
      <g data-part="connectors">
        <Connector d="M175 156V164Q175 166 177 166H190" from={[175, 156]} to={[190, 166]} radius={3.8} />
        <Connector d="M266 172V202Q266 214 254 214H231Q219 214 219 226V236" from={[266, 172]} to={[219, 236]} radius={3.8} />
      </g>
      <g transform="translate(24 48) scale(.40)"><IdeWindow /></g>
      <g transform="translate(190 84) scale(.36)"><DatabaseWindow /></g>
      <g transform="translate(98 236) scale(.36)"><ApiClientWindow /></g>
    </svg>
  );
}

function TabletVisual() {
  return (
    <svg viewBox="0 0 760 520" className="h-auto w-full">
      <g data-part="connectors">
        <Connector d="M365 210H390" from={[365, 210]} to={[390, 210]} radius={4.5} />
        <Connector d="M412 254V330" from={[412, 254]} to={[412, 330]} radius={4.5} />
      </g>
      <g transform="translate(55 70) scale(.72)"><IdeWindow /></g>
      <g transform="translate(390 92) scale(.66)"><DatabaseWindow /></g>
      <g transform="translate(245 330) scale(.64)"><ApiClientWindow /></g>
    </svg>
  );
}

function DesktopVisual() {
  return (
    <svg viewBox="0 0 1180 700" className="h-auto w-full">
      <g data-part="connectors">
        <Connector d="M520 215H620Q635 215 635 230V275Q635 290 650 290H690" from={[520, 215]} to={[690, 290]} radius={5} />
        <Connector d="M720 345V355" from={[720, 345]} to={[720, 355]} radius={5} />
      </g>
      <g transform="translate(90 90)"><IdeWindow /></g>
      <g transform="translate(690 120) scale(.92)"><DatabaseWindow /></g>
      <g transform="translate(430 355) scale(.90)"><ApiClientWindow /></g>
    </svg>
  );
}

export default function HeroVisual({ className }: VisualProps) {
  return (
    <div
      className={`[--hero-brand:#2F6BFF] [--hero-dark:#1B1F26] [--hero-dark-2:#252A33] [--hero-dark-line:#555D69] [--hero-dark-line-soft:#3B424D] [--hero-light:#FFFFFF] [--hero-light-2:#F4F5F7] [--hero-light-line:#C8CDD4] [--hero-light-line-soft:#E2E5E9] [--hero-connector:#B8BEC7] [--hero-outline:#D5D9DF] dark:[--hero-light:#F5F6F8] dark:[--hero-light-2:#EDEFF2] dark:[--hero-light-line:#BFC5CD] dark:[--hero-light-line-soft:#D7DBE1] dark:[--hero-connector:#6E7682] dark:[--hero-outline:#4A515B] ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="block min-[640px]:hidden"><MobileVisual /></div>
      <div className="hidden min-[640px]:block min-[1100px]:hidden"><TabletVisual /></div>
      <div className="hidden min-[1100px]:block"><DesktopVisual /></div>
    </div>
  );
}
