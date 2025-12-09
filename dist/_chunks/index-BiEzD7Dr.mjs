import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import React__default, { useState, useEffect } from "react";
import { Box, Field, Flex, Modal, Typography, SearchForm, TextInput, Button, Accordion, Badge, SingleSelect, SingleSelectOption } from "@strapi/design-system";
import { useFetchClient, useField } from "@strapi/strapi/admin";
import { R as ReactIcons } from "./all-DnRgLQ7X.mjs";
import { BiSearch, BiMinus, BiPlus } from "react-icons/bi";
import { useIntl } from "react-intl";
import { g as getTrad } from "./index-CKwh40Fe.mjs";
import { IconContext } from "react-icons/lib";
const strapiTheme = window.localStorage.STRAPI_THEME;
const IconComponent = ({ icon, size }) => {
  const DynamicIconComponent = ReactIcons[icon];
  if (void 0 === DynamicIconComponent) return /* @__PURE__ */ jsx(Fragment, {});
  return /* @__PURE__ */ jsx(IconContext.Provider, { value: { color: strapiTheme === "light" ? "#212134" : "#a5a5ba" }, children: /* @__PURE__ */ jsx(DynamicIconComponent, { size }) });
};
const IconLibraryComponent = ({ icons, onSelectIcon }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: icons.map((icon) => /* @__PURE__ */ jsx(
    Box,
    {
      onClick: () => {
        onSelectIcon(icon);
      },
      title: icon,
      children: /* @__PURE__ */ jsx(IconComponent, { size: 30, icon })
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
  const { formatMessage } = useIntl();
  const { get } = useFetchClient();
  React__default.useRef(null);
  const [iconLibraries, setIconLibraries] = useState([]);
  const [selectedIconLibrary, setSelectedIconLibrary] = useState(null);
  const allReactIcons = Object.keys(ReactIcons);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const field = useField(name);
  const selectedIcon = field.value ?? "";
  const toggleModal = () => setIsModalVisible((prev) => !prev);
  const changeIcon = (newIcon) => field.onChange(name, newIcon);
  const onSelectIcon = (newIcon) => {
    toggleModal();
    changeIcon(newIcon);
  };
  useEffect(() => {
    const getIconLibraries = async () => {
      setIconLibraries(
        (await get("/strapi-icon-picker/iconlibrary/find")).data.filter(
          (iconLibrary) => iconLibrary.isEnabled
        )
      );
    };
    getIconLibraries();
  }, []);
  const [expandedIDs, setExpandedID] = useState([]);
  const handleToggle = (id) => () => {
    expandedIDs?.includes(id) ? setExpandedID(expandedIDs.filter((i) => i !== id)) : setExpandedID([...expandedIDs, id]);
  };
  const handleExpand = () => {
    console.log("iconLibraries -->", iconLibraries, expandedIDs);
    if (expandedIDs.length) {
      setExpandedID([]);
    } else {
      setExpandedID(iconLibraries.map(({ id }) => id));
    }
  };
  const renderModal = (selectedIcon2) => {
    const DynamicIconComponent = ReactIcons[selectedIcon2];
    return /* @__PURE__ */ jsxs(
      Modal.Root,
      {
        defaultOpen: isModalVisible,
        open: isModalVisible,
        onOpenChange: setIsModalVisible,
        children: [
          /* @__PURE__ */ jsx(Modal.Trigger, { children: typeof DynamicIconComponent !== "undefined" ? /* @__PURE__ */ jsx(DynamicIconComponent, { size: 30, style: { cursor: "pointer", width: 30, height: 30 } }) : /* @__PURE__ */ jsx(BiSearch, { width: 30, height: 30, style: { cursor: "pointer", width: 30, height: 30 } }) }),
          /* @__PURE__ */ jsxs(Modal.Content, { children: [
            /* @__PURE__ */ jsx(Modal.Header, { children: /* @__PURE__ */ jsx(Typography, { fontWeight: "bold", id: "title", children: "Select icon" }) }),
            /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(SearchForm, { children: /* @__PURE__ */ jsxs(Flex, { gap: 2, children: [
                /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
                  TextInput,
                  {
                    onReset: () => setSearchTerm(""),
                    value: searchTerm,
                    onChange: (e) => setSearchTerm(e.target.value),
                    placeholder: formatMessage({
                      id: getTrad("iconSelector.search")
                    })
                  }
                ) }, 1),
                /* @__PURE__ */ jsx(Box, { children: iconLibraries.length === expandedIDs.length ? /* @__PURE__ */ jsx(Button, { size: "L", onClick: handleExpand, startIcon: /* @__PURE__ */ jsx(BiMinus, {}), children: "Collapse" }) : /* @__PURE__ */ jsx(Button, { size: "L", onClick: handleExpand, startIcon: /* @__PURE__ */ jsx(BiPlus, {}), children: "Expand" }) }, 2)
              ] }) }),
              iconLibraries.length > 0 ? /* @__PURE__ */ jsx(Box, { padding: 4, marginTop: 2, background: "neutral0", children: /* @__PURE__ */ jsx(Accordion.Root, { collapsible: true, children: iconLibraries.filter(
                (iconLibrary) => !selectedIconLibrary || iconLibrary.abbreviation === selectedIconLibrary
              ).map(
                (iconLibrary, index) => allReactIcons.filter(
                  (icon) => icon.toLowerCase().startsWith(iconLibrary.abbreviation) && icon.toLowerCase().includes(searchTerm.toLowerCase())
                ).length > 0 && /* @__PURE__ */ jsxs(
                  Accordion.Item,
                  {
                    value: iconLibrary.id,
                    expanded: expandedIDs.includes(iconLibrary.id),
                    onClick: () => handleToggle(iconLibrary.id),
                    id: iconLibrary.id,
                    children: [
                      /* @__PURE__ */ jsxs(Accordion.Header, { children: [
                        /* @__PURE__ */ jsx(
                          Accordion.Trigger,
                          {
                            caretPosition: "left",
                            children: /* @__PURE__ */ jsx(Flex, { justifyContent: "space-between", children: /* @__PURE__ */ jsx(Typography, { children: `${iconLibrary.name} (${iconLibrary.abbreviation})` }) })
                          }
                        ),
                        /* @__PURE__ */ jsx(Accordion.Actions, { children: /* @__PURE__ */ jsx(Badge, { children: allReactIcons.filter(
                          (icon) => icon.toLowerCase().startsWith(iconLibrary.abbreviation) && icon.toLowerCase().includes(searchTerm.toLowerCase())
                        ).length }) })
                      ] }),
                      /* @__PURE__ */ jsx(Accordion.Content, { children: /* @__PURE__ */ jsx(Box, { paddingLeft: 3, paddingTop: 3, paddingBottom: 3, children: /* @__PURE__ */ jsx(
                        Flex,
                        {
                          direction: "row",
                          wrap: "wrap",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          children: /* @__PURE__ */ jsx(
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
              ) }) }) : /* @__PURE__ */ jsx(Typography, { variant: "pi", children: formatMessage({
                id: getTrad("iconSelector.noIconLibrariesAvailable")
              }) })
            ] }) }),
            /* @__PURE__ */ jsx(Modal.Footer, { children: /* @__PURE__ */ jsxs(
              SingleSelect,
              {
                required: false,
                value: selectedIconLibrary,
                onChange: (value) => setSelectedIconLibrary(value),
                children: [
                  /* @__PURE__ */ jsx(SingleSelectOption, { value: "", children: formatMessage({ id: getTrad("iconSelector.allIconLibraries") }) }),
                  iconLibraries.map((iconLibrary) => /* @__PURE__ */ jsx(SingleSelectOption, { value: iconLibrary.abbreviation, children: iconLibrary.name }, iconLibrary.id))
                ]
              }
            ) })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Field.Root, { name, id: name, error: field.error, required, children: /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "stretch", gap: 1, children: [
    /* @__PURE__ */ jsx(Field.Label, { action: labelAction, children: label }),
    /* @__PURE__ */ jsx(
      Field.Input,
      {
        ...props,
        value: selectedIcon,
        "aria-label": formatMessage({
          id: getTrad("color-picker.input.aria-label"),
          defaultMessage: "Color picker input"
        }),
        style: {
          /*textTransform: 'uppercase',*/
        },
        name,
        onChange: field.onChange,
        startAction: renderModal(selectedIcon)
      }
    ),
    /* @__PURE__ */ jsx(Field.Hint, {}),
    /* @__PURE__ */ jsx(Field.Error, {})
  ] }) }) });
};
export {
  ReactIconsSelector as default
};
//# sourceMappingURL=index-BiEzD7Dr.mjs.map
