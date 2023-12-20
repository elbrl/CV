import { useState } from "react";
import Link from "next/link";

interface Languages {
  mongol: boolean;
  english: boolean;
  japanese: boolean;
}

export default function Header() {
  // Use state to track the language checkboxes
  const [languages, setLanguages] = useState<Languages>({
    mongol: false,
    english: false,
    japanese: false,
  });
  // Function to handle checkbox click
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
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              height: "10vh",
              width: "80vw",
              color: "white",
              fontSize: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Link href="/">
              {languages.japanese ? (
                <div>家</div>
              ) : languages.mongol ? (
                <div>Гэр</div>
              ) : (
                <div>Home</div>
              )}
            </Link>
            <Link href="/educationscreen">
              {languages.japanese ? (
                <div>教育</div>
              ) : languages.mongol ? (
                <div>Боловсрол</div>
              ) : (
                <div>Education</div>
              )}
            </Link>
            <Link href="/skillscreen">
              {languages.japanese ? (
                <div>スキル</div>
              ) : languages.mongol ? (
                <div>Чадвар</div>
              ) : (
                <div>Skills</div>
              )}
            </Link>
            <Link href="/personal-infoscreen">
              {languages.japanese ? (
                <div>情報</div>
              ) : languages.mongol ? (
                <div>Мэдээлэл</div>
              ) : (
                <div>Information</div>
              )}
            </Link>
            <Link href="/hobbyscreen">
              {languages.japanese ? (
                <div>趣味</div>
              ) : languages.mongol ? (
                <div>Сонирхол</div>
              ) : (
                <div>Hobby</div>
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
