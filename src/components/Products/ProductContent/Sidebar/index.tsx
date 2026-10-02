import FilterGroup from "./FilterGroup";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <FilterGroup
        title="IDEAL FOR"
        options={["Men", "Women", "Baby & Kids"]}
      />

      <FilterGroup
        title="OCCASION"
        options={["Formal", "Casual", "Party", "Holiday"]}
      />

      <FilterGroup title="WORK" options={["Presentation", "Semi-Formal"]} />

      <FilterGroup
        title="FABRIC"
        options={["Lenin", "Skik", "Cotton", "Wool", "Nilon"]}
      />

      <FilterGroup
        title="SEGMENT"
        options={["Black", "White", "Blue", "Red"]}
      />

      <FilterGroup
        title="SUITABLE FOR"
        options={["Home", "Outdoor", "Sports"]}
      />

      <FilterGroup
        title="RAW MATERIALS"
        options={["Indian", "Western", "Asian", "African"]}
      />

      <FilterGroup title="PATTERN" options={["Plain", "Checks", "Stripes"]} />
    </aside>
  );
};

export default Sidebar;
