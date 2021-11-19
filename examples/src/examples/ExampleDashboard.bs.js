// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Core from "@material-ui/core";
import * as Styles from "@material-ui/styles";
import Menu from "@material-ui/icons/Menu";
import * as ThemeHelpers$MaterialUi from "rescript-material-ui/src/ThemeHelpers.bs.js";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Notifications from "@material-ui/icons/Notifications";

function px_of_float(x) {
  return String(x | 0) + "px";
}

function px_of_int(x) {
  return String(x) + "px";
}

var useStyles = Styles.makeStyles(function (theme) {
      var x = Curry._1(theme.spacing, 7);
      var x$1 = Curry._1(theme.spacing, 9);
      var x$2 = Curry._1(theme.spacing, 3);
      var x$3 = Curry._1(theme.spacing, 2);
      return {
              wrapper: {
                background: "#FFFFFF",
                height: "100vh",
                left: "0",
                position: "fixed",
                top: "0",
                width: "100vw",
                zIndex: "999999"
              },
              root: {
                display: "flex"
              },
              toolbar: {
                paddingRight: "24px"
              },
              toolbarIcon: Object.assign({}, {
                    display: "flex",
                    padding: "0 8px",
                    alignItems: "center",
                    justifyContent: "flex-end"
                  }, theme.mixins.toolbar),
              appBar: {
                zIndex: String(theme.zIndex.drawer + 1.0 | 0),
                transition: ThemeHelpers$MaterialUi.transitionCreate(theme, true, true, theme.transitions.easing.sharp, theme.transitions.duration.leavingScreen, undefined)
              },
              appBarShift: {
                marginLeft: String(240) + "px",
                width: "calc(100% - " + 240 + "px)",
                transition: ThemeHelpers$MaterialUi.transitionCreate(theme, true, true, theme.transitions.easing.sharp, theme.transitions.duration.enteringScreen, undefined)
              },
              menuButton: {
                marginRight: "36px",
                marginLeft: "12px"
              },
              menuButtonHidden: {
                display: "none"
              },
              title: {
                flexGrow: "1"
              },
              drawerPaper: {
                position: "relative",
                whiteSpace: "nowrap",
                width: "" + 240 + "px",
                transition: ThemeHelpers$MaterialUi.transitionCreate(theme, true, undefined, theme.transitions.easing.sharp, theme.transitions.duration.enteringScreen, undefined)
              },
              drawerPaperClose: ThemeHelpers$MaterialUi.addBreakpoint({
                    overflowX: "hidden",
                    width: String(x) + "px",
                    transition: ThemeHelpers$MaterialUi.transitionCreate(theme, true, true, theme.transitions.easing.sharp, theme.transitions.duration.leavingScreen, undefined)
                  }, theme, "SM", {
                    width: String(x$1) + "px"
                  }),
              appBarSpacer: theme.mixins.toolbar,
              content: {
                height: "100vh",
                overflow: "auto",
                padding: String(x$2) + "px",
                flexGrow: "1"
              },
              h5: {
                marginBottom: String(x$3) + "px"
              }
            };
    });

var MenuIcon = {};

var NotificationsIcon = {};

var ChevronLeftIcon = {};

function ExampleDashboard(Props) {
  var sidebar = Props.sidebar;
  var children = Props.children;
  var match = React.useReducer((function (param, action) {
          if (action) {
            return {
                    isOpen: false
                  };
          } else {
            return {
                    isOpen: true
                  };
          }
        }), {
        isOpen: true
      });
  var setState = match[1];
  var state = match[0];
  var match$1 = React.useReducer((function (param, v) {
          return v;
        }), false);
  var setShow = match$1[1];
  var classes = useStyles();
  return React.createElement("div", undefined, match$1[0] ? React.createElement("div", {
                    className: classes.wrapper
                  }, React.createElement("div", {
                        className: classes.root
                      }, React.createElement(Core.CssBaseline, {}), React.createElement(Core.AppBar, {
                            children: React.createElement(Core.Toolbar, {
                                  children: null,
                                  className: classes.toolbar,
                                  disableGutters: !state.isOpen
                                }, React.createElement(Core.IconButton, {
                                      onClick: (function (_event) {
                                          return Curry._1(setState, /* Open */0);
                                        }),
                                      children: React.createElement(Menu, {}),
                                      className: [
                                          classes.menuButton,
                                          state.isOpen ? classes.menuButtonHidden : ""
                                        ].join(" "),
                                      color: "inherit"
                                    }), React.createElement(Core.Typography, {
                                      children: "Dashboard",
                                      className: classes.title,
                                      color: "inherit",
                                      component: "h1",
                                      noWrap: true,
                                      variant: "h6"
                                    }), React.createElement(Core.Link, {
                                      children: "Close Dashboard",
                                      color: "secondary",
                                      onClick: (function (e) {
                                          e.preventDefault();
                                          return Curry._1(setShow, false);
                                        }),
                                      href: "#"
                                    }), React.createElement(Core.IconButton, {
                                      children: React.createElement(Core.Badge, {
                                            badgeContent: "4",
                                            children: React.createElement(Notifications, {}),
                                            color: "secondary"
                                          }),
                                      color: "inherit"
                                    })),
                            className: [
                                classes.appBar,
                                state.isOpen ? classes.appBarShift : ""
                              ].join(" "),
                            position: "absolute"
                          }), React.createElement(Core.Drawer, {
                            children: null,
                            classes: {
                              paper: [
                                  classes.drawerPaper,
                                  state.isOpen ? "" : classes.drawerPaperClose
                                ].join(" ")
                            },
                            open: state.isOpen,
                            variant: "permanent"
                          }, React.createElement("div", {
                                className: classes.toolbarIcon
                              }, React.createElement(Core.IconButton, {
                                    onClick: (function (_event) {
                                        return Curry._1(setState, /* Close */1);
                                      }),
                                    children: React.createElement(ChevronLeft, {})
                                  })), React.createElement(Core.Divider, {}), React.createElement("div", undefined, sidebar)), React.createElement("main", {
                            className: classes.content
                          }, React.createElement("div", {
                                className: classes.appBarSpacer
                              }), React.createElement("div", undefined, children)))) : React.createElement(Core.Button, {
                    onClick: (function (param) {
                        return Curry._1(setShow, true);
                      }),
                    children: "Open Dashboard",
                    color: "primary",
                    variant: "outlined"
                  }));
}

var drawerWidth = 240;

var make = ExampleDashboard;

export {
  drawerWidth ,
  px_of_float ,
  px_of_int ,
  useStyles ,
  MenuIcon ,
  NotificationsIcon ,
  ChevronLeftIcon ,
  make ,
  
}
/* useStyles Not a pure module */
