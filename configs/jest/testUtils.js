import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import PropTypes from "prop-types";

const IntegrationProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

IntegrationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IntegrationProvider;
