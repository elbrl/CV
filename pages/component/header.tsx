import { useState } from "react";
import Link from "next/link";

interface Languages {
  mongol: boolean;
  english: boolean;
  japanese: boolean;
}

export default function Header() {
  const [languages, setLanguages] = useState<Languages>({
    mongol: false,
    english: false,
    japanese: false,
  });
  const handleCheckboxClick = (language: keyof Languages) => {
    setLanguages((prevLanguages) => ({
      ...prevLanguages,
      [language]: !prevLanguages[language],
    }));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "90vw",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "10vh",
              width: "60vw",
              color: "white",
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Link href="/">
              {languages.japanese ? (
                <div className="headerButton">家</div>
              ) : languages.mongol ? (
                <div className="headerButton">Нүүр</div>
              ) : (
                <div className="headerButton">Home</div>
              )}
            </Link>
            <Link href="/educationscreen">
              {languages.japanese ? (
                <div className="headerButton">教育</div>
              ) : languages.mongol ? (
                <div className="headerButton">Боловсрол</div>
              ) : (
                <div className="headerButton">Education</div>
              )}
            </Link>
            <Link href="/skillscreen">
              {languages.japanese ? (
                <div className="headerButton">スキル</div>
              ) : languages.mongol ? (
                <div className="headerButton">Чадвар</div>
              ) : (
                <div className="headerButton">Skills</div>
              )}
            </Link>
            <Link href="/personal-infoscreen">
              {languages.japanese ? (
                <div className="headerButton">情報</div>
              ) : languages.mongol ? (
                <div className="headerButton">Мэдээлэл</div>
              ) : (
                <div className="headerButton">Information</div>
              )}
            </Link>
            <Link href="/hobbyscreen">
              {languages.japanese ? (
                <div className="headerButton">趣味</div>
              ) : languages.mongol ? (
                <div className="headerButton">Сонирхол</div>
              ) : (
                <div className="headerButton">Hobby</div>
              )}
            </Link>
          </div>
        </div>
        <div>
          <div
            onClick={() => handleCheckboxClick("mongol")}
            className={`form-control ${languages.mongol ? "checked" : ""}`}
          >
            <label className="label cursor-pointer">
              <span className="label-text">Монгол　</span>
              <input
                type="checkbox"
                className="toggle"
                checked={languages.mongol}
                onChange={() => {}}
              />
            </label>
          </div>

          <div
            onClick={() => handleCheckboxClick("japanese")}
            className={`form-control ${languages.japanese ? "checked" : ""}`}
          >
            <label className="label cursor-pointer">
              <span className="label-text">日本　</span>
              <input
                type="checkbox"
                className="toggle"
                checked={languages.japanese}
                onChange={() => {}}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
