import React, { useState } from "react";
import styled from "styled-components";
import { category, filter } from "../data";
import { Slider } from "@mui/material";
import ProductCard from "../card/ProductCard";

const ShopListing = () => {
  const [priceRange, setPriceRange] = useState([999, 50000]);
  const [selectedSizes, setSelectedSizes] = useState(["s", "M", "L", "XL"]);

  const [selectedCategories, setSelectedCategories] = useState([
    "men",
    "Women",
    "kids",
    "Bags",
  ]);
  return (
    <Containers>
      <Filters>
        <Menu>
          {filter.map((filter) => (
            <FilterSection key={filter.value}>
              <Title>{filter.name}</Title>
              {filter.value === "price" ? (
                <>
                  <Slider
                    aria-label="Price"
                    defaultValue={priceRange}
                    min={999}
                    max={50000}
                    valueLabelDisplay="auto"
                    marks={[
                      { value: 999, label: "₹999" },
                      { value: 50000, label: "₹50000" },
                    ]}
                    onChange={(e, newValue) => setPriceRange(newValue)}
                  />
                </>
              ) : filter.value === "size" ? (
                <Item>
                  {filter.items.map((item, index) => (
                    <SelectableItem
                      key={item}
                      key={item}
                      selected={selectedSizes.includes(item)}
                      onClick={() =>
                        setSelectedSizes((prevSizes) =>
                          prevSizes.includes(item)
                            ? prevSizes.filter((category) => category !== item)
                            : [...prevSizes, item]
                        )
                      }
                    >
                      {item} {selectedSizes.includes(item)}
                    </SelectableItem>
                  ))}
                </Item>
              ) : filter.value === "category" ? (
                <Item>
                  {filter.items.map((item, index) => (
                    <SelectableItem
                      key={item}
                      selected={selectedCategories.includes(item)}
                      onClick={() =>
                        setSelectedCategories((prevCategories) =>
                          prevCategories.includes(item)
                            ? prevCategories.filter(
                                (category) => category !== item
                              )
                            : [...prevCategories, item]
                        )
                      }
                    >
                      {item}
                    </SelectableItem>
                  ))}
                </Item>
              ) : null}
            </FilterSection>
          ))}
        </Menu>
      </Filters>
      <Products>
        <Cardwrapper>
          <ProductCard />
        </Cardwrapper>
      </Products>
    </Containers>
  );
};

export default ShopListing;

const Containers = styled.div`
  padding-top: 80px;
  /* background-color: green; */
  height: 90vh;
  display: flex;
  overflow-y: hidden;

  @media (max-width: 768px) {
    padding: 20px 12px;
    flex-direction: column;
    height: fit-content;
    padding-top: 80px;
    /* overflow-y: scroll; */
  }
  background: ${({ theme }) => theme.bg};
`;
const Filters = styled.div`
  /* background-color: blue; */
  width: 230px;
  overflow: hidden;
  padding: 20px 16px;

  @media (min-width: 768px) {
    width: 230px;
  }
`;

const Products = styled.div`
  /* background-color: red; */
  flex: 1;
  /* height: 60%; */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    width: 100%;
    overflow-y: scroll;
    height: 100%;
  }
`;

const FilterSection = styled.div`

  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 16px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Cardwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 24px;
  justify-content: center;
  @media (max-width: 750px) {
    gap: 14px;
  }
`;
const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const SelectableItem = styled.div`
  cursor: pointer;
  background-color: #000000;
  color: white;
  display: flex;
  border: 1px solid ${({ theme }) => theme.text_secondary + 20};
  color: ${({ theme }) => theme.text_secondary + 90};
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 16px;
  width: fit-content;
  ${({ selected, theme }) =>
    selected &&
    `
    border: 1px solid black;
    color:black;
    background:white;
    font-weight: 500;
  `}
`;
