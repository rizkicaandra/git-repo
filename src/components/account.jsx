import { BigHead } from "@bigheads/core";

const Account = ({ user = "John Doe" }) => {
  // console.log('user :>> ', user);
  return (
    <>
      <BigHead
        style={{
          width: "300px",
        }}
      />
      <h1 className="account__title">{user}</h1>
    </>
  );
};

export default Account;
