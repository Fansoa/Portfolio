import { useTheme } from "@emotion/react";
import GithubIcon from "../../icons/GithubIcon";
import NodeJsIcon from "../../icons/NodeJsIcon";
import ReactIcon from "../../icons/ReactIcon";
import WebdriverIoIcon from "../../icons/WebdriverIoIcon";
import YarnNpmIcon from "../../icons/YarnNpmIcon";
import SidebarButton from "./components/SidebarButton";
import { SidebarContainer as Container } from "./styled";

const Sidebar = () => {
  const theme = useTheme();
  return (
    <Container>
      <SidebarButton
        icon={<YarnNpmIcon />}
        tooltipText="Mes librairies préférés"
      />
      <SidebarButton
        icon={<ReactIcon />}
        tooltipText="Mes librairies préférés"
      />
      <SidebarButton
        icon={<NodeJsIcon />}
        tooltipText="Mes librairies préférés"
      />
      <SidebarButton
        icon={<WebdriverIoIcon />}
        tooltipText="Mes librairies préférés"
      />
      <SidebarButton
        icon={<GithubIcon fillColor={theme.colors.fullWhite} />}
        tooltipText="Mes librairies préférés"
      />
    </Container>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
