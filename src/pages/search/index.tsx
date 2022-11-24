import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getPreacherList } from "@/services/preacher";
import PreacherCard from "@/components/preacher-card";
import FilterTags from "@/components/filter-tags";
import useSearchStore from "@/store/search";
import useStyles from "./style";

const SearchPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [preacherList, setPreacherList] = useState<number[]>([]);
  const search = useSearchStore((state) => state.value);
  const [filterTagsArray, setfilterTagsArray] = useState<number[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getPreacherList(search, filterTagsArray).then((preachers) => {
        if (preachers.length === 1) {
          navigate(`/mpitory/${preachers[0]}`);
        } else {
          setPreacherList(preachers);
        }
      });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, filterTagsArray]);

  return (
    <div className={classes.container}>
      <div className={classes.mainContainer}>
        {preacherList.map((id) => (
          <PreacherCard key={id} id={id} />
        ))}
      </div>
      <FilterTags active={filterTagsArray} onChange={setfilterTagsArray} />
    </div>
  );
};

export default SearchPage;
