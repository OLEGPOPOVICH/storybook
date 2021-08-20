import { TabHeaderItem } from '../TabHeaderItem';
import './TabsHeader.css';

export const TabsHeader = ({
  tabs,
  activeIndex,
  onTabClick
}) => {
  const handleClcik = (index) => {
    onTabClick(index);
  };

  return (
    <div className="tabs-header__container">
      {tabs.map((tab, index) => (
        <div className="tabs-header__header-item-container" key={index}>
          <TabHeaderItem
            text={tab.text}
            active={index === activeIndex ? true : false}
            onClick={() => handleClcik(index)}
          />
        </div>
      ))}
    </div>
  );
};