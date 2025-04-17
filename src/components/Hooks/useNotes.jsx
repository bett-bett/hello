// hooks/useNotes.js
import { useState, useCallback } from 'react'
import { notesService } from '../../services/notesService '

export const useNotes = () => {
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [graph, setGraph] = useState([])

  const webApps = [
    { 
      id: 'proj', 
      title: 'Projects', 
      content: 'my projects',
      type: 'note',
      tags: [{ id: 'web', name: 'web' }]
    },
    { 
      id: 'app1', 
      title: 'Hello', 
      content: 'Current application',
      url: window.location.origin,
      type: 'web-app',
      tags: [{ id: 'web', name: 'web' }]
    },
    { 
      id: 'app2', 
      title: 'code on code', 
      content: 'Code editor',
      url: 'https://code-on-code.vercel.app',
      type: 'web-app',
      tags: [{ id: 'web', name: 'web' }]
    },
    { 
      id: 'app3', 
      title: 'image graph', 
      content: 'Image graph',
      url: 'https://wavyfeels.vercel.app/',
      type: 'web-app',
      tags: [{ id: 'web', name: 'web' }]
    },
    { 
      id: 'app4', 
      title: 'curvy lines', 
      content: 'P5 curvey lines',
      url: 'https://wavyfeels.vercel.app/',
      type: 'web-app',
      tags: [{ id: 'web', name: 'web' }]
    }
  ]

  const webAppLinks = webApps.slice(1).map(app => ({
    note_id: 'proj',
    notes: { title: 'Projects' },
    tag_id: app.id,
    tags: { name: app.title }
  }))

  const fetchNotes = useCallback(async () => {    
    try {
      setLoading(true)
      const data = await notesService.getAllNotes()
      const allData = [...data, ...webApps]

      setNotes(allData)
      return allData || []
    } catch (err) {
      setError(err.message)
      return []
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchNoteById = async (noteId) => {
    try {
      setLoading(true)
      const data = await notesService.getNoteById(noteId)
      setCurrentNote(data)
      return data || []
    } catch (err) {
      setError(err.message)
      return []
    } finally {
      setLoading(false)
    }
  }

  const searchNotes = async (searchTerm) => {    
    try {
      setLoading(true)
      const data = await notesService.searchNotes(user.id, searchTerm)
      return data
    } catch (err) {
      setError(err.message)
      return []
    } finally {
      setLoading(false)
    }
  }

  const NoteConnections = useCallback(async () => {    
    try {
      setLoading(true)
      const data = await notesService.NoteConnections()

      const allConnections = [...data, ...webAppLinks]
      setGraph(allConnections)
      return allConnections
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    notes,
    currentNote,
    graph,
    loading,
    error,
    fetchNotes,
    fetchNoteById,
    searchNotes,
    NoteConnections,
  }
}