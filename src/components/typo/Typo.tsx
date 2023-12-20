interface TypoProps {
  color?: string;
  children: React.ReactNode;
}

function MainTitle({ color, children }: TypoProps) {
  return (
    <h1 className={`text-6xl font-bold text-balance ${color}`}>{children}</h1>
  );
}

function SubTitle({ children }: TypoProps) {
  return <div className="text-5xl font-bold text-zinc-400">{children}</div>;
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

function BodyText({ color, children }: TypoProps) {
  return <div className={`text-md ${color}`}>{children}</div>;
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
Typo.MainTitle = MainTitle;
Typo.SubTitle = SubTitle;

export default Typo;
