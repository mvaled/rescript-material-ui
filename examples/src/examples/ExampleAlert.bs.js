// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Material from "@mui/material";
import * as JsxRuntime from "react/jsx-runtime";

function ExampleAlert(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx(Material.Alert, {
                      children: "This is an error alert — check it out!",
                      severity: "error"
                    }),
                JsxRuntime.jsx(Material.Alert, {
                      children: "This is a warning alert — check it out!",
                      severity: "warning"
                    }),
                JsxRuntime.jsx(Material.Alert, {
                      children: "This is an info alert — check it out!",
                      severity: "info"
                    }),
                JsxRuntime.jsx(Material.Alert, {
                      children: "This is a success alert — check it out!",
                      severity: "success"
                    })
              ]
            });
}

var make = ExampleAlert;

export {
  make ,
}
/* @mui/material Not a pure module */