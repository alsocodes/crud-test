/*
 Navicat Premium Data Transfer

 Source Server         : PG.LOCAL
 Source Server Type    : PostgreSQL
 Source Server Version : 130004
 Source Host           : localhost:5432
 Source Catalog        : crud-test
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130004
 File Encoding         : 65001

 Date: 26/09/2021 04:29:01
*/


-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
CREATE SEQUENCE "public"."users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "job_title" varchar(50) COLLATE "pg_catalog"."default",
  "age" int4,
  "location" varchar(50) COLLATE "pg_catalog"."default",
  "description" varchar(500) COLLATE "pg_catalog"."default",
  "email" varchar(100) COLLATE "pg_catalog"."default",
  "password" varchar(500) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO "public"."users" VALUES (5, 'ali', 'it', 27, 'sby', 'lalala', 'also@gmail.com', '1233', '2021-09-25 23:51:55', '2021-09-25 23:52:04');
INSERT INTO "public"."users" VALUES (6, 'a', 'a', 2, 'sss', 'ss', 'sss', '1222', '2021-09-25 23:52:44', '2021-09-25 23:52:48');
INSERT INTO "public"."users" VALUES (7, 'alalalal', 'Tukang Mouse', 27, 'Malang', 'Hisdsdgj dhdwjdh wdhwjdhw', 'ssddw@gmail.com', 'encriptedpassword', '2021-09-25 17:48:22.332', '2021-09-25 17:48:22.332');
INSERT INTO "public"."users" VALUES (8, 'alalalal', 'Tukang Mouse', 27, 'Malang', 'Hisdsdgj dhdwjdh wdhwjdhw', 'ssddw@gmail.com', 'encriptedpassword', '2021-09-25 17:49:27.356', '2021-09-25 17:49:27.356');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_id_seq"
OWNED BY "public"."users"."id";
SELECT setval('"public"."users_id_seq"', 9, true);

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
