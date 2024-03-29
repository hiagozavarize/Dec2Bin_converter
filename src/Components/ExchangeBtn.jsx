import PropTypes from "prop-types";

function ExchangeBtn({ onClick }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={onClick}>
        Convert
      </button>
    </div>
  );
}
ExchangeBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ExchangeBtn;
