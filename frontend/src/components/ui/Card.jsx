export default function Card({
  as: Tag = "div",
  padded = true,
  interactive = true,
  className = "",
  children,
  ...rest
}) {
  return (
    <Tag
      className={[
        "card",
        interactive ? "card-hover" : "",
        padded ? "p-6 sm:p-7" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
