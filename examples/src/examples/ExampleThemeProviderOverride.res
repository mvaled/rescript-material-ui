external styleToString: ReactDOM.Style.t => string = "%identity"

let theme = Mui.Theme.create({
  open Mui.ThemeOptions
  make(
    ~overrides=Overrides.make(
      ~\"MuiButton"=ButtonClassKey.make(
        ~outlined={
          fontSize: "12px",
          fontWeight: "300",
          color: "gray",
        }->ReactDOM.Style.unsafeAddProp(
          "& svg",
          {marginRight: "15px", fontSize: "16px"}->styleToString,
        ),
        (),
      ),
      (),
    ),
    (),
  )
})

module SupervisedUserCircleIcon = {
  @react.component @module("@material-ui/icons/SupervisedUserCircle")
  external make: (~color: string=?, ~fontSize: string=?) => React.element = "default"
}

@react.component
let make = () =>
  <div>
    <Mui.ThemeProvider theme>
      <Mui.Button color=#secondary variant=#outlined>
        <SupervisedUserCircleIcon />
        {"Overriden Outline Styles"->React.string}
      </Mui.Button>
    </Mui.ThemeProvider>
  </div>
