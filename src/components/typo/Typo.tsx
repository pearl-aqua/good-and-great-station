interface TypoProps {
  children: React.ReactNode;
}

function H1({ children }: TypoProps) {
  return <h1 className="text-2xl font-bold mb-2">{children}</h1>;
}

function H2({ children }: TypoProps) {
  return <h2 className="text-xl font-bold mb-2">{children}</h2>;
}

function Title({ children }: TypoProps) {
  return <div className="text-2xl font-bold">{children}</div>;
}

function BodyText({ children }: TypoProps) {
  return <div className="text-md">{children}</div>;
}

function DecsText({ children }: TypoProps) {
  return <div className="text-sm">{children}</div>;
}

function ListText({ children }: TypoProps) {
  return <li className="text-md mb-1">{children}</li>;
}

function TitleLabel({ children }: TypoProps) {
  return <div className="text-lg font-bold mb-2 text-zinc-600">{children}</div>;
}

function Label({ children }: TypoProps) {
  return <div className="text-sm">{children}</div>;
}

function Typo() {
  return <></>;
}

Typo.H1 = H1;
Typo.H2 = H2;
Typo.Title = Title;
Typo.BodyText = BodyText;
Typo.DecsText = DecsText;
Typo.ListText = ListText;
Typo.Label = Label;
Typo.TitleLabel = TitleLabel;

export default Typo;
