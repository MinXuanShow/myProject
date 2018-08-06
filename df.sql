SET NAMES UTF8;
DROP DATABASE IF EXISTS df;
CREATE DATABASE df CHARSET=UTF8;
USE df;
-- 商品模块相关表
-- 创建业务项目列表df_index_products
-- 创建业务项目详情列表df_products

-- 用户模块相关列表
    -- 创建用户信息表：df_user

-- 其他表
    -- 网站基本信息表:df_info
    -- 首页导航列表:df_navbar
    -- 首页业务项目表：index_products
    -- 创建轮播图片表格：df_corouse_index
    -- 创建黑色浮动公告消息栏表格df_notice
#==============================================
-- 网站基本信息表
CREATE TABLE  df_info(
   email VARCHAR(16),
    phone VARCHAR(32),
    site_date VARCHAR(32),
    logo VARCHAR(64)
);
INSERT INTO df_info VALUES('Dongfang@163.com','0735-3668987','9:00-21:00','images/');
-- 用户表
CREATE TABLE df_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16) NOT NULL,
    upwd VARCHAR(32) NOT NULL,
    email VARCHAR(64) NOT NULL,
    phone VARCHAR(16) NOT NULL,
    avatar VARCHAR(128) default NULL,
    user_name VARCHAR(32) default NULL,
    gender INT(11) default NULL
);
-- 主页导航
CREATE TABLE df_navbar(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(16),
    title VARCHAR(32),
    parent INT
);
INSERT INTO df_navbar VALUES
('NULL','首页','点击跳转到网站的首页',1),
('NULL','简介','点击访问公司相关信息',2),
('NULL','服务','点击查看相关服务项目',2),
('NULL','项目','点击查看相关服务项目',2),
('NULL','博客','公司博客',2),
('NULL','店铺','公司商城',2),
('NULL','联系我们','联系方式',1);
CREATE TABLE df_navbartwo(
    nid INT,
    name VARCHAR(16),
    href VARCHAR(64),
    parent INT
);
INSERT INTO df_navbartwo VALUES
('2','关于我们','about-us.html',1),
('2','我们的团队','our-team.html',1),
('2','设计团队','team-single.html',1),
('3','我们的服务','services.html',1),
('3','定制服务','service-single.html',1),
('4','标准样板房 ','portfolio-default.html',1),
('4','全套样板房 ','portfolio-fullwidth.html',1),
('4','样板房介绍 ','portfolio-with-text.html',1),
('4','单个样板01 ','portfolio-single-one.html',1),
('4','单个样板02 ','portfolio-single-two.html',1),
('5','经验分享 ','blog.html',1),
('5','家装资讯 ','blog-single.html',1),
('6','店铺产品 ','shop.html',1),
('6','购物车 ','shopping-cart.html',1),
('6','收银台','checkout.html',1);
-- 主页轮播图片广告
CREATE TABLE df_corouse_index(
	rid INT PRIMARY KEY AUTO_INCREMENT ,/*图片编号*/
	img VARCHAR(128),/*图片路径*/
	title VARCHAR(64),/*图片名称*/
	href VARCHAR(128)/*图片跳转路径*/
);
INSERT INTO df_corouse_index VALUES
('NULL',"images/main-slider/image-1.jpg","阳光卧室","NULL"),
('NULL',"images/main-slider/image-2.jpg","素雅客厅","NULL"),
('NULL',"images/main-slider/image-3.jpg","暖色客厅","NULL");
-- 创建左边黑色浮动公告消息栏表格df_notice
CREATE TABLE df_notice(
    welcome VARCHAR(64),
    title VARCHAR(64),
    content  VARCHAR(128),
    href VARCHAR(128),
);
INSERT INTO df_notice
VALUES('热点家装资讯'，'智能家居行业快速发展 “生态圈”正在形成',
'日前，《人民日报》(海外版)撰文指出，据研究机构国际数据报告(IDC)发布的报告显示，全球智能家居设备今年装载量将达5.495亿台，同比增长26.8%，其中智能音箱和视频娱乐产品预计将占据71%的智能家居设备销量。从智能音箱到各类智能家电，智能家居的“生态圈”正在形成。',
'http://news.to8to.com/article/141668.html');

-- 创建业务项目列表df_index_products
CREATE TABLE df_index_products(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    tite VARCHAR(64),
    details VARCHAR(128),
    href VARCHAR(64)
);
INSERT INTO df_index_products VARCHAR
('NULL','壁纸墙纸'，'....','details.html?id=?'),
('NULL','实木地板'，'....','details.html?id=?'),
('NULL','室内窗帘'，'....','details.html?id=?'),
('NULL','瓷砖、大理石'，'....','details.html?id=?'),
('NULL','专业定做家居'，'....','details.html?id=?'),
('NULL','照明灯具'，'....','details.html?id=?');
-- 创建项目商品详情列表df_products
-- 创建精品案例分享列表


