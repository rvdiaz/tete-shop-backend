"use strict";
(self["webpackChunkshop_tete"] = self["webpackChunkshop_tete"] || []).push([[5162],{

/***/ 93016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ EventTable)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/Events/index.js
var Events = __webpack_require__(84714);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventTable/EventTableCE.js


function EventTableCE() {
  return /* @__PURE__ */ react.createElement(Events/* default */.Z.Root, null, /* @__PURE__ */ react.createElement(Events/* default */.Z.Headers, null), /* @__PURE__ */ react.createElement(Events/* default */.Z.Body, null));
}

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventTable/index.js

/* harmony default export */ const EventTable = (EventTableCE);


/***/ }),

/***/ 84714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export formatValue */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14916);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86896);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1565);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45421);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19270);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77197);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65833);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33709);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54580);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(63237);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75515);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26031);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36213);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92155);
/* harmony import */ var _hooks_useContentTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39645);







const formatValue = (value) => value.reduce((acc, curr) => {
  const key = curr.split(".")[0];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr);
  return acc;
}, {});
const StyledTable = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .RawTable */ .w)`
  tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.neutral100};
  }

  thead th span {
    color: ${({ theme }) => theme.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({ theme }) => theme.spaces[3]};
    padding-block-end: ${({ theme }) => theme.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    // Add padding to the start of the first column to avoid the checkbox appearing
    // too close to the edge of the table
    padding-inline-start: ${({ theme }) => theme.spaces[2]};
  }
`;
const getCEHeaders = (isDraftAndPublish) => {
  const headers = [
    { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
    { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
    { id: "app.utils.delete", defaultMessage: "Delete" }
  ];
  if (isDraftAndPublish) {
    headers.push({ id: "app.utils.publish", defaultMessage: "Publish" });
    headers.push({ id: "app.utils.unpublish", defaultMessage: "Unpublish" });
  }
  return headers;
};
const getCEEvents = (isDraftAndPublish) => {
  const entryEvents = ["entry.create", "entry.update", "entry.delete"];
  if (isDraftAndPublish) {
    entryEvents.push("entry.publish", "entry.unpublish");
  }
  return {
    entry: entryEvents,
    media: ["media.create", "media.update", "media.delete"]
  };
};
const WebhookEventContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext();
const Root = ({ children }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const { collectionTypes, isLoading } = (0,_hooks_useContentTypes__WEBPACK_IMPORTED_MODULE_2__/* .useContentTypes */ .G)();
  const isDraftAndPublish = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => collectionTypes.some((ct) => ct.options.draftAndPublish === true),
    [collectionTypes]
  );
  const label = formatMessage({
    id: "Settings.webhooks.form.events",
    defaultMessage: "Events"
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(WebhookEventContext.Provider, { value: { isDraftAndPublish } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .FieldLabel */ .Q, { "aria-hidden": true }, label), isLoading && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Loader */ .a, null, formatMessage({
    id: "Settings.webhooks.events.isLoading",
    defaultMessage: "Events loading"
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(StyledTable, { "aria-label": label }, children)));
};
Root.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_9___default().node)]).isRequired
};
const Headers = ({ getHeaders = getCEHeaders }) => {
  const { isDraftAndPublish } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(WebhookEventContext);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const headers = getHeaders(isDraftAndPublish);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .RawThead */ .S, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .RawTr */ .Z, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .RawTh */ .g, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_13__/* .VisuallyHidden */ .T, null, formatMessage({
    id: "Settings.webhooks.event.select",
    defaultMessage: "Select event"
  }))), headers.map((header) => {
    if (["app.utils.publish", "app.utils.unpublish"].includes(header.id)) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .RawTh */ .g,
        {
          key: header.id,
          title: formatMessage({
            id: "Settings.webhooks.event.publish-tooltip",
            defaultMessage: "This event only exists for content with draft & publish enabled"
          })
        },
        /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { variant: "sigma", textColor: "neutral600" }, formatMessage(header))
      );
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .RawTh */ .g, { key: header.id }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_14__/* .Typography */ .Z, { variant: "sigma", textColor: "neutral600" }, formatMessage(header)));
  })));
};
Headers.defaultProps = {
  getHeaders: getCEHeaders
};
Headers.propTypes = {
  getHeaders: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)
};
const Body = ({ providedEvents }) => {
  const { isDraftAndPublish } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(WebhookEventContext);
  const events = providedEvents || getCEEvents(isDraftAndPublish);
  const { values, handleChange: onChange } = (0,formik__WEBPACK_IMPORTED_MODULE_1__/* .useFormikContext */ .u6)();
  const inputName = "events";
  const inputValue = values.events;
  const disabledEvents = [];
  const formattedValue = formatValue(inputValue);
  const handleSelect = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      set.add(name);
    } else {
      set.delete(name);
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  const handleSelectAll = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      events[name].forEach((event) => {
        if (!disabledEvents.includes(event)) {
          set.add(event);
        }
      });
    } else {
      events[name].forEach((event) => set.delete(event));
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_15__/* .RawTbody */ .X, null, Object.entries(events).map(([event, value]) => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      EventRow,
      {
        disabledEvents,
        key: event,
        name: event,
        events: value,
        inputValue: formattedValue[event],
        handleSelect,
        handleSelectAll
      }
    );
  }));
};
Body.defaultProps = {
  providedEvents: null
};
Body.propTypes = {
  providedEvents: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object)
};
const removeHyphensAndTitleCase = (str) => str.replace(/-/g, " ").split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
const EventRow = ({ disabledEvents, name, events, inputValue, handleSelect, handleSelectAll }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const enabledCheckboxes = events.filter((event) => !disabledEvents.includes(event));
  const hasSomeCheckboxSelected = inputValue.length > 0;
  const areAllCheckboxesSelected = inputValue.length === enabledCheckboxes.length;
  const onChangeAll = ({ target: { name: name2 } }) => {
    const valueToSet = !areAllCheckboxesSelected;
    handleSelectAll({
      target: { name: name2, value: valueToSet }
    });
  };
  const targetColumns = 5;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_11__/* .RawTr */ .Z, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .RawTd */ .f, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_16__/* .Checkbox */ .X,
    {
      indeterminate: hasSomeCheckboxSelected && !areAllCheckboxesSelected,
      "aria-label": formatMessage({
        id: "global.select-all-entries",
        defaultMessage: "Select all entries"
      }),
      name,
      onChange: onChangeAll,
      value: areAllCheckboxesSelected
    },
    removeHyphensAndTitleCase(name)
  )), events.map((event) => {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .RawTd */ .f, { key: event }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_17__/* .BaseCheckbox */ .C,
      {
        disabled: disabledEvents.includes(event),
        "aria-label": event,
        name: event,
        value: inputValue.includes(event),
        onValueChange: (value) => handleSelect({ target: { name: event, value } })
      }
    ));
  }), events.length < targetColumns && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_12__/* .RawTd */ .f, { colSpan: `${targetColumns - events.length}` }));
};
EventRow.defaultProps = {
  disabledEvents: [],
  events: [],
  inputValue: [],
  handleSelect() {
  },
  handleSelectAll() {
  }
};
EventRow.propTypes = {
  disabledEvents: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array),
  events: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array),
  inputValue: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array),
  handleSelect: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
  handleSelectAll: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ Root, Headers, Body, EventRow });


