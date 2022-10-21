import { experimental_use as use } from "react";

const fetchData = fetch("../../MOCK_DATA.json").then(async (res) => ({
  status: res.status,
  data: res.status === 200 ? await res.json() : null,
}));

function Names() {
  const userData = use(fetchData);
  return (
    <div>
      <h2>Data status: {userData.status}</h2>
      {userData.data.map((el, index) => (
        <button type="button" key={index}>
          Name : {el.first_name}
        </button>
      ))}
    </div>
  );
}

export default Names;
