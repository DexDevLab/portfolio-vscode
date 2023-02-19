import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Explorer.module.css";
import { portfolioSettings } from "../utils/portfolioSettings";
import ExplorerItem from "./ExplorerItem";
import ChevronRight from "./icons/ChevronRight";

const explorerItems = [
  {
    label: "root",
    iconOpen: "",
    iconClose: "",
    content: [
      {
        label: "about",
        enabled: true,
        name: "about.html",
        path: "/about",
        icon: "html_icon.svg",
      },
      {
        label: "github",
        enabled: portfolioSettings.contentGithub.enabled,
        name: "github.md",
        path: "/github",
        icon: "markdown_icon.svg",
      },
    ],
  },
  {
    label: "pages",
    iconOpen: "folder-views-open.svg",
    iconClose: "folder-views.svg",
    content: [
      {
        label: "home",
        enabled: true,
        name: "home.jsx",
        path: "/",
        icon: "react_icon.svg",
      },
    ],
    subfolders: [
      {
        label: "api",
        iconOpen: "folder-api-open.svg",
        iconClose: "folder-api.svg",
        content: [
          {
            label: "projects",
            enabled: portfolioSettings.contentProjects.enabled,
            name: "projects.js",
            path: "/projects",
            icon: "javascript.svg",
          },
        ],
      },
    ],
  },
  {
    label: "styles",
    iconOpen: "folder-css-open.svg",
    iconClose: "folder-css.svg",
    content: [
      {
        label: "contact",
        enabled: portfolioSettings.contentContact.enabled,
        name: "contact.css",
        path: "/contact",
        icon: "css_icon.svg",
      },
    ],
  },
  {
    label: "utils",
    iconOpen: "folder-utils-open.svg",
    iconClose: "folder-utils.svg",
    content: [
      {
        label: "articles",
        enabled: portfolioSettings.contentArticles.enabled,
        name: "articles.json",
        path: "/articles",
        icon: "json_icon.svg",
      },
    ],
  },
];