/***/ }),

/***/ 41128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Webhooks_EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 20 modules
var helper_plugin_esm = __webpack_require__(87631);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/useContentTypes/index.js + 1 modules
var useContentTypes = __webpack_require__(39645);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(14916);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Play.js
var Play = __webpack_require__(90321);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/WebhookForm/utils/makeWebhookValidationSchema.js


const NAME_REGEX = /(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/;
const URL_REGEX = /(^$)|((https?:\/\/.*)(d*)\/?(.*))/;
const makeWebhookValidationSchema = ({ formatMessage }) => yup_es/* object */.Ry().shape({
  name: yup_es/* string */.Z_().required(
    formatMessage({
      id: "Settings.webhooks.validation.name",
      defaultMessage: "Name is required"
    })
  ).matches(NAME_REGEX, helper_plugin_esm/* translatedErrors */.I0.regex),
  url: yup_es/* string */.Z_().required(
    formatMessage({
      id: "Settings.webhooks.validation.url.required",
      defaultMessage: "Url is required"
    })
  ).matches(
    URL_REGEX,
    formatMessage({
      id: helper_plugin_esm/* translatedErrors */.I0.regex,
      defaultMessage: "The value does not match the regex"
    })
  ),
  headers: yup_es/* lazy */.Vo((array) => {
    let baseSchema = yup_es/* array */.IX();
    if (array.length === 1) {
      const { key, value } = array[0];
      if (!key && !value) {
        return baseSchema;
      }
    }
    return baseSchema.of(
      yup_es/* object */.Ry().shape({
        key: yup_es/* string */.Z_().required(
          formatMessage({
            id: "Settings.webhooks.validation.key",
            defaultMessage: "Key is required"
          })
        ),
        value: yup_es/* string */.Z_().required(
          formatMessage({
            id: "Settings.webhooks.validation.value",
            defaultMessage: "Value is required"
          })
        )
      })
    );
  }),
  events: yup_es/* array */.IX()
});

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js + 1 modules
var FieldLabel = __webpack_require__(19270);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js
var Combobox = __webpack_require__(29178);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/Combobox.js




const HTTP_HEADERS = [
  "A-IM",
  "Accept",
  "Accept-Charset",
  "Accept-Encoding",
  "Accept-Language",
  "Accept-Datetime",
  "Access-Control-Request-Method",
  "Access-Control-Request-Headers",
  "Authorization",
  "Cache-Control",
  "Connection",
  "Content-Length",
  "Content-Type",
  "Cookie",
  "Date",
  "Expect",
  "Forwarded",
  "From",
  "Host",
  "If-Match",
  "If-Modified-Since",
  "If-None-Match",
  "If-Range",
  "If-Unmodified-Since",
  "Max-Forwards",
  "Origin",
  "Pragma",
  "Proxy-Authorization",
  "Range",
  "Referer",
  "TE",
  "User-Agent",
  "Upgrade",
  "Via",
  "Warning"
];
const Combobox_Combobox = ({ name, onChange, value, ...props }) => {
  const {
    values: { headers }
  } = (0,formik_esm/* useFormikContext */.u6)();
  const [options, setOptions] = (0,react.useState)(HTTP_HEADERS);
  (0,react.useEffect)(() => {
    setOptions(
      HTTP_HEADERS.filter(
        (key) => !headers?.some((header) => header.key !== value && header.key === key)
      )
    );
  }, [headers, value]);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2 } });
  };
  const handleCreateOption = (value2) => {
    setOptions((prev) => [...prev, value2]);
    handleChange(value2);
  };
  return /* @__PURE__ */ react.createElement(
    Combobox/* CreatableCombobox */.XU,
    {
      ...props,
      onClear: () => handleChange(""),
      onChange: handleChange,
      onCreateOption: handleCreateOption,
      placeholder: "",
      value
    },
    options.map((key) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, { value: key, key }, key))
  );
};
Combobox_Combobox.defaultProps = {
  value: void 0
};
Combobox_Combobox.propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const HeadersInput_Combobox = (Combobox_Combobox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/index.js







const HeadersInput = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { values, errors } = (0,formik_esm/* useFormikContext */.u6)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
    id: "Settings.webhooks.form.headers",
    defaultMessage: "Headers"
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8, background: "neutral100", hasRadius: true }, /* @__PURE__ */ react.createElement(
    formik_esm/* FieldArray */.F2,
    {
      validateOnChange: false,
      name: "headers",
      render: ({ push, remove }) => /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, values.headers.map((header, index) => (
        // eslint-disable-next-line
        /* @__PURE__ */ react.createElement(react.Fragment, { key: `${index}.${header.key}` }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
          formik_esm/* Field */.gN,
          {
            as: HeadersInput_Combobox,
            name: `headers.${index}.key`,
            "aria-label": `row ${index + 1} key`,
            label: formatMessage({
              id: "Settings.webhooks.key",
              defaultMessage: "Key"
            }),
            error: errors.headers?.[index]?.key && errors.headers[index].key
          }
        )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "flex-end" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { style: { flex: 1 } }, /* @__PURE__ */ react.createElement(
          formik_esm/* Field */.gN,
          {
            as: TextInput/* TextInput */.o,
            name: `headers.${index}.value`,
            "aria-label": `row ${index + 1} value`,
            label: formatMessage({
              id: "Settings.webhooks.value",
              defaultMessage: "Value"
            }),
            error: errors.headers?.[index]?.value && errors.headers[index].value
          }
        )), /* @__PURE__ */ react.createElement(
          Flex/* Flex */.k,
          {
            paddingLeft: 2,
            style: { alignSelf: "center" },
            paddingTop: errors.headers?.[index]?.value ? 0 : 5
          },
          /* @__PURE__ */ react.createElement(
            helper_plugin_esm/* RemoveRoundedButton */.fG,
            {
              disabled: values.headers.length === 1,
              onClick: () => remove(index),
              label: formatMessage(
                {
                  id: "Settings.webhooks.headers.remove",
                  defaultMessage: "Remove header row {number}"
                },
                { number: index + 1 }
              )
            }
          )
        ))))
      )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 12 }, /* @__PURE__ */ react.createElement(
        TextButton/* TextButton */.A,
        {
          type: "button",
          onClick: () => {
            push({ key: "", value: "" });
          },
          startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null)
        },
        formatMessage({
          id: "Settings.webhooks.create.header",
          defaultMessage: "Create new header"
        })
      )))
    }
  )));
};
/* harmony default export */ const components_HeadersInput = (HeadersInput);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(1565);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Loader.js
var Loader = __webpack_require__(86647);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/TriggerContainer/index.js







