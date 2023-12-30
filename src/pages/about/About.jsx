import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./about.scss";
import CurrentPage from "../../layout/currentPage/CurrentPage";
import Title from "../../layout/title/Title";
import image01 from "../../assets/images/Calque 31.png";
import image02 from "../../assets/images/Calque 29.png";
import { FiCheck } from "react-icons/fi";
import image03 from "../../assets/images/Calque 131.png";
import image04 from "../../assets/images/Calque 44.png";
import image05 from "../../assets/images/Calque 43.png";
import image06 from "../../assets/images/Calque 45.png";
import image07 from "../../assets/images/Calque 30.png";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="intro">
        {/* <div className="title">Cour Royale</div> */}
        <CurrentPage title="Cour Royale" />
        <Title title="Cour Royale" />
      </div>
      <div className="desc">
        <div className="left">
          <div className="image">
            <img src={image01} alt="A propos de nous" className="imageAbout" />
            <img src={image02} alt="image" className="secondImage" />
          </div>
        </div>
        <div className="right">
          <div className="aboutUs">
            <span className="point"></span>
            <span className="whoAreWe">Qui sommes nous ?</span>
          </div>
          <h1>Nous nous battons pour un avenir meilleur</h1>
          <p className="details">
            Mesdames et Messieurs les Députés, c'est ce que nous faisons, ce à
            quoi nous nous sommes engagés.Étant donné que nous sommes au bas de
            la chaîne alimentaire, si tout ce que nous faisons est de continuer
            à produire, il n'y aura guère d'espoir pour le futur.Ce faisant, il
            n'a pas réduit les frais de transport et a fait supporter aux
            clients la charge des capacités inutilisées.
          </p>
          <div className="listContainer">
            <div className="list">
              <div className="item">
                <FiCheck
                  style={{ fontSize: "18px", color: "rgb(11, 223, 238)" }}
                />
                <span>first element</span>
              </div>
              <div className="item">
                <FiCheck
                  style={{ fontSize: "18px", color: "rgb(11, 223, 238)" }}
                />
                <span>Second element</span>
              </div>
              <div className="item">
                <FiCheck
                  style={{ fontSize: "18px", color: "rgb(11, 223, 238)" }}
                />
                <span>Third element</span>
              </div>
              <div className="item">
                <FiCheck
                  style={{ fontSize: "18px", color: "rgb(11, 223, 238)" }}
                />
                <span>Fourth element</span>
              </div>
              <div className="item">
                <FiCheck
                  style={{ fontSize: "18px", color: "rgb(11, 223, 238)" }}
                />
                <span>Fifth element</span>
              </div>
              <div className="item">
                <FiCheck
                  style={{ fontSize: "18px", color: "rgb(11, 223, 238)" }}
                />
                <span>sixth element</span>
              </div>
            </div>
            <div className="img">
              <span className="number">+75</span>
              <p>années d'expériences</p>
            </div>
          </div>
        </div>
      </div>
      <div className="moreDetails">
        <p>
          Pour le moment, je ferai seulement écho aux commentaires de Jim, «
          C'est pourquoi nous faisons ce que nous faisons ».La première chose
          que nous ayons à faire, c'est de faire beaucoup plus que ce que nous
          faisons déjà - et de le faire beaucoup mieux.Le fait que le
          gouvernement ne se soit pas excusé pour les mauvais traitements dont
          des enfants autochtones innocents onJ'ai parlé du fait que rien de
          semblable n'était en place pour promouvoir cette révélation. Un autre
          aspect d'importance commun aux deux types de soins à domicile est le
          fait que les ménages en assument le gros du fardeau.Cette pratique
          fait que les mêmes actions résident dans deux comptes différents en
          même temps!Le Comité a tenu compte du fait que l'auteur avait eu un
          comportement violent ou dangereux après sa libération conditionnelle.
        </p>
      </div>
      <div className="overall">
        <h1 className="title">
          Bafoussam Kingdom, <span>C'est:</span>
        </h1>
        <div className="itemContainer">
          <div className="item">
            <img src={image03} alt="image" className="image" />
            <span className="number">+12</span>
            <span className="label">Organisations</span>
          </div>
          <div className="item">
            <img src={image05} alt="image" className="image" />
            <span className="number">+5687</span>
            <span className="label">membres adhérents</span>
          </div>
          <div className="item">
            <img src={image04} alt="image" className="image" />
            <span className="number">25</span>
            <span className="label">Associations enregistrées</span>
          </div>
          <div className="item">
            <img src={image07} alt="image" className="image" />
            <span className="number">+83</span>
            <span className="label">Projets réalisés</span>
          </div>
          <div className="item">
            <img src={image06} alt="image" className="image" />
            <span className="number">+83</span>
            <span className="label">Evènements organisés</span>
          </div>
        </div>
      </div>
      <div className="whereWeComeFrom">
        <div className="left">
          <div className="btns">
            <div className="btn">Notre mission</div>
            <div className="btn">Notre Vision</div>
            <div className="btn">Historique</div>
          </div>
          <div className="details">
            <div className="textmission" id="textMission">
              <p>
                Dans un contexte des affaires qui évolue rapidement, notre
                mission est de livrer des solutions dynamiques fondées sur la
                confiance, et d’aider nos clients à prendre des décisions
                éclairées qui leur permettront de fonctionner efficacement.
                Notre mission guide nos décisions et nourrit nos conversations.
                Elle montre notre engagement à travailler pour obtenir
                d’excellents résultats pour nos clients, notre personnel et la
                société.
                <br />
                Nous créons des leaders au sein de notre organisation, chez nos
                clients et dans la collectivité, et les bons leaders inspirent
                leur entourage. Nous rassemblons différentes idées pour
                accomplir ce qui compte le plus.
              </p>
            </div>
            <div className="textvision" id="textVision">
              <p></p>
            </div>
            <div className="texthistory" id="textHistory">
              <p></p>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src={image02}
            alt="image"
            id="whereWe_mission"
            className="whereImage"
          />
          {/* <img src="" alt="image" id="whereWe_vision" className="whereImage" />
          <img src="" alt="image" id="whereWe_history" className="whereImage" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
