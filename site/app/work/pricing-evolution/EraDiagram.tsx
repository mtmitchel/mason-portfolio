export default function EraDiagram() {
  return (
    <div
      className="chapter-diagram"
      role="img"
      aria-label="Offer architecture across three eras: in 2023, one Translator grid with a separate API box and Write free; in 2024, three tabs above a busier grid of bundle cards; in 2025, four product pages for Translator, Write, Voice and API, with add-on chips and Voice marked sales-led."
    >
      <div className="chapter-diagram-panel">
        <p className="chapter-diagram-era">2023</p>
        <p className="chapter-diagram-caption">One simple grid</p>
        <div className="chapter-diagram-stack">
          <div className="chapter-diagram-box chapter-diagram-box--grid" aria-hidden="true">
            <span>Translator</span>
            <div className="chapter-diagram-tiers">
              <i /><i /><i />
            </div>
          </div>
          <div className="chapter-diagram-row">
            <div className="chapter-diagram-box chapter-diagram-box--small" aria-hidden="true">API</div>
            <div className="chapter-diagram-chip chapter-diagram-chip--quiet" aria-hidden="true">Write · free</div>
          </div>
        </div>
      </div>

      <div className="chapter-diagram-panel chapter-diagram-panel--busy">
        <p className="chapter-diagram-era">2024</p>
        <p className="chapter-diagram-caption">Tabs and bundles</p>
        <div className="chapter-diagram-stack">
          <div className="chapter-diagram-tabs" aria-hidden="true">
            <span>Translator</span>
            <span className="is-active">Translator + Write</span>
            <span>API</span>
          </div>
          <div className="chapter-diagram-bundles" aria-hidden="true">
            <div className="chapter-diagram-box chapter-diagram-box--bundle"><b /><b /><b /></div>
            <div className="chapter-diagram-box chapter-diagram-box--bundle"><b /><b /><b /></div>
            <div className="chapter-diagram-box chapter-diagram-box--bundle"><b /><b /><b /></div>
          </div>
        </div>
      </div>

      <div className="chapter-diagram-panel">
        <p className="chapter-diagram-era">2025</p>
        <p className="chapter-diagram-caption">Four product pages</p>
        <div className="chapter-diagram-products" aria-hidden="true">
          <div className="chapter-diagram-box chapter-diagram-box--product">
            <span>Translator</span>
            <em className="chapter-diagram-chip">+ add-on</em>
          </div>
          <div className="chapter-diagram-box chapter-diagram-box--product">
            <span>Write</span>
            <em className="chapter-diagram-chip">+ add-on</em>
          </div>
          <div className="chapter-diagram-box chapter-diagram-box--product">
            <span>Voice</span>
            <em className="chapter-diagram-chip chapter-diagram-chip--quiet">Sales-led</em>
          </div>
          <div className="chapter-diagram-box chapter-diagram-box--product">
            <span>API</span>
          </div>
        </div>
      </div>
    </div>
  );
}
