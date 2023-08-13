import SidebarButton from ".";
import GithubIcon from "../../../../icons/GithubIcon";
import NodeJsIcon from "../../../../icons/NodeJsIcon";
import ReactIcon from "../../../../icons/ReactIcon";
import WebdriverIoIcon from "../../../../icons/WebdriverIoIcon";
import YarnNpmIcon from "../../../../icons/YarnNpmIcon";
import theme from "../../../../theme";

export default {
  title: "Components/Sidebar/Components/SidebarButton",
  component: SidebarButton,
  args: {
    tooltipText: "tooltip message",
  },
  argTypes: {
    onClick: {
      action: "Button is clicked",
    },
  },
};

export const Github = {
  args: {
    icon: <GithubIcon fillColor={theme.colors.fullWhite} />,
  },
};

export const WebdriverIO = {
  args: {
    icon: <WebdriverIoIcon />,
  },
};

export const YarnNpm = {
  args: {
    icon: <YarnNpmIcon />,
  },
};

export const React = {
  args: {
    icon: <ReactIcon />,
  },
};

export const NodeJs = {
  args: {
    icon: <NodeJsIcon />,
  },
};
