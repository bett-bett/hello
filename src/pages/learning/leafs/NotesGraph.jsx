import React, { useState, useEffect, useMemo } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { notesService } from '../../../services/notesService ';
import { useNotes } from "../../../components/Hooks/useNotes";
import useWindowDimensions from '../../../components/Hooks/useWindowDimensions';

const NotesGraph = () => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const { fetchNotes, NoteConnections } = useNotes();
  const { width, height } = useWindowDimensions();

  // Calculate responsive width
  const graphWidth = width > 768 ? (width / 2) * 0.87 : width * 0.8;

  useEffect(() => {
    const loadGraphData = async () => {
      try {
        const [notes, notesConnections] = await Promise.all([fetchNotes(), NoteConnections()]);

        //   console.log("Notes result type:", typeof notes, Array.isArray(notes));
        // console.log("Notes data:", notes);
        // console.log("Tags result type:", typeof tags, Array.isArray(tags));
        // console.log("notesConnections data:", notesConnections);
        const noteNames = notes.map(n => n.title);
        // console.log("Notes data:", notes);
        // console.log("noteNames:", noteNames);
        const tagNames = notesConnections.map(t => t.tags.name);
        const tags = [...new Set(tagNames)];
        const plainTags = tags.filter(tag => tag && !noteNames.includes(tag));
        // console.log("tagNames:", tags);
        // console.log("plainTags:", plainTags);
      
        const tagNodes = notesConnections
          .filter(connection => plainTags.includes(connection.tags.name))
          .reduce((unique, connection) => {
            if (!unique.some(tag => tag.id === `${connection.tag_id}`)) {
              unique.push({
                id: `${connection.tag_id}`,
                type: 'tag',
                name: `${connection.tags.name}`,
              });
            }
            return unique;
          }, []);
        
        const linkedNodes = notesConnections.map(t => ({
          source: `${t.note_id}`, 
          target: plainTags.includes(t.tags.name) ? `tag_${t.tag_id}` : `${notes.find(n => n.title === t.tags.name)?.id}`,
          value: 1
        }));
        
        // console.log("tagNodes:", tagNodes);
        // console.log("linkedNodes:", linkedNodes);
        
        const nodes = [
          ...notes.map(n => ({ 
            id: `${n.id}`, 
            type: 'note', 
            title: n.title,
            val: 3
          })),
          ...tagNodes.map(t => ({ 
            id: `tag_${t.id}`, 
            type: 'tag', 
            title: t.name,
            val: 1
          }))
        ];

        // Create links between notes and tags/notes
        const links = [
          ...linkedNodes.map(l => ({
            source: l.source,
            target: l.target,
            value: 1
          }))
        ]

        // console.log("nodes:", nodes);
        // console.log("links:", links);
        setGraphData({ nodes, links });
      } catch (error) {
        console.error('Error loading graph data:', error);
      }
    };
    console.log("graphData:", graphData);


    loadGraphData();
  }, [fetchNotes, NoteConnections]);

  const memoizedGraph = useMemo(() => (
    <ForceGraph2D
      graphData={graphData}
      nodeId="id"
      linkSource="source"
      linkTarget="target"
      width={graphWidth}
      height={height * 0.6}
      backgroundColor="white"
      nodeLabel={node => node.title || node.name}
      nodeAutoColorBy="type"
      linkDirectionalParticles={2}
      linkDirectionalParticleSpeed={0.005}
      nodeRelSize={6}
      linkWidth={1}
      linkColor={() => '#999'}
      onNodeClick={node => console.log(node)}
    />
  ), [graphData, graphWidth, height]);

  return (
    <div >
      <h2>Notes by Tag</h2>
      {memoizedGraph}
    </div>
  );
};

export default NotesGraph;
