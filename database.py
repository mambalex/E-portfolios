import database_lib

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
    sql = "insert into user_info values ('{}', '{}', '{}', '{}','{}','{}')';".format(user_profile["id"], user_profile["username"], user_profile["password"], user_profile["email"], user_profile["type"], user_profile.get("photo", "None"))
    result = database_object.update(sql)
    database_object.close()

def get_user_info_by_id(uuid):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select * from user_info where \"Id\" = '{}';".format(uuid)
    result = database_object.search(sql)
    database_object.close()
    return result[0]


def create_course(code, title):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "insert into courses values ('{}', '{}');".format(code, title)
    database_object.update(sql)
    database_object.close()

def search_course(code):
    dbconfig = {"dbname": "comp9900"}
    database_object = database_lib.Database_object(dbconfig)
    database_object.open()
    sql = "select * from courses where \"Id\" = '{}';".format(code)
    result = database_object.search(sql)
    print(result)
    database_object.close()


if __name__ == "__main__":
    search_course("COMP9900")
    check_username("test1")