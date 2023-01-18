import { FiLink } from "react-icons/fi";
import "./home.css";
import Menu from "../../components/Menu/menu";
import { useState } from "react";
import LinkItem from "../../components/LinkItem/linkItem";
//import { Link } from "react-router-dom";
import api from "../../Services/api";
import { saveLink } from "../../Services/storeLinks";
//import Links from "../Links/link";

function Home() {
  const [link, setLink] = useState("");

  //retorno da api
  const [data, setData] = useState({});

  //renderização condicional
  const [showModal, setShowModal] = useState(false);

  async function linkEncurtado() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      //retorno da api
      setData(response.data);
      setShowModal(true);

      saveLink("@encurtaLink", response.data);

      setLink("");
    } catch {
      alert("Ops algo deu errado!");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo" />
        <h1>Short Link!</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={linkEncurtado}>Encurtar Link!</button>
      </div>
      <Menu />

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}

export default Home;
