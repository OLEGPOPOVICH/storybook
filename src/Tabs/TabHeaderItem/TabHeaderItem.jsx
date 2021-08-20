import './TabHeaderItem.css';

export const TabHeaderItem = ({
  text,
  active,
  onClick
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div className="tab-header-item__container" onClick={handleClick}>
      <div className={['tab-header-item__left-corner', active ? ' tab-header-item__left-corner--active' : ''].join("")}></div>
      <div className={['tab-header-item__content-container', active ? ' tab-header-item__content-container--active' : ''].join("")}>
        <span className="tab-header-item__title">{text}</span>
      </div>
      <div className={['tab-header-item__right-corner', active ? ' tab-header-item__right-corner--active' : ''].join("")}></div>
    </div>
  );
};