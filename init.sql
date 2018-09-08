-- Method to use
-- Open terminal in current directory
-- $ createdb comp9900
-- $ psql comp9900 -s
-- $ \i init.sql
-- and all tables will be create


CREATE TABLE courses
(
    code character(8) NOT NULL,
    course_name text NOT NULL,
    PRIMARY KEY (code)
);

CREATE TABLE skills
(
    skill_id uuid NOT NULL,
    skill_name text NOT NULL,
    PRIMARY KEY (skill_id)
);

CREATE TABLE job_title
(
    job_id uuid NOT NULL,
    job_name text NOT NULL,
    PRIMARY KEY (job_id)
);

CREATE TABLE course_and_skill
(
    code character(8) NOT NULL,
    skill_id uuid NOT NULL,
    relevance double precision,
    PRIMARY KEY (code, skill_id)
);

CREATE TABLE job_and_skill
(
    job_id uuid NOT NULL,
    skill_id uuid NOT NULL,
    relevance double precision,
    PRIMARY KEY (job_id, skill_id)
);

CREATE TABLE user_info
(
    username character(40) NOT NULL,
    uname character(40),
    password character(40) NOT NULL,
    email character(40) NOT NULL,
    type integer NOT NULL,
    photo text,
    PRIMARY KEY (username)
);

CREATE TABLE course_list
(
    student_id character(40) NOT NULL,
    code character(8) NOT NULL,
    certificat integer NOT NULL,
    PRIMARY KEY (student_id, code)
);

CREATE TABLE resume
(
    resume_id uuid NOT NULL,
    student_id character(40) NOT NULL,
    address text NOT NULL,
    PRIMARY KEY (resume_id)
);

CREATE TABLE enrolment
(
    enrol_id uuid NOT NULL,
    student_id character(40) NOT NULL,
    company_id character(40) NOT NULL,
    resume_id uuid NOT NULL,
    PRIMARY KEY (enrol_id)
);

CREATE TABLE job_info
(
    job_info_id uuid NOT NULL,
    job_id uuid NOT NULL,
    company_id character(40) NOT NULL,
    address text NOT NULL,
    PRIMARY KEY (job_info_id)
);