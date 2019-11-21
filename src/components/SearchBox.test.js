import { shallow } from "enzyme";
import React from "react";
import SearchBox from "./SearchBox";

let wrapper;

beforeEach(() => {
    const mockProps = {
        searchfield: "",
        searchChange: jest.fn()
    };
    wrapper = shallow(<SearchBox {...mockProps} />);
});

it("expect to render SearchBox component", () => {
    expect(wrapper).toMatchSnapshot();
});

it("expect to render children components", () => {
    expect(
        wrapper.containsAnyMatchingElements([<input type="search" />])
    ).toEqual(true);
});
