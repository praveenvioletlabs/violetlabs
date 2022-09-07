git;
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";
import { formStoreData } from "Utilities/helpers";
import Main from "./home";

const Home = (props) => {
  const propShape = formStoreData(props, ["home"]);

  useEffect(() => {
    return () => {
      propShape.actions.resetHomeStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <Main></Main>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

Home.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

export default Home;
