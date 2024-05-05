import Main from "@/src/components/Main";
import HomePage from "@/src/components/Home";

const Home: React.FC = () => {
  return (
    <div className="main-page-container flex h-screen bg-black text-white">
      <Main>
        <HomePage />
      </Main>
    </div>
  );
};

export default Home;
