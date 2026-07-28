export default function NamingDecision() {
  return (
    <figure className="naming-decision">
      <p className="naming-decision__question">Which way do we go with DeepL Write?</p>

      <ol className="naming-decision__candidates">
        <li className="naming-decision__candidate naming-decision__candidate--chosen">
          <p className="naming-decision__verdict">
            <span aria-hidden="true">✓</span>
            Follow API convention
          </p>
          <p aria-label="DeepL Write Pro" className="naming-decision__name">
            DeepL <em>Write</em> Pro
          </p>
          <p className="naming-decision__reading">
            Put the product before the offer.
          </p>
        </li>

        <li className="naming-decision__candidate naming-decision__candidate--rejected">
          <p className="naming-decision__verdict">
            <span aria-hidden="true">✕</span>
            Follow Translator convention
          </p>
          <p aria-label="DeepL Pro Write" className="naming-decision__name">
            DeepL Pro <em>Write</em>
          </p>
          <p className="naming-decision__reading">
            “If we went this way around, then Write may appear to be a plan of DeepL
            Translator.”
          </p>
        </li>
      </ol>

      <figcaption>
        The working frame selects the API convention and rejects the alternative because it can
        make Write look like a Translator plan.
      </figcaption>
    </figure>
  );
}
