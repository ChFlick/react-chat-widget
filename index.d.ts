import React from 'react';

export interface WidgetProps {
  title?: string,
  titleAvatar?: string,
  subtitle?: string,
  handleNewUserMessage: (userInput: string) => {},
  handleQuickButtonClicked?: (quickButtonValue: string) => {},
  senderPlaceHolder?: string,
  profileAvatar?: string,
  showCloseButton?: boolean,
  fullScreenMode?: boolean,
  badge?: number,
  autofocus?: boolean,
  // launcher?: PropTypes.func
};

export declare const Widget: React.Component<WidgetProps>

export declare function addUserMessage(text: string): void;
export declare function addResponseMessage(text: string): void;

export declare type Link = {
  title: string,
  link: string,
  target: string
}

export declare function addLinkSnippet(link: Link) : void;
export declare function toggleMsgLoader(): void;
export declare function renderCustomComponent(component: React.Component, props: Map, showAvatar = false): void;
export declare function toggleWidget(): void;
export declare function toggleInputDisabled(): void;
export declare function dropMessages(): void;
export declare function isWidgetOpened(): boolean;

export declare type Button = {
  name: string,
  label: string
}

export declare function setQuickButtons(buttons: []): void;