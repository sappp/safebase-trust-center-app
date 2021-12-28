import { useFetch } from '../../hooks'
import { CustomerNavListItem } from "../../components/customer";

const Home = () => {
  const { data, isLoading, error } = useFetch(
    "https://salty-journey-85003.herokuapp.com/api/customers"
  );

   if (isLoading) {
     return <div>loading...</div>;
   }

   if (error) {
     return <div>Something went wrong... {error.message}</div>;
   }

  return (
    <div>
      {data.map((customer) => (
        <CustomerNavListItem
          key={customer._id}
          name={customer.name}
          href={customer._id}
        />
      ))}
    </div>
  );
};

export default Home