import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  //2.1)use Navigate hook to get the navigate f
  const navigate = useNavigate();

  //2)ISSUE: on GameDetailPage, search for sth, nothing happen???
  //->FIX the issue, we should tell the user back to the homepage,
  //  cus that's where we show the games..
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        //2.2)when submit the form, we set SearchText,
        // then call navigate to take the user back to homepage
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="outline"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
