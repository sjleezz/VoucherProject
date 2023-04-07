import React, { useRef } from "react";
// redux
import { useAppDispatch, useAppSelector } from "redux/hooks";
import wrapper from "redux/store";
import { setMode } from "redux/features/data/dataSlices";

// style
import styles from "public/theme/PageView.module.css";
import cn from "classnames";

//assets
const assess1 = "/assets/images/assess1.jpg";
const assess2 = "/assets/images/assess2.jpg";
import { Avatar, Card, Space, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

//components
import { usePageMove } from "components/Hooks/usePageMove";
import { ModeList, ModeListArray } from "types/index.d";

const { Meta } = Card;

// Page 1 : 모드 선택
export const Page1 = ({
  onClickHandler,
  outerDivRef,
  setCurrent,
}: {
  onClickHandler: () => void;
  outerDivRef: React.RefObject<HTMLDivElement>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const clickRef1 = useRef<HTMLDivElement>(null);
  const clickRef2 = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  usePageMove({
    ref: clickRef1,
    pageRef: outerDivRef,
    current: 1,
    setCurrent: setCurrent,
  });
  usePageMove({
    ref: clickRef2,
    pageRef: outerDivRef,
    current: 1,
    setCurrent: setCurrent,
  });

  const handleClick = (mode: number) => {
    dispatch(setMode(ModeListArray[mode]));
  };

  return (
    <div className={cn(styles.inner, styles.tab1)} onClick={onClickHandler}>
      <Space direction="horizontal">
        <Card
          ref={clickRef1}
          onClick={() => handleClick(ModeList.Mode1)}
          hoverable
          style={{ width: 400 }}
          cover={<img alt="example" src={assess1} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={"https://joesch.moe/api/v1/random" + 1} />}
            title="쓰기 연습"
            description="This is the description"
          />
        </Card>
        <Card
         ref={clickRef2}
          hoverable
          onClick={() => handleClick(ModeList.Mode2)}
          style={{ width: 400 }}
          cover={<img alt="example" src={assess2} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={"https://joesch.moe/api/v1/random" + 2} />}
            title="분석 리포트"
            description="This is the description"
          />
        </Card>
      </Space>
    </div>
  );
};

export default Page1;
