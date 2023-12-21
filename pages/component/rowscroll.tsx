export default function RowScroll() {
  return (
    <div
      style={{
        width: "100vw",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "30px",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          My used and known programming languages
        </div>
        <div className="rowscroll">
          <div className="row-scroll">
            <img className="rowScroll" src="js.png" alt="js" />
            <div style={{ width: "150px", textAlign: "center" }}>
              JavaScript
            </div>
          </div>

          <div className="row-scroll">
            <img className="rowScroll" src="html.png" alt="js" />
            <div style={{ width: "150px", textAlign: "center" }}> HTML </div>
          </div>
          <div className="row-scroll">
            <img className="rowScroll" src="css.png" alt="js" />
            <div style={{ width: "150px", textAlign: "center" }}> CSS </div>
          </div>
          <div className="row-scroll">
            <img className="rowScroll" src="react.png" alt="js" />
            <div style={{ width: "150px", textAlign: "center" }}>ReactJS</div>
          </div>
          <div className="row-scroll">
            <img className="rowScroll" src="react.png" alt="js" />
            <div style={{ width: "150px", textAlign: "center" }}>
              React Native
            </div>
          </div>
          <div className="row-scroll">
            <img className="rowScroll" src="nodejs.png" alt="js" />
            <div style={{ width: "150px", textAlign: "center" }}>NodeJS</div>
          </div>
          <div
            className="row-scroll"
            style={{ justifyContent: "space-between" }}
          >
            <img
              style={{ width: "150px", height: "50px" }}
              src="mongodb.png"
              alt="js"
            />
            <div style={{ width: "150px", textAlign: "center" }}>MongoDB</div>
          </div>
          <div className="row-scroll">
            <img className="rowScroll" src="graphql.png" alt="js" />
            <div style={{ width: "150px", textAlign: "center" }}>GraphQL</div>
          </div>
          <div className="row-scroll">
            <img className="rowScroll" src="typescript.png" alt="js" />
            <div style={{ width: "150px", textAlign: "center" }}>
              Typescript
            </div>
          </div>
          <div className="row-scroll">
            <img className="rowScroll" src="nextjs.png" alt="js" />
            <div
              style={{
                width: "150px",
                textAlign: "center",
                objectFit: "cover",
              }}
            >
              NextJS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
