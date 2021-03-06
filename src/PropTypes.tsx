export interface ITouchProps {
  disabled?: boolean;
  activeClassName?: string;
  activeStyle?: any;
  onTouchStart?: Function;
  onTouchEnd?: Function;
  onTouchCancel?: Function;
  onMouseDown?: Function;
  onMouseUp?: Function;
  onMouseLeave?: Function;
}

export interface ITouchState {
  active: boolean;
}
