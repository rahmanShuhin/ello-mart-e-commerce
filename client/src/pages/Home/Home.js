import TopBanner from '../../components/Home/Banner/TopBanner';
import CardContainer from "../../components/Home/CardContainer/CardContainer";
import SupportCard from "../../components/Home/MinorComponents/SupportCard";

const Home = ({setModalType}) => {
  return (
    <div className="container">
      <TopBanner/>
      <CardContainer/>
      <SupportCard />
    </div>
  );
}
export default Home;
