import PropTypes from "prop-types";
import { Link, Text } from "@/components/mixins";
import styles from "./navBarModal.module.scss";

type subCategory = {
  id: number;
  url: string;
  name: string;
};
const RenderSubCategory = ({ subCategory }: any) => {
  const { url, name }: subCategory = subCategory;
  return (
    <div className={styles.item} role="button">
      <Text textStyle={{ fontSize: "16px" }} textColor="#101820">
        {name}
      </Text>
    </div>
  );
};

const NavBarModal = ({ content }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {content.map((c: subCategory) => (
          <RenderSubCategory subCategory={c} key={c.id} />
        ))}
      </div>
    </div>
  );
};

NavBarModal.propTypes = {
  content: PropTypes.array.isRequired,
};

RenderSubCategory.propTypes = {
  subCategory: PropTypes.object.isRequired,
};

export default NavBarModal;
