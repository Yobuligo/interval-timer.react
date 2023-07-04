import { Icon } from "../../components/icon/Icon";
import { IconType } from "../../types/IconType";

export const Start: React.FC = () => {
  return (
    <button>
      <Icon iconType={IconType.START} />
    </button>
  );
};
