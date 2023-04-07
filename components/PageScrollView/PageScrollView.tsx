import { useRef, useEffect, useState } from "react";

// redux
import { useAppDispatch, useAppSelector } from "redux/hooks";
import wrapper from "redux/store";
import { setAuthTokenLogin } from "redux/features/data/dataSlices";

import usePageScroll from "components/Hooks/usePageScroll";
import usePageMove from "components/Hooks/usePageMove";
import usePageBlockScroll from "components/Hooks/usePageBlockScroll";
import styles from "public/theme/PageView.module.css";
import cn from "classnames";
import Dots from "components/Dots";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4/Page4";

export const PageScrollView = ({
  current,
  setCurrent,
  currentPageNumRef,
}: {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  currentPageNumRef: React.MutableRefObject<number>;
}) => {
  const outerDivRef = useRef<HTMLDivElement>(null);

  const [isResult, setIsResult] = useState(false);

  // Page Movement by Scrolling Hook
  usePageScroll({
    ref: outerDivRef,
    setCurrent: setCurrent,
  });

  // Block scroll
  // usePageBlockScroll({
  //   ref: outerDivRef,
  //   current : current
  // })

  console.log("[PageScrollView] current :", current);

  const onClickHandler = () => {
    switch (current) {
      case 0:
    }
  };

  return (
    <div ref={outerDivRef} className={cn(styles.outer)}>
      <Page1
        onClickHandler={onClickHandler}
        outerDivRef={outerDivRef}
        setCurrent={setCurrent}
      />
      <div className={cn(styles.divider)}></div>
      <Page2
        onClickHandler={onClickHandler}
        outerDivRef={outerDivRef}
        setCurrent={setCurrent}
      />
      <div className={cn(styles.divider)}></div>
      <Page3
        setIsResult={setIsResult}
        onClickHandler={onClickHandler}
        outerDivRef={outerDivRef}
        setCurrent={setCurrent}
      />
      <div className={cn(styles.divider)}></div>
      <Page4
        isResult={isResult}
        onClickHandler={onClickHandler}
        outerDivRef={outerDivRef}
        current={current}
        setCurrent={setCurrent}
      />
      <Dots scrollIndex={current} />
    </div>
  );
};

export default PageScrollView;
