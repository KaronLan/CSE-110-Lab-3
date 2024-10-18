import {render, screen, fireEvent} from "@testing-library/react";
import { ToDoList } from "./toDoList";

describe("Display list item", ()=>{
    test("dummy list display", () => {
        render(<ToDoList/>);
        const apple = screen.findByText("Apples");
        expect(apple).toBeInTheDocument;
        const banana = screen.findByText("Bananas");
        expect(banana).toBeInTheDocument;
    });
    test("check all list item test", () => {
        render(<ToDoList/>);
        const buttons = screen.getAllByRole("checkbox");
        expect(screen.getByText("Items bought: 0")).toBeInTheDocument
        fireEvent.click(buttons[1])
        expect(screen.getByText("Items bought: 1")).toBeInTheDocument
        fireEvent.click(buttons[0])
        expect(screen.getByText("Items bought: 2")).toBeInTheDocument
        
    });
    test("check and uncheck list item test", () => {
        render(<ToDoList/>);
        const buttons = screen.getAllByRole("checkbox");
        expect(screen.getByText("Items bought: 0")).toBeInTheDocument
        fireEvent.click(buttons[0])
        fireEvent.click(buttons[0])
        expect(screen.getByText("Items bought: 0")).toBeInTheDocument
        
    });

});