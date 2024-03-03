import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import SearchIcon from "./images/SearchIcon";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Roboto', sans-serif",

    primaryColor: "#FFD500",
    secondaryColor: "#000000",

    date: "05/03/2024",
    heading: "We're <br/> Looking For  ",

    postName: "UI/UX  Designer",
    searchIcon: <SearchIcon color="#FFD500" />,

    sendYourCv: {
      label: "Send your CV and <br/> portfolio to:",
      email: "hello@rellygreatsite.com",
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.primaryColor,
          "--primaryColor": allData.primaryColor,
          "--secondaryColor": allData.secondaryColor,
          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
