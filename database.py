import database_lib
import uuid

def check_username(username):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select count(*) from user_info where username = '{}';".format(username)
    result = database_object.search(sql)
    database_object.close()
    if result[0][0] == 0:
        return True
    else:
        return False

def create_user(user_profile):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "insert into user_info values ('{}', '{}', '{}', '{}','{}','{}')';".format(user_profile["username"], user_profile.get("name", user_profile["username"]), user_profile["password"], user_profile["email"], user_profile["type"], user_profile.get("photo", "None"))
    database_object.update(sql)
    database_object.close()

def get_user_info_by_username(username):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select * from user_info where username = '{}';".format(username)
    result = database_object.search(sql)
    database_object.close()
    result = convert_user_info(result)
    return result

def get_user_info_by_name(uname):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select * from user_info where uname like '%{}%'".format(uname)
    result = database_object.search(sql)
    database_object.close()
    result = convert_user_info(result)
    return result

def get_user_password(username):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select password from user_info where username = '{}';".format(username)
    result = database_object.search(sql)
    database_object.close()
    result = result[0][0]
    result.rstrip()
    return result

def change_user_info(username, field, new_data):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "update user_info set {} = '{}' where username = '{}';".format(field, new_data, username)
    database_object.update(sql)
    database_object.close()

def change_user_password(username, new_password):
    change_user_info(username, "password", new_password)

def change_user_name(username, new_uname):
    change_user_info(username, "uname", new_uname)

def change_user_email(username, new_email):
    change_user_info(username, "email", new_email)

def change_user_type(username, type_code):
    change_user_info(username, "type", type_code)

def change_user_photo(username, photo_addr):
    change_user_info(username, "photo", photo_addr)

def create_skill(uuid, skill_name):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "insert into skills values ('{}', '{}');".format(uuid, skill_name)
    database_object.update(sql)
    database_object.close()

def get_skill_name(uuid):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select * from skills where \"Id\" = '{}';".format(uuid)
    result = database_object.search(sql)
    database_object.close()
    return result

def search_skill(skill_name):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select * from skills where \"Name\" like '%{}%';".format(skill_name)
    result = database_object.search(sql)
    database_object.close()
    return result

def create_course(code, course_name):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "insert into courses values ('{}', '{}');".format(code, course_name)
    database_object.update(sql)
    database_object.close()

def get_course_name(code):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select * from courses where \"Id\" = '{}';".format(code)
    result = database_object.search(sql)
    database_object.close()
    return result

def search_course(course_name):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select * from courses where \"Name\" like '%{}%';".format(course_name)
    result = database_object.search(sql)
    database_object.close()
    return result

def convert_user_info(temp_result):
    result = list()
    for temp_tuple in temp_result:
        temp_dict = {}
        temp_dict["username"] = temp_tuple[0].rstrip()
        temp_dict["name"] = temp_tuple[1].rstrip()
        temp_dict["email"] = temp_tuple[3].rstrip()
        temp_dict["type"] = temp_tuple[4]
        temp_dict["photo"] = temp_tuple[5]
        result.append(temp_dict)
    return result

def create_test_data():
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "insert into user_info values ('test1','test1','123456','test1@abc.com',1,'None');\
            insert into user_info values ('test2','test2','456789','test2@abc.com',1,'None');\
            insert into user_info values ('test3','test3','123789','test3@abc.com',1,'None');\
            insert into skills values ('45a113ac-c7f2-30b0-90a5-a399ab912716', 'Java');\
            insert into skills values ('c501822b-22a8-37ff-91a9-9545f4689a3d', 'Python');\
            insert into job_title values ('f1917643-06b2-3e6d-ab77-0a5044067d0a', 'Network Engineering');\
            insert into job_title values ('bf7f1e5a-6b28-310c-8f9e-f815dbd56fb7', 'Software Engineering');\
            insert into courses values ('COMP9900', 'Information Technology Project');\
            insert into courses values ('COMP9323', 'Software as a Service Project');\
            insert into course_and_skill values ('COMP9900', 'c501822b-22a8-37ff-91a9-9545f4689a3d');\
            insert into job_and_skill values ('bf7f1e5a-6b28-310c-8f9e-f815dbd56fb7', 'c501822b-22a8-37ff-91a9-9545f4689a3d');\
            insert into course_list values ('test1', 'COMP9900', 1);"
    database_object.update(sql)
    database_object.close()

if __name__ == "__main__":
    print(get_user_info_by_username('test1'))
    # create_test_data()