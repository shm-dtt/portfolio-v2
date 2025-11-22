export const HoverButton = ({ text }: { text: string }) => {
  const characters = text.split("");

  return (
    <p
      className="group w-fit relative overflow-hidden cursor-pointer select-none inline-block"
      aria-label={text}
      style={{ height: "1.5em" }}
    >
      <span className="inline-block whitespace-nowrap">
        {characters.map((char, index) => (
          <span
            key={`top-${index}`}
            className="inline-block transition-transform duration-500 ease-in-out translate-y-0 group-hover:-translate-y-full"
            style={{
              transitionDelay: `${index * 30}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="inline-block whitespace-nowrap absolute top-0 left-0">
        {characters.map((char, index) => (
          <span
            key={`bottom-${index}`}
            className="inline-block transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0"
            style={{
              transitionDelay: `${index * 30}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </p>
  );
};
