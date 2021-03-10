import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

// import Overview from "../components/widgets/Overview/Overview";
// import MessageParser from "../components/widgets/MessageParser/MessageParser";
// import ActionProviderDocs from "../components/widgets/ActionProvider/ActionProviderDocs";

const botName = "BD LiveBot ";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help you explain how I work.`
    ),
    createChatBotMessage(
      "I am here to help you with blood search, blood donation FAQ's and anything about BloodDonor",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
  ],
  state: {
    gist: "",
  },
  customComponents: {},
  widgets: [
    // {
    //   widgetName: "overview",
    //   widgetFunc: (props) => <Overview {...props} />,
    //   mapStateToProps: ["gist"],
    // },
    // {
    //   widgetName: "messageParser",
    //   widgetFunc: (props) => <MessageParser {...props} />,
    //   mapStateToProps: ["gist"],
    // },
    // {
    //   widgetName: "actionProviderDocs",
    //   widgetFunc: (props) => <ActionProviderDocs {...props} />,
    //   mapStateToProps: ["gist"],
    // },
  ],
};

export default config;