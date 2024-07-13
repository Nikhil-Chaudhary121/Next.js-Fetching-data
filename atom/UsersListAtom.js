import { atom } from "recoil";

const usersListAtom = atom({
  key: "usersListAtom",
  default: [],
});

export default usersListAtom;