const Icon = styled_components_browser_esm/* default */.ZP.svg(
  ({ theme, color }) => `
  width: ${12 / 16}rem;
  height: ${12 / 16}rem;

  path {
    fill: ${theme.colors[color]};
  }
`
);
const Status = ({ isPending, statusCode }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (isPending) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Icon, { as: Loader/* default */.Z }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.webhooks.trigger.pending", defaultMessage: "pending" })));
  }
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Icon, { as: Check/* default */.Z, color: "success700" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.webhooks.trigger.success", defaultMessage: "success" })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Icon, { as: Cross/* default */.Z, color: "danger700" }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.error", defaultMessage: "error" }), " ", statusCode));
  }
  return null;
};
Status.propTypes = {
  isPending: (prop_types_default()).bool.isRequired,
  statusCode: (prop_types_default()).number
};
Status.defaultProps = {
  statusCode: void 0
};
const Message = ({ statusCode, message }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral600", ellipsis: true }, formatMessage({
      id: "Settings.webhooks.trigger.success.label",
      defaultMessage: "Trigger succeeded"
    })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { maxWidth: (0,helper_plugin_esm/* pxToRem */.Q1)(250), justifyContent: "flex-end", title: message }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { ellipsis: true, textColor: "neutral600" }, message)));
  }
  return null;
};
Message.propTypes = {
  statusCode: (prop_types_default()).number,
  message: (prop_types_default()).string
};
Message.defaultProps = {
  statusCode: void 0,
  message: void 0
};
const CancelButton = ({ onCancel }) => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement("button", { onClick: onCancel, type: "button" }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2, alignItems: "center" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral400" }, formatMessage({ id: "Settings.webhooks.trigger.cancel", defaultMessage: "cancel" })), /* @__PURE__ */ react.createElement(Icon, { as: Cross/* default */.Z, color: "neutral400" }))));
};
CancelButton.propTypes = { onCancel: (prop_types_default()).func.isRequired };
const TriggerContainer = ({ isPending, onCancel, response }) => {
  const { statusCode, message } = response;
  const { formatMessage } = (0,useIntl/* default */.Z)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 5, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4, style: { alignItems: "center" } }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "Settings.webhooks.trigger.test",
    defaultMessage: "Test-trigger"
  }))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 3 }, /* @__PURE__ */ react.createElement(Status, { isPending, statusCode })), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, !isPending ? /* @__PURE__ */ react.createElement(Message, { statusCode, message }) : /* @__PURE__ */ react.createElement(CancelButton, { onCancel }))));
};
TriggerContainer.defaultProps = {
  isPending: false,
  onCancel() {
  },
  response: {}
};
TriggerContainer.propTypes = {
  isPending: (prop_types_default()).bool,
  onCancel: (prop_types_default()).func,
  response: (prop_types_default()).object
};
/* harmony default export */ const components_TriggerContainer = (TriggerContainer);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/WebhookForm/index.js
var EventTable=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(65224)/* ["default"] */ .Z);}return (__webpack_require__(93016)/* ["default"] */ .Z);}();var WebhookForm=function WebhookForm(_ref){var _formik$errors,_formik$errors2;var handleSubmit=_ref.handleSubmit,triggerWebhook=_ref.triggerWebhook,isCreating=_ref.isCreating,isTriggering=_ref.isTriggering,triggerResponse=_ref.triggerResponse,data=_ref.data;var _useIntl=(0,useIntl/* default */.Z)(),formatMessage=_useIntl.formatMessage;var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),showTriggerResponse=_useState2[0],setShowTriggerResponse=_useState2[1];/**
   * Map the headers into a form that can be used within the formik form
   * @param {Object} headers
   * @returns {Array}
   */var mapHeaders=function mapHeaders(headers){if(!Object.keys(headers).length){return[{key:'',value:''}];}return Object.entries(headers).map(function(_ref2){var _ref3=(0,slicedToArray/* default */.Z)(_ref2,2),key=_ref3[0],value=_ref3[1];return{key:key,value:value};});};var formik=(0,formik_esm/* useFormik */.TA)({initialValues:{name:(data===null||data===void 0?void 0:data.name)||'',url:(data===null||data===void 0?void 0:data.url)||'',headers:mapHeaders((data===null||data===void 0?void 0:data.headers)||{}),events:(data===null||data===void 0?void 0:data.events)||[]},onSubmit:handleSubmit,validationSchema:makeWebhookValidationSchema({formatMessage:formatMessage}),validateOnChange:false,validateOnBlur:false});return/*#__PURE__*/react.createElement(formik_esm/* FormikProvider */.Hy,{value:formik},/*#__PURE__*/react.createElement(helper_plugin_esm/* Form */.l0,{onSubmit:formik.handleSubmit},/*#__PURE__*/react.createElement(HeaderLayout/* HeaderLayout */.T,{primaryAction:/*#__PURE__*/react.createElement(Flex/* Flex */.k,{gap:2},/*#__PURE__*/react.createElement(Button/* Button */.z,{onClick:function onClick(){triggerWebhook();setShowTriggerResponse(true);},variant:"tertiary",startIcon:/*#__PURE__*/react.createElement(Play/* default */.Z,null),disabled:isCreating||isTriggering,size:"L"},formatMessage({id:'Settings.webhooks.trigger',defaultMessage:'Trigger'})),/*#__PURE__*/react.createElement(Button/* Button */.z,{startIcon:/*#__PURE__*/react.createElement(Check/* default */.Z,null),type:"submit",size:"L",disabled:!formik.dirty,loading:formik.isSubmitting},formatMessage({id:'global.save',defaultMessage:'Save'}))),title:isCreating?formatMessage({id:'Settings.webhooks.create',defaultMessage:'Create a webhook'}):data===null||data===void 0?void 0:data.name,navigationAction:/*#__PURE__*/react.createElement(helper_plugin_esm/* Link */.rU,{startIcon:/*#__PURE__*/react.createElement(ArrowLeft/* default */.Z,null),to:"/settings/webhooks"},formatMessage({id:'global.back',defaultMessage:'Back'}))}),/*#__PURE__*/react.createElement(ContentLayout/* ContentLayout */.D,null,/*#__PURE__*/react.createElement(Flex/* Flex */.k,{direction:"column",alignItems:"stretch",gap:4},showTriggerResponse&&/*#__PURE__*/react.createElement(components_TriggerContainer,{isPending:isTriggering,response:triggerResponse,onCancel:function onCancel(){return setShowTriggerResponse(false);}}),/*#__PURE__*/react.createElement(Box/* Box */.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:true},/*#__PURE__*/react.createElement(Flex/* Flex */.k,{direction:"column",alignItems:"stretch",gap:6},/*#__PURE__*/react.createElement(Grid/* Grid */.r,{gap:6},/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,{col:6},/*#__PURE__*/react.createElement(formik_esm/* Field */.gN,{as:TextInput/* TextInput */.o,name:"name",error:(formik===null||formik===void 0?void 0:(_formik$errors=formik.errors)===null||_formik$errors===void 0?void 0:_formik$errors.name)&&formik.errors.name,label:formatMessage({id:'global.name',defaultMessage:'Name'}),required:true})),/*#__PURE__*/react.createElement(GridItem/* GridItem */.P,{col:12},/*#__PURE__*/react.createElement(formik_esm/* Field */.gN,{as:TextInput/* TextInput */.o,name:"url",error:(formik===null||formik===void 0?void 0:(_formik$errors2=formik.errors)===null||_formik$errors2===void 0?void 0:_formik$errors2.url)&&formik.errors.url,label:formatMessage({id:'Settings.roles.form.input.url',defaultMessage:'Url'}),required:true}))),/*#__PURE__*/react.createElement(components_HeadersInput,null),/*#__PURE__*/react.createElement(EventTable,null)))))));};WebhookForm.propTypes={data:(prop_types_default()).object,handleSubmit:(prop_types_default()).func.isRequired,triggerWebhook:(prop_types_default()).func.isRequired,isCreating:(prop_types_default()).bool.isRequired,isTriggering:(prop_types_default()).bool.isRequired,triggerResponse:(prop_types_default()).object};WebhookForm.defaultProps={data:undefined,triggerResponse:undefined};/* harmony default export */ const components_WebhookForm = (WebhookForm);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/index.js







