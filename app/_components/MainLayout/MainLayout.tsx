"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Icon } from "@iconify/react";
import Logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import LoadingPage from "../../_components/Misc/loading";
// import { Switch } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "../../globals.css";
import StyledComponentsRegistry from "../../../lib/AntdRegistry";

import { Layout, Menu, Button, theme, Breadcrumb } from "antd";
const inter = Inter({ subsets: ["latin"] });
const { Header, Sider, Content } = Layout;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname().split("/");
  const currentPath = pathname[pathname.length - 1];
  const [loading, setLoading] = useState(true);
  const getIcon = (cur: string) => {
    switch (cur) {
      case "contest":
        return (
          <Icon
            icon="iconoir:leaderboard-star"
            height={20}
            width={20}
            className="mb-2"
          />
        );
      case "users":
        return <Icon icon="mdi:user" height={20} width={20} className="mb-2" />;
      case "setting":
        return (
          <Icon
            icon="tdesign:setting"
            height={20}
            width={20}
            className="mb-2"
          />
        );
      case "leaderboard":
        return (
          <Icon
            icon="material-symbols:leaderboard"
            height={20}
            width={20}
            className="mb-2"
          />
        );
      case "members":
        return (
          <Icon icon="mdi:users" height={20} width={20} className="mb-2" />
        );
      default:
        return <Icon icon="ep:menu" height={25} width={25} className="mb-2" />;
    }
  };
  const getCurrentPage = () => {
    console.log("update", currentPath);
    switch (currentPath) {
      case "contest":
        return "2";
      case "users":
        return "3";
      case "setting":
        return "4";
      case "leaderboard":
        return "5";
      case "members":
        return "6";
      default:
        return "1";
    }
  };
  const defaultSelectedKey = getCurrentPage() || "1";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <StyledComponentsRegistry>
          <Layout className="h-screen">
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              breakpoint="lg"
              theme="light"
              collapsedWidth="0"
            >
              <div className="my-4 text-black ml-5 mb-10">
                <Image src={Logo} alt="logo" />
              </div>
              <Menu
                theme="light"
                mode="vertical"
                defaultSelectedKeys={[defaultSelectedKey]}
                className="gap-2 flex flex-col"
                items={[
                  {
                    key: "1",
                    icon: (
                      <Link href={"/"}>
                        <Icon
                          icon="ep:menu"
                          height={25}
                          width={25}
                          className="pt-2"
                        />
                      </Link>
                    ),
                    label: <Link href={"/"}>Dashboard</Link>,
                  },
                  {
                    key: "2",
                    icon: (
                      <Icon
                        icon="iconoir:leaderboard-star"
                        height={20}
                        width={20}
                      />
                    ),
                    label: <Link href={"/contest"}>Contest</Link>,
                  },
                  {
                    key: "3",
                    icon: <Icon icon="mdi:user" height={20} width={20} />,
                    label: <Link href={"/users"}>Users</Link>,
                  },
                  // {
                  //     key: '4',
                  //     icon: <Icon icon="tdesign:setting" height={20} width={20} />,
                  //     label: <Link href={"/setting"}>Setting</Link>,
                  // },
                  {
                    key: "5",
                    icon: (
                      <Icon
                        icon="material-symbols:leaderboard"
                        height={20}
                        width={20}
                      />
                    ),
                    label: <Link href={"/leaderboard"}>Leader Board</Link>,
                  },
                  {
                    key: "6",
                    icon: <Icon icon="mdi:users" height={20} width={20} />,
                    label: <Link href={"/members"}>Members</Link>,
                  },
                ]}
              />
            </Sider>
            <Layout>
              <Header
                style={{ padding: 0, background: "white" }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: "16px",
                      width: 64,
                      height: 64,
                    }}
                  />

                  <Breadcrumb
                    items={[
                      {
                        title: getIcon(currentPath),
                      },
                      {
                        title: currentPath != "" ? currentPath : "Dashboard",
                      },
                    ]}
                  />
                </div>
                <div className="mr-10 flex gap-5">
                  <div className="flex gap-2 items-center">
                    <Icon
                      icon="lucide:message-circle-question"
                      height={20}
                      width={20}
                    />
                    <Icon icon="nimbus:notification" height={20} width={20} />
                  </div>
                  <Link href={"/profile"}>
                    <div className="flex gap-2 items-center">
                      <p>A2SV User</p>
                      <div className="h-10 w-10 rounded-full overflow-hidden flex justify-center items-center">
                        <Image
                          src="https://images.unsplash.com/photo-1587778082149-bd5b1bf5d3fa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDUyNDk0fHxlbnwwfHx8fHw%3D"
                          className="object-cover"
                          alt="profile"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </Header>
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                }}
                className="overflow-y-scroll h-full"
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </StyledComponentsRegistry>
      )}
    </>
  );
}
