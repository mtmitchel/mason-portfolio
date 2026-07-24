const eras = [
  { era: "2023", caption: "One simple grid" },
  { era: "2024", caption: "Tabs and bundles" },
  { era: "2025", caption: "Four product pages" },
];

export default function EraDiagram() {
  return (
    <div
      className="chapter-diagram"
      role="img"
      aria-label="Offer architecture across three eras: in 2023, one Translator grid with a separate API box and Write free; in 2024, three tabs above a busier grid of bundle cards; in 2025, four product pages for Translator, Write, Voice and API, with add-on chips and Voice marked sales-led."
    >
      {eras.map((item) => (
        <div className="chapter-diagram-panel" key={item.era}>
          <span className="chapter-diagram-era">{item.era}</span>
          <span className="chapter-diagram-caption">{item.caption}</span>
        </div>
      ))}
    </div>
  );
}
