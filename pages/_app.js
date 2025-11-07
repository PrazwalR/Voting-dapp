import "../styles/globals.css";

//INTERNAL IMPORT
import { VotingProvider } from "../context/Voter";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const MyApp = ({ Component, pageProps }) => (
  <VotingProvider>
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </VotingProvider>
);

export default MyApp;
