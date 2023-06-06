// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Material from "@mui/material";
import * as JsxRuntime from "react/jsx-runtime";

var messages = ([...'养绌聭']);

function reducer(state, action) {
  if (typeof action !== "object") {
    return {
            anchorEl: undefined,
            popupMessage: state.popupMessage
          };
  }
  var match = action._0;
  return {
          anchorEl: Caml_option.some(match[0]),
          popupMessage: match[1]
        };
}

function ExamplePopover(props) {
  var match = React.useReducer(reducer, {
        anchorEl: undefined,
        popupMessage: ""
      });
  var dispatch = match[1];
  var state = match[0];
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx(Material.Popover, {
                      anchorEl: Belt_Option.map(state.anchorEl, (function (el) {
                              return el;
                            })),
                      children: Caml_option.some(JsxRuntime.jsx("div", {
                                children: state.popupMessage,
                                style: {
                                  backgroundColor: "salmon",
                                  fontSize: "6rem",
                                  margin: "1rem"
                                }
                              })),
                      onClose: (function (_evt) {
                          dispatch("ClosePopup");
                        }),
                      open: Belt_Option.isSome(state.anchorEl)
                    }),
                JsxRuntime.jsx(Material.List, {
                      children: Caml_option.some(Belt_Array.mapWithIndex(messages, (function (i, message) {
                                  return JsxRuntime.jsx(Material.ListItem, {
                                              button: true,
                                              children: Caml_option.some(JsxRuntime.jsx(Material.ListItemText, {
                                                        children: Caml_option.some(message)
                                                      })),
                                              onClick: (function (evt) {
                                                  dispatch({
                                                        TAG: "OpenPopup",
                                                        _0: [
                                                          evt.target,
                                                          message
                                                        ]
                                                      });
                                                })
                                            }, String(i));
                                })))
                    })
              ]
            });
}

var make = ExamplePopover;

export {
  messages ,
  reducer ,
  make ,
}
/* messages Not a pure module */
