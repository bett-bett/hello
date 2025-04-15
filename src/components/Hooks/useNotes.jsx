// hooks/useNotes.js
import { useState, useCallback } from 'react'
import { notesService } from '../../services/notesService '

export const useNotes = () => {
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [graph, setGraph] = useState([])

  const fetchNotes = useCallback(async () => {    
    try {
      setLoading(true)
      const data = await notesService.getAllNotes()
      setNotes(data)
      return data || []
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
      setGraph(data)
      return data
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