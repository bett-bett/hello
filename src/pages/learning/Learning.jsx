import { useEffect, useState, useCallback } from "react";
import VaultPage from "./leafs/VaultPage";
import { useNotes } from "../../components/Hooks/useNotes";
import MarkdownRenderer from "../../components/MarkdownRenderer";

function Learning() {
  const [showPage2, setShowPage2] = useState(false);
  const [leftLeaf, setLeftLeaf] = useState();
  const [rightLeaf, setRightLeaf] = useState();
  
  const { notes, error } = useNotes();

  // Memoized function  add a new leaf
  const addLeaf = useCallback((newLeaf) => {
    if (rightLeaf === undefined) {
      setRightLeaf(newLeaf);
      setShowPage2(true);
    } else {
      setLeftLeaf(rightLeaf);
      setRightLeaf(newLeaf);
    }
  }, [rightLeaf]);

  // Function to remove a leaf
  const removeLeaf = useCallback(() => {
    setShowPage2(false);
    setTimeout(() => {
      setRightLeaf(undefined);
    }, 500);
  }, []);
  
  // Handle wiki link clicks (when a link in markdown content is clicked)
  const handleWikiLinkClick = useCallback(async (fileKey) => {
    console.log("Wiki link clicked. fileKey:", fileKey);
    
    try {
      // get note bu filename
      const foundNote = notes.find(note => note.filename === fileKey || 
        note.filename === `${fileKey}.md`);
      
      if (foundNote) {
        // If found in our cache, use it directly
        addLeaf(
          <MarkdownRenderer
            content={foundNote.content}
            onLinkClick={handleWikiLinkClick}
          />,
          foundNote.id
        );
        return;
      }
      
      // If not found in cache, try to fetch by filename from the database
      const { getNoteByFilename } = notesService;
      const noteData = await getNoteByFilename(fileKey);
      
      if (noteData) {
        addLeaf(
          <MarkdownRenderer
            content={noteData.content}
            onLinkClick={handleWikiLinkClick}
          />,
          noteData.id
        );
      } else {
        addLeaf(
          <div className="note-not-found">
            <h2>Note "{fileKey}" not found</h2>
            <p>This wiki link points to a note that doesn't exist yet. Maybe it is just a tag and the dev needs to work on new features</p>
          
          </div>
        );
      }
    } catch (error) {
      console.error("Error handling wiki link:", error);
      addLeaf(
        <div className="error-message">
          <h2>Error loading note</h2>
          <p>{error.message}</p>
        </div>
      );
    }
  }, [notes, addLeaf]);

  
  useEffect(() => {
    if (!leftLeaf) {
      setLeftLeaf(<VaultPage 
        newLeaf={addLeaf} 
      />);
    }
  }, [leftLeaf]);


  const page1Style = {
    position: "relative",
    width: "100%",
    padding: "8px",
    overflow: "auto",
    border: "1px solid #727578",
    transition: "all 0.5s ease",
  };

  const page2Style = {
    position: "relative",
    width: showPage2 ? "100%" : "0%",
    padding: showPage2 ? "8px" : "0",
    overflow: "auto",
    border: showPage2 ? "1px solid #727578" : "none",
    transition: "all 0.5s ease",
  };

  const minimizeButton = {
    position: 'absolute',
    top: '0.4%',
    right: '2%',
    fontSize: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '10px', 
  };

  return (
    <div className="main-edu">
      {/* left Leaf */}
      <div style={page1Style}>
        {showPage2 ? (
          <button
            style={minimizeButton}
            onClick={removeLeaf}
          > □ </button>
        ) : (
          <>
          {/* todo: show graph */}
          </>
        )}
        
        <div key="leftleaf">{leftLeaf}</div>
      </div>
      
      {/* right Leaf */}
      <div style={page2Style}>
        {rightLeaf ? (
          <>
            <button
              style={minimizeButton}
              onClick={removeLeaf}
            > - </button>
            <div key="rightleaf">{rightLeaf}</div>
          </>
        ) : (
          <></>
        )}
      </div>
      
      {/* Display error message if there's an error fetching notes */}
      {error && (
        <div style={{ color: 'red', padding: '10px' }}>
          Error: {error}
        </div>
      )}
    </div>
  );
}

export default Learning;