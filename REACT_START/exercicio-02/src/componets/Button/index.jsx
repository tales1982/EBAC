import PropTypes from "prop-types";
import { Button } from "./styles";

const ButtonCalc = ({ valor, styles, onClick }) => {
  return (
    <Button onClick={() => onClick(valor)} style={styles}>
      {valor}
    </Button>
  );
};

ButtonCalc.propTypes = {
  valor: PropTypes.string.isRequired,
  styles: PropTypes.object,
  onClick: PropTypes.func,
};

export default ButtonCalc;
