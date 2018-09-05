-- Method to use
-- Open terminal in current directory
-- $ createdb comp9900
-- $ psql comp9900 -s
-- $ \i init.sql
-- and all tables will be create


CREATE TABLE courses
(
    "Id" character(8) NOT NULL,
    "Name" text NOT NULL,
    PRIMARY KEY ("Id")
);

CREATE TABLE skills
(
    "Id" uuid NOT NULL,
    "Name" text NOT NULL,
    PRIMARY KEY ("Id")
);

CREATE TABLE job_title
(
    "Id" uuid NOT NULL,
    "Name" text NOT NULL,
    PRIMARY KEY ("Id")
);

CREATE TABLE course_and_skill
(
    "c_Id" character(8) NOT NULL,
    "s_Id" uuid NOT NULL,
    relevance double precision,
    PRIMARY KEY ("c_Id", "s_Id")
);

CREATE TABLE job_and_skill
(
    "j_Id" uuid NOT NULL,
    "s_ID" uuid NOT NULL,
    relevance double precision,
    PRIMARY KEY ("j_Id", "s_ID")
);

CREATE TABLE user_info
(
    username character(40) NOT NULL,
    uname character(40),
    password character(40) NOT NULL,
    email character(40) NOT NULL,
    type integer NOT NULL,
    photo text,
    PRIMARY KEY ("username")
);

CREATE TABLE course_list
(
    u_id character(40) NOT NULL,
    c_id character(8) NOT NULL,
    certificat integer NOT NULL,
    PRIMARY KEY (c_id, u_id)
);

CREATE TABLE resume
(
    "Id" uuid NOT NULL,
    "u_Id" character(40) NOT NULL,
    address text NOT NULL,
    PRIMARY KEY ("Id")
);

CREATE TABLE enrolment
(
    "Id" uuid NOT NULL,
    "student_Id" uuid NOT NULL,
    "company_Id" uuid NOT NULL,
    "resume_Id" uuid NOT NULL,
    PRIMARY KEY ("Id")
);

CREATE TABLE job_info
(
    "Id" uuid NOT NULL,
    "j_Id" uuid NOT NULL,
    "company_Id" uuid NOT NULL,
    address text NOT NULL,
    PRIMARY KEY ("Id")
);