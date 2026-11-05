import logo from "../../assets/CodeKolkataLogo.jpg";

/**
 * Official CODE KOLKATA brand mark.
 *
 * The source artwork is a landscape JPEG, so it is rendered with
 * `object-fit: contain` inside the caller's existing frame. That keeps the
 * logo placement intact and prevents any stretching or cropping.
 */
export default function BrandLogo({ className = "", alt = "CODE KOLKATA logo", ...props }) {
  return (
    <img
      src={logo}
      alt={alt}
      className={`brand-logo ${className}`}
      draggable={false}
      decoding="async"
      {...props}
    />
  );
}
