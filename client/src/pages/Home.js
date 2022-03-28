import React from "react";
import CardContainer from "../components/CardContainer/CardContainer";
import SupportCard from "../components/MinorComponents/SupportCard";

const Home = ({setModalType}) => {
  return (
    <div className="container">
      <CardContainer setModalType={setModalType}/>
      <SupportCard />
    </div>
  );
}
export default Home;
