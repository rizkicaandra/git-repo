import { BigHead } from "@bigheads/core";

const Account = ({ user = "John Doe" }) => {
  // console.log('user :>> ', user);
  return (
    <>
      <BigHead
        accessory="none"
        body="breasts"
        circleColor="blue"
        clothing="dressShirt"
        clothingColor="black"
        eyebrows="leftLowered"
        eyes="heart"
        faceMask={false}
        faceMaskColor="green"
        facialHair="mediumBeard"
        graphic="graphQL"
        hair="afro"
        hairColor="blonde"
        hat="none4"
        hatColor="white"
        lashes
        lipColor="red"
        mask
        mouth="openSmile"
        skinTone="yellow"
        style={{
          width: "300px",
        }}
      />
      <h1 className="account__title">{user}</h1>
    </>
  );
};

export default Account;
