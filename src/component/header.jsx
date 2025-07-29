import "./header.css";
export function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/src/assets/react.svg" />
        </div>
        <div className="title">
          <p>ReactFacts</p>
        </div>
      </header>
    </>
  );
}
