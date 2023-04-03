// src/pages/index.tsx
import { GetStaticProps, NextPage } from "next";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type HomeProps = {
  users: User[];
};

export const getStaticProps: GetStaticProps<{ users: User[] }> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  console.log("SGで取得したusers(1人目)", users[0]); // build時にデータ取得されることを確認するため、記述しておく

  return {
    props: {
      users,
    },
  };
};

const Home: NextPage<HomeProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          {user.id} - {user.name} - {user.email} - {user.address.city}
        </li>
      ))}
    </div>
  );
};

export default Home;
