import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const customRightArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="custom-arrow-button">
      <IoIosArrowDropright />
    </button>
  );
};

const customLeftArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="custom-arrow-button">
      <IoIosArrowDropleft />
    </button>
  );
};

export default { customRightArrow, customLeftArrow };
