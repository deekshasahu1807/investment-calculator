
export default function Header({heading, image}) {
  return (
    <header id="header">
      <img src={image} alt={heading} width="200" />
      <h1>{heading}</h1>
    </header>
  );
}
