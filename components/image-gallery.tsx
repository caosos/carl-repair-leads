import { Camera, ImageOff } from "lucide-react";
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

const exampleImages = [
  { filename: "drywall-hole-example-before.png", label: "Drywall hole — before" },
  { filename: "drywall-hole-example-after.png", label: "Drywall hole — after" },
  { filename: "ceiling-foot-through-example-before.png", label: "Ceiling damage — before" },
  { filename: "ceiling-foot-through-example-after.png", label: "Ceiling damage — after" },
  { filename: "rental-damage-example-before.png", label: "Rental damage — before" },
  { filename: "rental-damage-example-after.png", label: "Rental damage — after" },
  { filename: "drywall-before-after-showcase.png", label: "Drywall repair showcase" },
];

const supportedImagePattern = /\.(avif|gif|jpe?g|png|webp)$/i;

function publicImageExists(folder: string, filename: string) {
  return existsSync(path.join(process.cwd(), "public", "images", folder, filename));
}

function ImageCard({ folder, filename, label }: { folder: string; filename: string; label: string }) {
  const exists = publicImageExists(folder, filename);

  return (
    <figure className={`gallery-card${exists ? "" : " gallery-placeholder"}`}>
      {exists ? (
        <img src={`/images/${folder}/${encodeURIComponent(filename)}`} alt={label} loading="lazy" />
      ) : (
        <div className="gallery-placeholder-art" aria-label={`${label} image coming soon`}>
          <ImageOff aria-hidden="true" />
          <span>Example image coming soon</span>
        </div>
      )}
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export function ImageGallery() {
  const localDirectory = path.join(process.cwd(), "public", "images", "local-work");
  const localImages = existsSync(localDirectory)
    ? readdirSync(localDirectory).filter((filename) => supportedImagePattern.test(filename)).sort()
    : [];

  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="gallery-block">
          <div className="section-heading">
            <span className="eyebrow">What drywall damage can look like</span>
            <h2>Drywall Damage Examples</h2>
            <p>Common repair situations and the kind of finished result CARL works toward.</p>
          </div>
          <div className="image-gallery-grid">
            {exampleImages.map((image) => <ImageCard key={image.filename} folder="examples" {...image} />)}
          </div>
        </div>

        <div className="gallery-block local-gallery-block">
          <div className="section-heading">
            <span className="eyebrow">Completed in Central Arkansas</span>
            <h2>Local Work Gallery</h2>
            <p>Real completed CARL and Central Arkansas Drywall Repair jobs will live here.</p>
          </div>
          {localImages.length > 0 ? (
            <div className="image-gallery-grid local-image-gallery-grid">
              {localImages.map((filename) => (
                <ImageCard
                  key={filename}
                  folder="local-work"
                  filename={filename}
                  label={filename.replace(/[-_]+/g, " ").replace(/\.[^.]+$/, "")}
                />
              ))}
            </div>
          ) : (
            <div className="local-gallery-empty">
              <span className="service-icon"><Camera aria-hidden="true" /></span>
              <div>
                <h3>Real local job photos coming soon</h3>
                <p>Check back to see completed drywall repairs from Conway and Central Arkansas.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
