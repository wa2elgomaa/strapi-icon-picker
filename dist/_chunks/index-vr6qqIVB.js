"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const designSystem = require("@strapi/design-system");
const admin = require("@strapi/strapi/admin");
const all = require("./all-SkrwsBgI.js");
const bi = require("react-icons/bi");
const reactIntl = require("react-intl");
const index = require("./index-DIj269--.js");
const lib = require("react-icons/lib");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const React__default = /* @__PURE__ */ _interopDefault(React);
const strapiTheme = window.localStorage.STRAPI_THEME;
const IconComponent = ({ icon, size }) => {
  const DynamicIconComponent = all.ReactIcons[icon];
  if (void 0 === DynamicIconComponent) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  return /* @__PURE__ */ jsxRuntime.jsx(lib.IconContext.Provider, { value: { color: strapiTheme === "light" ? "#212134" : "#a5a5ba" }, children: /* @__PURE__ */ jsxRuntime.jsx(DynamicIconComponent, { size }) });
};
const IconLibraryComponent = ({ icons, onSelectIcon }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: icons.map((icon) => /* @__PURE__ */ jsxRuntime.jsx(
    designSystem.Box,
    {
      onClick: () => {
        onSelectIcon(icon);
      },
      title: icon,
      children: /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { size: 30, icon })
    },
    icon
  )) });
};
const ReactIconsSelector = ({
  hint,
  disabled,
  labelAction,
  label,
  name,
  required,
  ...props
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const { get } = admin.useFetchClient();
  React__default.default.useRef(null);
  const [iconLibraries, setIconLibraries] = React.useState([]);
  const [selectedIconLibrary, setSelectedIconLibrary] = React.useState(null);
  const allReactIcons = Object.keys(all.ReactIcons);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const field = admin.useField(name);
  const selectedIcon = field.value ?? "";
  const toggleModal = () => setIsModalVisible((prev) => !prev);
  const changeIcon = (newIcon) => field.onChange(name, newIcon);
  const onSelectIcon = (newIcon) => {
    toggleModal();
    changeIcon(newIcon);
  };
  React.useEffect(() => {
    const getIconLibraries = async () => {
      setIconLibraries(
        (await get("/strapi-icon-picker/iconlibrary/find")).data.filter(
          (iconLibrary) => iconLibrary.isEnabled
        )
      );
    };
    getIconLibraries();
  }, []);
  const [expandedIDs, setExpandedID] = React.useState([]);
  const handleToggle = (id) => () => {
    expandedIDs?.includes(id) ? setExpandedID(expandedIDs.filter((i) => i !== id)) : setExpandedID([...expandedIDs, id]);
  };
  const handleExpand = () => {
    if (iconLibraries.length === expandedIDs.length) {
      setExpandedID([]);
    } else {
      setExpandedID(iconLibraries.map((iconLibrary, index2) => "acc-" + index2));
    }
  };
  const renderModal = () => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Modal.Root,
      {
        defaultOpen: isModalVisible,
        open: isModalVisible,
        onOpenChange: setIsModalVisible,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Trigger, { children: /* @__PURE__ */ jsxRuntime.jsx(bi.BiSearch, { width: 30, height: 30, style: { cursor: "pointer", width: 30, height: 30 } }) }),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Modal.Content, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Header, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", id: "title", children: "Select icon" }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Body, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.SearchForm, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 2, children: [
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.TextInput,
                  {
                    onReset: () => setSearchTerm(""),
                    value: searchTerm,
                    onChange: (e) => setSearchTerm(e.target.value),
                    placeholder: formatMessage({
                      id: index.getTrad("iconSelector.search")
                    })
                  }
                ) }, 1),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: iconLibraries.length === expandedIDs.length ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { size: "L", onClick: handleExpand, startIcon: /* @__PURE__ */ jsxRuntime.jsx(bi.BiMinus, {}), children: "Collapse" }) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { size: "L", onClick: handleExpand, startIcon: /* @__PURE__ */ jsxRuntime.jsx(bi.BiPlus, {}), children: "Expand" }) }, 2)
              ] }) }),
              iconLibraries.length > 0 ? /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { padding: 4, marginTop: 2, background: "neutral0", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Accordion.Root, { collapsible: true, children: iconLibraries.filter(
                (iconLibrary) => !selectedIconLibrary || iconLibrary.abbreviation === selectedIconLibrary
              ).map(
                (iconLibrary, index2) => allReactIcons.filter(
                  (icon) => icon.toLowerCase().startsWith(iconLibrary.abbreviation) && icon.toLowerCase().includes(searchTerm.toLowerCase())
                ).length > 0 && /* @__PURE__ */ jsxRuntime.jsxs(
                  designSystem.Accordion.Item,
                  {
                    value: "acc-" + index2,
                    expanded: expandedIDs.includes("acc-" + index2),
                    onClick: () => handleToggle("acc-" + index2),
                    id: "acc-" + index2,
                    children: [
                      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Accordion.Header, { children: [
                        /* @__PURE__ */ jsxRuntime.jsx(
                          designSystem.Accordion.Trigger,
                          {
                            caretPosition: "left",
                            children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { justifyContent: "space-between", children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: `${iconLibrary.name} (${iconLibrary.abbreviation})` }) })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Accordion.Actions, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Badge, { children: allReactIcons.filter(
                          (icon) => icon.toLowerCase().startsWith(iconLibrary.abbreviation) && icon.toLowerCase().includes(searchTerm.toLowerCase())
                        ).length }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Accordion.Content, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingLeft: 3, paddingTop: 3, paddingBottom: 3, children: /* @__PURE__ */ jsxRuntime.jsx(
                        designSystem.Flex,
                        {
                          direction: "row",
                          wrap: "wrap",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          children: /* @__PURE__ */ jsxRuntime.jsx(
                            IconLibraryComponent,
                            {
                              icons: allReactIcons.filter(
                                (icon) => icon.toLowerCase().startsWith(iconLibrary.abbreviation) && icon.toLowerCase().includes(searchTerm.toLowerCase())
                              ),
                              onSelectIcon
                            }
                          )
                        }
                      ) }) })
                    ]
                  }
                )
              ) }) }) : /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", children: formatMessage({
                id: index.getTrad("iconSelector.noIconLibrariesAvailable")
              }) })
            ] }) }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Modal.Footer, { children: /* @__PURE__ */ jsxRuntime.jsxs(
              designSystem.SingleSelect,
              {
                required: false,
                value: selectedIconLibrary,
                onChange: (value) => setSelectedIconLibrary(value),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "", children: formatMessage({ id: index.getTrad("iconSelector.allIconLibraries") }) }),
                  iconLibraries.map((iconLibrary) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: iconLibrary.abbreviation, children: iconLibrary.name }, iconLibrary.id))
                ]
              }
            ) })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Root, { name, id: name, error: field.error, required, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "stretch", gap: 1, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Label, { action: labelAction, children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Field.Input,
      {
        ...props,
        value: selectedIcon,
        "aria-label": formatMessage({
          id: index.getTrad("color-picker.input.aria-label"),
          defaultMessage: "Color picker input"
        }),
        name,
        onChange: field.onChange,
        startAction: renderModal()
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {}),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Error, {})
  ] }) }) });
};
exports.default = ReactIconsSelector;
//# sourceMappingURL=index-vr6qqIVB.js.map
