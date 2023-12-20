import Image from "next/image";
import Header from "./component/header";

const Hobby: React.FC = () => {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/background.jpg"
          alt="light"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Header />
    </>
  );
};

export default Hobby;
