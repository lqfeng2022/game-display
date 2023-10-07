import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

//takes the same approach as filtering
//when the user select the sort order, this component notify App component, App then pass the new sort order to the GameGrid

//2)
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  //4.2)add sortOrder to this component
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  //1)
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritc", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  //4.3)find the sort order with the given value in this array(sortOrders) and render its label
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {/* 4.4)render currentSortOrder instead of */}
        {/* Order by: Relevance */}
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
