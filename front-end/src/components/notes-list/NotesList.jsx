import styles from "./NotesList.module.css";
import { useState } from "react";
import { Title } from "../title/Title";
import { AddNewButton } from "../add-new-button/AddNewButton";
import { TopBar } from "../top-bar/TopBar";
import { ShortNote } from "../short-note/ShortNote";
import { Note } from "../note/Note";

const NotesContainer = ({ children }) => (
    <div className={styles["notes-container"]}>{children}</div>
);

const Notes = ({ children }) => (
    <div className={styles["notes-list"]} role="list">
        {children}
    </div>
);

const NotesList = () => {
    const [notes] = useState([
        {
            id: 5,
            folderId: 2,
            title: "Albert Einstein",
            body: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        },
        {
            id: 7,
            title: "Sun Tzu",
            folderId: 2,
            body: "Osiągnąć sto zwycięstw w stu bitwach nie jest szczytem umiejętności. Szczytem umiejętności jest pokonanie przeciwnika bez walki.",
        },
        {
            title: "Nowa notatka",
            body: "Tutaj wpisz treść swojej notatki alasdasdasdasdlaksjd asd ",
            folderId: 1,
            id: 8,
        },
        {
            title: "Nowa notatka",
            body: "Tutaj wpisz treść swojej notatki",
            folderId: 1,
            id: 10,
        },
        {
            title: "Nowa notatkaqq",
            body: "Tutaj wpisz treść swojej notatki",
            folderId: 1,
            id: 15,
        },
        {
            title: "Nowa notatka",
            body: "Tutaj wpisz treść swojej notatki",
            folderId: 1,
            id: 17,
        },
    ]);

    return (
        <NotesContainer>
            <Notes>
                <TopBar>
                    <Title>Notatki</Title>

                    <AddNewButton>+</AddNewButton>
                </TopBar>

                {notes.map((note, idx) => (
                    <ShortNote
                        role="listitem"
                        key={idx}
                        note={note}
                    ></ShortNote>
                ))}
            </Notes>
            <Note />
        </NotesContainer>
    );
};

export default NotesList;
