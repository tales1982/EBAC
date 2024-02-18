import PropTypes from "prop-types";
import { Button } from "./styles";

const ButtonCalc = ({ valor, styles, click }) => {
  return (
    <Button onClick={() => click(valor)} style={styles}>
      {valor}
    </Button>
  );
};

ButtonCalc.propTypes = {
  valor: PropTypes.string.isRequired,
  styles: PropTypes.object,
  click: PropTypes.func,
};

export default ButtonCalc;