const cleanData = (data) => ({
  ...data,
  headers: data.headers.reduce((acc, { key, value }) => {
    if (key !== "") {
      acc[key] = value;
    }
    return acc;
  }, {})
});
const EditView = () => {
  const {
    params: { id }
  } = (0,react_router/* useRouteMatch */.$B)("/settings/webhooks/:id");
  const isCreating = id === "create";
  const { replace } = (0,react_router/* useHistory */.k6)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.So)();
  const queryClient = (0,es.useQueryClient)();
  const { isLoading: isLoadingForModels } = (0,useContentTypes/* useContentTypes */.G)();
  const { put, get, post } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const {
    isLoading,
    data: webhookData,
    error: webhookError
  } = (0,es.useQuery)(
    ["webhooks", id],
    async () => {
      const {
        data: { data }
      } = await get(`/admin/webhooks/${id}`);
      return data;
    },
    {
      enabled: !isCreating
    }
  );
  react.useEffect(() => {
    if (webhookError) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(webhookError)
      });
    }
  }, [webhookError, toggleNotification, formatAPIError]);
  const {
    isLoading: isTriggering,
    data: triggerResponse,
    isIdle: isTriggerIdle,
    mutate
  } = (0,es.useMutation)(() => post(`/admin/webhooks/${id}/trigger`));
  const triggerWebhook = () => mutate(null, {
    onError(error) {
      toggleNotification({
        type: "warning",
        message: formatAPIError(error)
      });
    }
  });
  const createWebhookMutation = (0,es.useMutation)((body) => post("/admin/webhooks", body));
  const updateWebhookMutation = (0,es.useMutation)(({ id: id2, body }) => put(`/admin/webhooks/${id2}`, body));
  const handleSubmit = async (data) => {
    if (isCreating) {
      createWebhookMutation.mutate(cleanData(data), {
        onSuccess({ data: result }) {
          toggleNotification({
            type: "success",
            message: { id: "Settings.webhooks.created" }
          });
          replace(`/settings/webhooks/${result.data.id}`);
        },
        onError(error) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(error)
          });
        }
      });
      return;
    }
    updateWebhookMutation.mutate(
      { id, body: cleanData(data) },
      {
        onSuccess() {
          queryClient.invalidateQueries(["webhooks", id]);
          toggleNotification({
            type: "success",
            message: { id: "notification.form.success.fields" }
          });
        },
        onError(error) {
          toggleNotification({
            type: "warning",
            message: formatAPIError(error)
          });
        }
      }
    );
  };
  if (isLoading || isLoadingForModels) {
    return /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.dO, null);
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(helper_plugin_esm/* SettingsPageTitle */.SL, { name: "Webhooks" }), /* @__PURE__ */ react.createElement(
    components_WebhookForm,
    {
      ...{
        data: webhookData,
        handleSubmit,
        triggerWebhook,
        isCreating,
        isTriggering,
        isTriggerIdle,
        triggerResponse: triggerResponse?.data.data
      }
    }
  ));
};
/* harmony default export */ const Webhooks_EditView = (EditView);


/***/ }),

/***/ 3672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87631);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41128);




const ProtectedCreateView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .CheckPagePermissions */ .O4, { permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.settings.webhooks.create }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedCreateView);


/***/ }),

/***/ 42122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87631);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41128);




const ProtectedEditView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .CheckPagePermissions */ .O4, { permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.settings.webhooks.update }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedEditView);


/***/ }),

/***/ 65224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ EventTable)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/Events/index.js
var Events = __webpack_require__(84714);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/Webhooks/EditView/components/EventTable/EventTableEE.js


function EventTableEE() {
  return /* @__PURE__ */ react.createElement(Events/* default */.Z.Root, null, /* @__PURE__ */ react.createElement(Events/* default */.Z.Headers, null), /* @__PURE__ */ react.createElement(Events/* default */.Z.Body, null));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/Webhooks/EditView/components/EventTable/index.js

/* harmony default export */ const EventTable = (EventTableEE);


/***/ }),

/***/ 90608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _Combobox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29178);

const p = _Combobox_js__WEBPACK_IMPORTED_MODULE_0__/* .Option */ .Wx;



/***/ }),

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const e = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"
  }
) }), a = e;



/***/ })

}]);