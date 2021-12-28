import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import { SecuirtyProgramView, SecProgramLogoField } from "../../components/customer";

const Customer = () => {
  const { customerId } = useParams();

  const url = `https://salty-journey-85003.herokuapp.com/api/customers/${customerId}`;
  const { data, isLoading, error } = useFetch(url, true);

  if (isLoading) {
    return <div>loading...</div>;
  };

  if (error) {
    return <div>Something went wrong... {error.message}</div>;
  };

  return (
    <div>
      <div className="p-d-flex p-flex-row p-jc-center p-p-1">
        <div className=" p-pr-5">
          <span style={{ fontWeight: 700, fontSize: "larger" }}>
            {data[0]?.name}
          </span>
        </div>
        <div className="p-d-flex p-flex-row">
          {data[0]?.["secuirty_programs"]
            .filter((scp) => scp.field_type === "LOGO")
            .reduce((acc, scp) => acc.concat(scp.fields), [])
            .map((fields, index) => (
              <SecProgramLogoField
                key={`certlogo-${index}`}
                {...fields}
                variant={"slim"}
              />
            ))}
        </div>
      </div>
      <div className="p-d-flex p-flex-wrap">
        {data[0]?.["secuirty_programs"].map((scp) => (
          <SecuirtyProgramView
            key={scp.name}
            name={scp.name}
            type={scp.field_type}
            fields={scp.fields}
          />
        ))}
      </div>
    </div>
  );
};

export default Customer;
