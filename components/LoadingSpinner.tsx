import { Alert, Space, Spin } from "antd";

const LoadingSpinner = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </Space>
  );
};

export default LoadingSpinner;
