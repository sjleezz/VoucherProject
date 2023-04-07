import React, { useRef, useState } from "react";
// redux
import { useAppDispatch, useAppSelector } from "redux/hooks";
import wrapper from "redux/store";
import { setContext } from "redux/features/data/dataSlices";

import { SubjectList, SubjectListArray, SubjectType } from "types/index.d";

// styles
import styles from "public/theme/PageView.module.css";
import cn from "classnames";
import { Card, List, Space, Empty, Skeleton, Avatar } from "antd";

//assets
const education = "/assets/images/education.jpg";
const environment = "/assets/images/environment.jpg";
const globalization = "/assets/images/globalization.jpg";
const technology = "/assets/images/technology.jpg";
const health = "/assets/images/health.jpg";
const social = "/assets/images/social.jpg";

//components
import { usePageMove } from "components/Hooks/usePageMove";

const { Meta } = Card;

interface DataType {
  title: string;
  subTitle: string;
  context: SubjectType;
}

// Page 2 : 주제 선택
export const Page2 = ({
  onClickHandler,
  outerDivRef,
  setCurrent,
}: {
  onClickHandler: () => void;
  outerDivRef: React.RefObject<HTMLDivElement>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const mode = useAppSelector((state) => state.data.mode);
  console.log("[Page2] mode :", mode);

  const dispatch = useAppDispatch();

  const data: DataType[] = [
    {
      title: "교육",
      subTitle: "Education",
      context: "Education",
    },
    {
      title: "환경",
      subTitle: "Environment",
      context: "Environment",
    },
    {
      title: "세계화",
      subTitle: "Globalization",
      context: "Globalization",
    },
    {
      title: "기술",
      subTitle: "Technology",
      context: "Technology",
    },
    {
      title: "건강",
      subTitle: "Health",
      context: "Health",
    },
    {
      title: "사회",
      subTitle: "Social",
      context: "Social",
    },
  ];

  const skeletonData = [
    {
      title: "title 1",
      subTitle: "subTitle 1",
      context: "context 1",
    },
    {
      title: "title 2",
      subTitle: "subTitle 2",
      context: "context 2",
    },
    {
      title: "title 3",
      subTitle: "subTitle 3",
      context: "context 3",
    },
    {
      title: "title 4",
      subTitle: "subTitle 4",
      context: "context 4",
    },
    {
      title: "title 5",
      subTitle: "subTitle 5",
      context: "context 5",
    },
  ];

  const clickRef = useRef<HTMLDivElement>(null);

  usePageMove({
    ref: clickRef,
    pageRef: outerDivRef,
    current: 2,
    setCurrent: setCurrent,
  });

  const handleClick = (context: SubjectType) => {
    dispatch(setContext(context));
  };

  const filterImage = (index : number) => {
    switch(index) {
      case 0 :
        return education
      case 1 :
        return environment
      case 2 :
        return globalization
      case 3 :
        return technology
      case 4 :
        return health
      case 5 :
        return social
      default :
        return education
    }
  }

  return (
    <div
      ref={clickRef}
      className={cn(styles.inner, styles.tab2)}
      onClick={onClickHandler}
    >
      {mode ? (
        <Space direction="horizontal">
          <List
            grid={{
              gutter: 5,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 5,
              xxl: 6,
            }}
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <Card
                  hoverable
                  cover={<img alt="example" src={filterImage(index)} />}
                  onClick={() => handleClick(item.context)}
                >
                  <Meta title={item.title} description={item.subTitle} />
                </Card>
              </List.Item>
            )}
          />
        </Space>
      ) : (
        <Space direction="horizontal">
          <List
            grid={{
              gutter: 5,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 5,
              xxl: 6,
            }}
            dataSource={skeletonData}
            renderItem={(item, index) => (
              <List.Item>
                <Card
                  hoverable
                  cover={<Empty description={'Select Mode First'} />}
                  onClick={() => handleClick(item.context)}
                >
                  <Skeleton loading={true} active>
                    <Meta title={item.title} description={item.subTitle} />
                  </Skeleton>
                </Card>
              </List.Item>
            )}
          />
        </Space>
      )}
    </div>
  );
};

export default Page2;
