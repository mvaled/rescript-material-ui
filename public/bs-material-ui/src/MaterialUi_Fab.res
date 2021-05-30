module TabIndex: {
  type t
  let int: int => t
  let float: float => t
  let string: string => t
} = {
  @unboxed
  type rec t = Any('a): t
  let int = (v: int) => Any(v)
  let float = (v: float) => Any(v)
  let string = (v: string) => Any(v)
}

module Type_enum: {
  type t
  let button: t
  let reset: t
  let submit: t
} = {
  @unboxed
  type rec t = Any('a): t

  let button = Any("button")
  let reset = Any("reset")
  let submit = Any("submit")
}

module Type: {
  type t
  let enum: Type_enum.t => t
  let string: string => t
} = {
  @unboxed
  type rec t = Any('a): t
  let enum = (v: Type_enum.t) => Any(v)
  let string = (v: string) => Any(v)
}

module Classes = {
  type t = {
    "root": option<string>,
    "label": option<string>,
    "primary": option<string>,
    "secondary": option<string>,
    "extended": option<string>,
    "focusVisible": option<string>,
    "disabled": option<string>,
    "colorInherit": option<string>,
    "sizeSmall": option<string>,
    "sizeMedium": option<string>,
  }
  @obj
  external make: (
    ~root: string=?,
    ~label: string=?,
    ~primary: string=?,
    ~secondary: string=?,
    ~extended: string=?,
    ~focusVisible: string=?,
    ~disabled: string=?,
    ~colorInherit: string=?,
    ~sizeSmall: string=?,
    ~sizeMedium: string=?,
    unit,
  ) => t = ""
}

type color = [#default | #inherit | #primary | #secondary]

module Component: {
  type t
  let string: string => t
  let callback: (unit => React.element) => t
  let element: React.element => t
} = {
  @unboxed
  type rec t = Any('a): t
  let string = (v: string) => Any(v)
  let callback = (v: unit => React.element) => Any(v)
  let element = (v: React.element) => Any(v)
}

type size = [#large | #medium | #small]

type variant = [#extended | #round]

@react.component @module("@material-ui/core")
external make: (
  ~centerRipple: bool=?,
  ~disableTouchRipple: bool=?,
  ~focusRipple: bool=?,
  ~onBlur: ReactEvent.Focus.t => unit=?,
  ~onClick: ReactEvent.Mouse.t => unit=?,
  ~onDragLeave: ReactEvent.Mouse.t => unit=?,
  ~onFocus: ReactEvent.Focus.t => unit=?,
  ~onFocusVisible: MaterialUi_Types.any=?,
  ~onKeyDown: ReactEvent.Keyboard.t => unit=?,
  ~onKeyUp: ReactEvent.Keyboard.t => unit=?,
  ~onMouseDown: ReactEvent.Mouse.t => unit=?,
  ~onMouseLeave: ReactEvent.Mouse.t => unit=?,
  ~onMouseUp: ReactEvent.Mouse.t => unit=?,
  ~onTouchEnd: ReactEvent.Touch.t => unit=?,
  ~onTouchMove: ReactEvent.Touch.t => unit=?,
  ~onTouchStart: ReactEvent.Touch.t => unit=?,
  ~tabIndex: TabIndex.t=?,
  ~\"TouchRippleProps": {..}=?,
  ~\"type": Type.t=?,
  ~id: string=?,
  ~style: ReactDOM.Style.t=?,
  ~children: 'children=?,
  ~classes: Classes.t=?,
  ~className: string=?,
  ~color: color=?,
  ~component: Component.t=?,
  ~disabled: bool=?,
  ~disableFocusRipple: bool=?,
  ~disableRipple: bool=?,
  ~focusVisibleClassName: string=?,
  ~href: string=?,
  ~size: size=?,
  ~variant: variant=?,
  ~key: string=?,
  ~ref: ReactDOM.domRef=?,
) => React.element = "Fab"