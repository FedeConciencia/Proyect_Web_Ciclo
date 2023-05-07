import { Text } from "@/components/mixins";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";
import styles from "./listado.module.scss";

type props = {
  title?: String;
  options?: { key: string; text: string; title?: string }[] | undefined;
};
const Listado = (props: props) => {
  const { title, options } = props;
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <div className={styles.list_title_with_icon}>
        <Text className={styles.list_title} left textCase="uppercase" weight="bold">
          {title}
        </Text>
        {showList ? (
          <div>
            <BiChevronUp
              color={"#ffb71b"}
              fontSize={20}
              onClick={() => {
                toggleShowList();
              }}
            />
          </div>
        ) : (
          <div>
            <BiChevronDown
              color={"#ffb71b"}
              fontSize={20}
              onClick={() => {
                toggleShowList();
              }}
            />
          </div>
        )}
      </div>
      {showList && (
        <ul>
          {options?.map((option) => {
            return <li key={option.key} className={styles.list_option}>{option.text}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Listado;
