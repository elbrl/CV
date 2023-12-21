import Header from "./component/header";
import RowScroll from "./component/rowscroll";

export default function Skills() {
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
      <RowScroll />
    </div>
  );
}
