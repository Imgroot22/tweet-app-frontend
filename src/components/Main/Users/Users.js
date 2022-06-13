import User from "./User/User";
import Card from "../../UI/Card/Card";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/user-service";
import { useAuth } from "../../../store/auth-context";
import { toast } from "react-toastify";
// const exampleUsers = [
//   {
//     name: "Yogesh R",
//     loginId: "Imgroot",
//     img: {
//       src: "https://picsum.photos/50",
//       alt: "profile",
//     },
//   },
//   {
//     name: "Suhash B",
//     loginId: "diodsk_w",
//     img: {
//       src: "https://picsum.photos/50",
//       alt: "profile",
//     },
//   },
//   {
//     name: "Jigigi R",
//     loginId: "dihjfd_22",
//     img: {
//       src: "https://picsum.photos/50",
//       alt: "profile",
//     },
//   },
//   {
//     name: "Lol R",
//     loginId: "lololo",
//     img: {
//       src: "https://picsum.photos/50",
//       alt: "profile",
//     },
//   },
//   {
//     name: "Lol R",
//     loginId: "lololo",
//     img: {
//       src: "https://picsum.photos/50",
//       alt: "profile",
//     },
//   },
// ];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(5);
  const auth = useAuth();

  useEffect(() => {
    getAllUsers(
      auth.token,
      (data) => {
        const filteredUsers = data.filter(
          (x) => x.loginId !== auth.user.loginId
        );
        setUsers(filteredUsers);
      },
      (err) => {
        toast.error("Something went wrong!: " + err.data);
      }
    );
  }, [auth.token, auth.user.loginId]);

  const viewMoreHandler = (event) => {
    if (2 * limit > users.length - 1) {
      setLimit(users.length);
    } else {
      setLimit((prevLimit) => 2 * prevLimit);
    }
  };
  const viewLessHandler = (event) => {
    setLimit(5);
  };

  return (
    <Card title="People You May Know">
      {users
        .filter((_, index) => index < limit)
        .map((user) => (
          <User {...user} key={user.id} />
        ))}
      {limit < users.length - 1 && (
        <button
          className="btn btn-outline-primary w-100"
          onClick={viewMoreHandler}
        >
          view more
        </button>
      )}
      {limit === users.length && (
        <button
          className="btn btn-outline-primary w-100"
          onClick={viewLessHandler}
        >
          view less
        </button>
      )}
    </Card>
  );
};

export default Users;
