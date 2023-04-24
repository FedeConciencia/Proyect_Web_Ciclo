import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './button.module.scss';
import Text from '../Text/Text';

const Button = (props:any) => {
  const {
    br,
    border,
    badge,
    className,
    endIcon,
    id,
    justify,
    label,
    onClick,
    startIcon,
    submit,
    textCase,
    textColor,
    textStyle,
    textWeight,
    variant,
    width,
    withOutPadding,
    style
  } = props;
  const buttonClass = cn({
    [styles.button]: true,
    [styles[variant]]: true,
    [styles.brHard]: br === 'hard',
    [className]: !!className
  });

  const widthOptions = {
    fullWidth: '100%',
    none: 'auto',
    sm: '25%',
    md: '50%',
    lg: '75%'
  };

  // TODO: agregar spinner cuando cargue la accion

  return (
    <button
      type={submit ? 'submit' : 'button'}
      id={id}
      onClick={onClick}
      className={buttonClass}
      disabled={variant === 'disabled'}
      style={{
        width: `${widthOptions[width]}`,
        justifyContent: justify,
        padding: withOutPadding ? '0px' : ' 15px 25px',
        border: border ? `1px solid ${border}` : '',
        ...style
      }}
    >
      {startIcon}
      {label && (
        <Text
          weight={textWeight}
          textCase={textCase}
          textColor={textColor}
          textStyle={textStyle}
          variant="span"
          textSize="s"
        >
          {label}
        </Text>
      )}
      {endIcon}
      {badge && (
        <div
          className={styles.badge}
          style={{ backgroundColor: border || 'white' }}
        >
          <Text
            variant="span"
            weight="semibold"
            textColor="black"
            textSize="m"
          >
            {badge}
          </Text>
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  border: PropTypes.string,
  badge: PropTypes.string,
  /**
   * Las variantes del botón son:
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'terciary',
    'transparent',
    'icon',
    'disabled'
  ]),
  /**
   * Cambia el texto (en caso de existir) según:
   */
  textCase: PropTypes.oneOf(['uppercase', 'capitalize', 'none']),
  /**
   * Cambia el peso de las letras a:
   */
  textWeight: PropTypes.oneOf(['bold', 'bolder', 'normal']),
  /**
   * Cambia el color del texto:
   */
  textColor: PropTypes.string,
  /**
   * Cambia el stilo del texto:
   */
  textStyle: PropTypes.object,
  /**
   * El botón renderiza un texto dentro si se le pasa:
   */
  label: PropTypes.string,
  /**
   * El botón ejecuta la función que se le pase por el evento onClick:
   */
  onClick: PropTypes.func,
  /**
   * Se renderiza un ícono dentro del botón ubicado a la izquierda:
   */
  startIcon: PropTypes.node,
  /**
   * Se renderiza un ícono dentro del botón ubicado a la derecha:
   */
  endIcon: PropTypes.node,
  /**
   * Ésta prop cambia la intensidad del borde:
   */
  br: PropTypes.oneOf(['soft', 'hard']),
  /**
   * Ésta prop cambia el tamaño del botón a medidas estándars:
   */
  width: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'fullWidth']),
  /**
   * El botón trae padding por defecto, con ésta prop se eliminan:
   */
  withOutPadding: PropTypes.bool,
  /**
   * Cuando el botón renderiza hijos internamente, éstos se disponen con flex según éstos parámetros:
   */
  justify: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-between'
  ]),
  /**
   * Si se quiere que el botón sea del tipo submit se le debe pasar ésta prop como true:
   */
  submit: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Button.defaultProps = {
  badge: '',
  border: '',
  br: 'soft',
  className: '',
  endIcon: null,
  justify: 'center',
  label: '',
  onClick: () => {},
  startIcon: null,
  submit: false,
  textCase: 'none',
  textColor: '',
  textStyle: {},
  textWeight: 'normal',
  variant: 'transparent',
  width: 'fullWidth',
  withOutPadding: false,
  style: {}
};

export default Button;
