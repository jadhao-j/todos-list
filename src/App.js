import React, { useState } from 'react';
import './App.css';
import Header from './mycomponent/Header';
import Karma from './mycomponent/Karma';
import Kaand from './mycomponent/Kaand';
import Parinaam from './mycomponent/Parinaam';

function App() {
  const [karmas, setKarmas] = useState([
    {
      sno: 1,
      title: "subah mandir jana",
      desc: "mandir ja kar man ko pavitra karna tha",
      kaand: "Pujaari ne ladaki ki taraf dekhate huye pakad liya"
    },
    {
      sno: 2,
      title: "exam main samane baithi ladki se baat karna",
      desc: "padai to hoti nahi thi par ladki se baat karne ka mann tha",
      kaand: "Ab usne Boyfrind ko bata diya ho marne ke liye dund raha hai"
    },
    {
      sno: 3,
      title: "ladki ki help karna",
      desc: "Agale bus stand par bhid thi maine, sabki rumaal hataakar ladki ka bag liya aur side ki seat par rakh diya",
      kaand: "Ab use lag raha hai main ladkibaaz hoon"
    }
  ]);

  const [selectedKaand, setSelectedKaand] = useState(""); // or null

  const onDelete = (kaand) => {
    setKarmas(karmas.filter((k) => k.sno !== kaand.sno));
  };

  const onTrigger = (kaand) => {
    alert(kaand.kaand); // For testing, show an alert
    setSelectedKaand(kaand.kaand); // Or whatever you want to do
  };

  return (
    <>
      <Header title="Sachi ghatanaye" />
      <Karma karmas={karmas} onDelete={onDelete} onTrigger={onTrigger} />
      <Parinaam kaandText={selectedKaand} />
    </>
  );
}

export default App;
