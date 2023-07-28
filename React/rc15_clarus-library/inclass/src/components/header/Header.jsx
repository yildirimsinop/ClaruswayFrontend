import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";
import { useBooksContext } from "../../context/BooksContext";

const Header = () => {
  const printType = ["all", "books", "magazines"];
  const { searchInfo, setSearchInfo, getData } = useBooksContext();
  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.name);
    setSearchInfo({ ...searchInfo, [e.target.name]: e.target.value }); // inputun name attr ile statede ki key isimleri ayni olmak zorunda.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  console.log(searchInfo);

  return (
    <HeaderContainer>
      <HeaderTitle>BOOKS OR MAGAZINES</HeaderTitle>
      <HeaderForm>
        <SearchInput
          type="search"
          placeholder="Search..."
          name="query"
          value={searchInfo.query}
          onChange={handleChange}
          required
        />
        <SelectBox value={searchInfo.selectType} onChange={handleChange}>
          {printType.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
