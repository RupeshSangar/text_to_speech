import { useEffect } from "react";
// import { User } from "../types/UserDetails";
import { useSelector, useDispatch } from "react-redux";
import style from "../styles/userStyle.module.css";
import { RootState } from "../redux/store";
import { getUsers } from "../redux/userSlice/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.data);
  //   const [user, setUser] = useState<User[]>([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((res) => setUser(res))
  //       .catch((err) => console.log("error", err));
  //   }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  //   console.log(user);

  const filterUser = user?.filter((elem) => {
    return elem.id < 3;
  });

  //   console.log(filterUser);

  const userCount = user.reduce((count) => count + 1, 0);
  //   console.log("Total number of users:", userCount);

  const totalUserIdSum = user.reduce((sum, user) => sum + user.id, 0);
  //   console.log("Sum of user IDs:", totalUserIdSum);

  const concatenatedNames = user.reduce(
    (names, user) => names + user.name + ", ",
    ""
  );
  //   console.log("Concatenated names:", concatenatedNames);

  return (
    <div>
      <h1>User Details</h1>
      <div className={style.mainDiv}>
        {user.length > 0 ? (
          user.map((data) => {
            return (
              <div key={data.id}>
                <div className={style.userDiv}>
                  <h4 style={{ margin: 0 }}>Id : {data?.id}</h4>
                  <div className={style.userContent}>
                    <p>
                      Name : <span>{data?.name}</span>
                    </p>
                    <p>
                      Username : <span>{data?.username}</span>
                    </p>
                    <p>
                      Email : <span>{data?.email}</span>
                    </p>
                    <p>
                      Phone Number: <span>{data?.phone}</span>
                    </p>
                    <p>
                      Address :{" "}
                      <span>
                        {data?.address?.city} , {data?.address?.street},{" "}
                        {data?.address?.suite}, {data?.address?.zipcode}
                      </span>
                    </p>
                    <p>
                      Company : <span>{data?.company?.name}</span>
                    </p>
                    <p>
                      Website : <span>{data?.website}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>...loading</p>
        )}
      </div>
      <div className={style.subDiv}>
        <h2>Some Methods (filter , reduce)</h2>
        <div className={style.subContent}>
          {filterUser.map((data) => {
            return (
              <div key={data.id}>
                <div className={style.userDiv}>
                  <h4 style={{ margin: 0 }}>Id : {data?.id}</h4>
                  <div className={style.userContent}>
                    <p>
                      Name : <span>{data?.name}</span>
                    </p>
                    <p>
                      Username : <span>{data?.username}</span>
                    </p>
                    <p>
                      Email : <span>{data?.email}</span>
                    </p>
                    <p>
                      Phone Number: <span>{data?.phone}</span>
                    </p>
                    <p>
                      Address :{" "}
                      <span>
                        {data?.address?.city} , {data?.address?.street},{" "}
                        {data?.address?.suite}, {data?.address?.zipcode}
                      </span>
                    </p>
                    <p>
                      Company : <span>{data?.company?.name}</span>
                    </p>
                    <p>
                      Website : <span>{data?.website}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3>Total number of users: {userCount}</h3>
        <h3>Sum of user IDs: {totalUserIdSum}</h3>
        <h3>
          Concatenated names: <span>{concatenatedNames}</span>
        </h3>
      </div>
    </div>
  );
};

export default Home;
