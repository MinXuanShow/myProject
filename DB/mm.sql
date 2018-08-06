SET NAMES UTF8;
DROP DATABASE IF EXISTS mm;
CREATE DATABASE mm CHARSET UTF8;
USE mm;
#网站基本信息表
CREATE TABLE mm_site_info(
	site_name VARCHAR(16),/*网站的名称*/
	logo VARCHAR(64);/*网站logo*/
	admin_email VARCHAR(64),/*邮箱*/
	icp VARCHAR(32),/*ICP*/
	copyright VARCHAR(64)/*版权*/
)
INEST INTO mm_site_info 
VALUES('我的电影网','img/logo.png',admin@mm.com,)