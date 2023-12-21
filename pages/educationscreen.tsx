import Header from "./component/header";

export default function Education() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      ></div>
      <Header />
    </div>
  );
}
