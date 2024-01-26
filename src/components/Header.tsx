
interface HeaderInferface {
  props: String[];
}

const Header: React.FC<HeaderInferface> = ({ props }) => {
  return <div className="header">{props[0]}</div>;
};

export default Header;