const Explorer = () => {
  const [rootOpen, setRootOpen] = useState(true);
  const [pagesOpen, setPagesOpen] = useState(true);
  const [apiOpen, setApiOpen] = useState(true);
  const [stylesOpen, setStylesOpen] = useState(true);
  const [utilsOpen, setUtilsOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className={styles.title}>Explorer</p>
        <p className={styles.subtitle}>...</p>
      </div>
      <div key={"explorer-content"}>
        <div key={"root"}>
          <input
            type="checkbox"
            className={styles.checkbox}
            id="root-folder"
            checked={rootOpen}
            onChange={() => setRootOpen(!rootOpen)}
          />
          <label htmlFor="root-folder" className={styles.heading}>
            <ChevronRight
              className={styles.chevron}
              style={rootOpen ? { transform: "rotate(90deg)" } : {}}
            />
            <p style={{ marginBottom: "4px" }}>
              {portfolioSettings.projectName}
            </p>
          </label>
          <div
            className={styles.files}
            style={rootOpen ? { display: "block" } : { display: "none" }}
          >
            <div key={"pages"} style={{ paddingLeft: "12px" }}>
              <input
                type="checkbox"
                className={styles.checkbox}
                id="pages-folder"
                checked={pagesOpen}
                onChange={() => setPagesOpen(!pagesOpen)}
              />
              <label
                htmlFor="pages-folder"
                className={styles.heading}
                style={{ textTransform: "lowercase", fontWeight: "normal" }}
              >
                <ChevronRight
                  className={styles.chevron}
                  style={pagesOpen ? { transform: "rotate(90deg)" } : {}}
                />
                {pagesOpen ? (
                    <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                      <Image
                        src={`/${explorerItems[1].iconOpen}`}
                        alt={"pages-folder"}
                        height={18}
                        width={18}
                      />{" "}
                    </div>
                ) : (
                    <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                      <Image
                        src={`/${explorerItems[1].iconClose}`}
                        alt={"pages-folder"}
                        height={18}
                        width={18}
                      />{" "}
                    </div>
                )}
                <p style={{ marginBottom: "4px" }}>pages</p>
              </label>
              <div
                className={styles.files}
                style={pagesOpen ? { display: "block" } : { display: "none" }}
              >
                <div key={"api"} style={{ paddingLeft: "24px" }}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    id="api-folder"
                    checked={apiOpen}
                    onChange={() => setApiOpen(!apiOpen)}
                  />
                  <label
                    htmlFor="api-folder"
                    className={styles.heading}
                    style={{ textTransform: "lowercase", fontWeight: "normal" }}
                  >
                    <ChevronRight
                      className={styles.chevron}
                      style={apiOpen ? { transform: "rotate(90deg)" } : {}}
                    />
                    {apiOpen ? (
                        <div
                          style={{ paddingLeft: "5px", paddingRight: "5px" }}
                        >
                          <Image
                            src={`/${explorerItems[1].subfolders[0].iconOpen}`}
                            alt={"api-folder"}
                            height={18}
                            width={18}
                          />{" "}
                        </div>
                    ) : (
                        <div
                          style={{ paddingLeft: "5px", paddingRight: "5px" }}
                        >
                          <Image
                            src={`/${explorerItems[1].subfolders[0].iconClose}`}
                            alt={"api-folder"}
                            height={18}
                            width={18}
                          />{" "}
                        </div>
                    )}
                    <p style={{ marginBottom: "4px" }}>api</p>
                  </label>
                  <div
                    className={styles.files}
                    style={apiOpen ? { display: "block" } : { display: "none" }}
                  >
                    {explorerItems[1].subfolders[0].content.map((item, idx) => {
                      return (
                        <ExplorerItem
                          active={item.enabled}
                          spacing={"14px"}
                          path={item.enabled ? item.path : ""}
                          key={"api-" + item.label + "-" + idx}
                          itemName={item.name}
                          icon={item.icon}
                          height={18}
                          width={18}
                        />
                      );
                    })}
                  </div>
                </div>
                {explorerItems[1].content.map((item, idx) => {
                  return (
                    <ExplorerItem
                      active={item.enabled}
                      spacing={"14px"}
                      path={item.enabled ? item.path : ""}
                      key={"root-" + item.label + "-" + idx}
                      itemName={item.name}
                      icon={item.icon}
                      height={18}
                      width={18}
                    />
                  );
                })}
              </div>
            </div>
            <div key={"styles"} style={{ paddingLeft: "12px" }}>
              <input
                type="checkbox"
                className={styles.checkbox}
                id="styles-folder"
                checked={stylesOpen}
                onChange={() => setStylesOpen(!stylesOpen)}
              />
              <label
                htmlFor="styles-folder"
                className={styles.heading}
                style={{ textTransform: "lowercase", fontWeight: "normal" }}
              >
                <ChevronRight
                  className={styles.chevron}
                  style={stylesOpen ? { transform: "rotate(90deg)" } : {}}
                />
                {stylesOpen ? (
                    <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                      <Image
                        src={`/${explorerItems[2].iconOpen}`}
                        alt={"styles-folder"}
                        height={18}
                        width={18}
                      />{" "}
                    </div>
                ) : (
                    <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                      <Image
                        src={`/${explorerItems[2].iconClose}`}
                        alt={"styles-folder"}
                        height={18}
                        width={18}
                      />{" "}
                    </div>
                )}
                <p style={{ marginBottom: "4px" }}>styles</p>
              </label>
              <div
                className={styles.files}
                style={stylesOpen ? { display: "block" } : { display: "none" }}
              >
                {explorerItems[2].content.map((item, idx) => {
                  return (
                    <ExplorerItem
                      active={item.enabled}
                      spacing={"14px"}
                      path={item.enabled ? item.path : ""}
                      key={"styles-" + item.label + "-" + idx}
                      itemName={item.name}
                      icon={item.icon}
                      height={18}
                      width={18}
                    />
                  );
                })}
              </div>
            </div>
            <div key={"utils"} style={{ paddingLeft: "12px" }}>
              <input
                type="checkbox"
                className={styles.checkbox}
                id="utils-folder"
                checked={utilsOpen}
                onChange={() => setUtilsOpen(!utilsOpen)}
              />
              <label
                htmlFor="utils-folder"
                className={styles.heading}
                style={{ textTransform: "lowercase", fontWeight: "normal" }}
              >
                <ChevronRight
                  className={styles.chevron}
                  style={utilsOpen ? { transform: "rotate(90deg)" } : {}}
                />
                {utilsOpen ? (
                    <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                      <Image
                        src={`/${explorerItems[3].iconOpen}`}
                        alt={"utils-folder"}
                        height={18}
                        width={18}
                      />{" "}
                    </div>
                ) : (
                    <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                      <Image
                        src={`/${explorerItems[3].iconClose}`}
                        alt={"utils-folder"}
                        height={18}
                        width={18}
                      />{" "}
                    </div>
                )}
                <p style={{ marginBottom: "4px" }}>utils</p>
              </label>
              <div
                className={styles.files}
                style={utilsOpen ? { display: "block" } : { display: "none" }}
              >
                {explorerItems[3].content.map((item, idx) => {
                  return (
                    <ExplorerItem
                      active={item.enabled}
                      spacing={"14px"}
                      path={item.enabled ? item.path : ""}
                      key={"utils-" + item.label + "-" + idx}
                      itemName={item.name}
                      icon={item.icon}
                      height={18}
                      width={18}
                    />
                  );
                })}
              </div>
            </div>
            {explorerItems[0].content.map((item, idx) => {
              return (
                <ExplorerItem
                  active={item.enabled}
                  path={item.enabled ? item.path : ""}
                  key={"pages-" + item.label + "-" + idx}
                  itemName={item.name}
                  icon={item.icon}
                  height={18}
                  width={18}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
