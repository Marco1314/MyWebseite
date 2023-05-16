import { Myheader } from "./templates/header/myheader";
import Main from "./templates/main/main";
import "../src/styles/Myheader/Myheader.css";
import "../src/styles/accordion/accordion.css";


export default function test() {
  let content1 = "Wir porgammieren Webseiten auf Basis von WordPress mit HTML5,CSS3,JS,PHP,React und Bootstrap, wir setzen dabei auf responsive first, damit die Applikation oder Webseite auch auf jedem Endgerät ordentlich aussieht.";
  let content2 = "WordPress ist ein Content-Managment-System (abgekürzt CMS), es wird dazu verwendet um visuelle Anpassungen von Leuten vorzunehmen die keine oder wenig Ahnung vom programmieren diverse Anwendungen haben."
  let content3 = "Leider wird WordPress oftmals fälschlicherweise als Homepagebaukasten System verwendet um eigenständig Webseiten zusammen zu klicken, dies führt dazu, dass die Webseite durch Plugins z.B Elementor unsicher werden, auch das downloaden von Themes ohne den Programmierer zu kennen ist sehr riskant. Tatsächlich gibt es bei allen beiden Varianten immer wieder Vorfälle, indem sogar hohe Geldsummen entwendet werden. Um dies vorzubeugen sollten Sie einen Programmierer ihrer Wahl beauftragen, der die Systeme eigenständig programmiert. ";
  let content4 = "Die Kosten einer Webseite sind je nach Aufwand unterschiedlich, jedoch kann man mit insgesamt ca. 4000 bis 5000 Euro rechnen."
  return (
    <>
      <Myheader />
      <Main values={[{ title: "Wie programmiert ihr Webseiten/Webapplikationen?", id: "1", content: content1 }, { title: "Was ist WordPress?", id: "2", content: content2 }, { title: "Ist WordPress sicher?", id: "3", content: content3 }, { title: "Was kostet eine Webseite?", id: "4", content: content4 },]} />
    </>

  )
}
