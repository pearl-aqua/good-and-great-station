interface TypoProps {
  children: React.ReactNode
}

function H1({ children }: TypoProps) {
  return (<h1 className="text-3xl font-bold mb-2">{children}</h1>)
}

function H2({ children }: TypoProps) {
  return (<h2 className="text-xl font-bold mb-1">{children}</h2>)
}

function BodyText({ children }: TypoProps) {
  return (<div className="text-md">{children}</div>)
}

function ListText({ children }: TypoProps) {
  return (<li className="text-md">{children}</li>)
}

function Typo() {
  return <></>
}

Typo.H1 = H1;
Typo.H2 = H2;
Typo.BodyText = BodyText;
Typo.ListText = ListText;

export default Typo;