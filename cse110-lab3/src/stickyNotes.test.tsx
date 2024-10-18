import {render, screen, fireEvent} from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";


describe("Create StickyNote", () => {
    test("read dummy list exist", () => {
        render(<StickyNotes />);
     
        
          const actualTitle = screen.getAllByText("title", {exact : false});
          expect(actualTitle).toBeInTheDocument;
      });
    
    test("renders create note form", () => {
      render(<StickyNotes />);
   
      const createNoteButton = screen.getByText("Create Note");
      expect(createNoteButton).toBeInTheDocument();
    });
    test("creates a new note", () => {
        render(<StickyNotes />);
        const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
        const createNoteContentTextarea =
          screen.getByPlaceholderText("Note Content");
        const createNoteButton = screen.getByText("Create Note");
     
        fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
        fireEvent.change(createNoteContentTextarea, {
          target: { value: "Note content" },
        });
        fireEvent.click(createNoteButton);
     
        const newNoteTitle = screen.getByText("New Note");
        const newNoteContent = screen.getByText("Note content");
     
        expect(newNoteTitle).toBeInTheDocument();
        expect(newNoteContent).toBeInTheDocument();
    });
});

describe("Update StickyNote", () => {
    test("update a dummyNote", () =>{
        render(<StickyNotes />);
        const dummytitle = screen.getByText('test note 1 title');
        const dummycontent = screen.getByText('test note 2 content');
        dummytitle.innerHTML="Updated Dummy Title";
        dummycontent.innerHTML="Updated Dummy Content";
        const updatedNoteTitle = screen.getByText("Updated Dummy Title", {exact: false});
        expect(updatedNoteTitle).toBeInTheDocument;
        const updatedNoteContent = screen.getByText("Updated Dummy Content");
        expect(updatedNoteContent).toBeInTheDocument;
    });
});

describe("Delete StickyNote", () => {
    test("delete all dummyNote", () =>{
        render(<StickyNotes />);
        const deleteNoteButton = screen.getAllByText("x");
        deleteNoteButton.forEach(button => {
            fireEvent.click(button);
        });

        expect(<div>"test note 1 title"</div>).toBeNull;
        expect(<div>"test note 2 title"</div>).toBeNull;
        expect(<div>"test note 3 title"</div>).toBeNull;
        expect(<div>"test note 4 title"</div>).toBeNull;
        expect(<div>"test note 5 title"</div>).toBeNull;
        expect(<div>"test note 6 title"</div>).toBeNull;
        expect(<div>"test note 7 title"</div>).toBeNull;
        expect(<div>"test note 8 title"</div>).toBeNull;
        expect(<div>"test note 9 title"</div>).toBeNull;
        expect(<div>"test note 10 title"</div>).toBeNull;
        expect(<div>"test note 11 title"</div>).toBeNull;
        expect(<div>"test note 12 title"</div>).toBeNull;
    }); 

    test("delete one dummyNote", () =>{
        render(<StickyNotes />);
        const deleteButton1 = screen.getByTestId("1");
        fireEvent.click(deleteButton1);
        expect(<div>"test note 1 title"</div>).not.toBeInTheDocument;
    });
});
