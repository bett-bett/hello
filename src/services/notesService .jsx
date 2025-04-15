import supabase from './api';

export const notesService  = {
  getNoteById: async (noteId) => {
    const { data, error } = await supabase
      .from('notes')
      .select(`
        id, 
        title, 
        content, 
        filename, 
        created_at, 
        updated_at, 
        tags (id, name)
      `)
      .eq('id', noteId)
      .single()

    if (error) throw error
    return data
  },

  searchNotes: async (searchTerm) => {
    const { data, error } = await supabase
      .from('notes')
      .select(`
        id, 
        title, 
        content, 
        filename, 
        created_at, 
        updated_at, 
        tags (id, name)
      `)
      .eq(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)

    if (error) throw error
    return data
  },

  // -work on db, tags and notes connections-
  // -work on backend, to extract tags from notes-
  // -think of when the notes are many, think of fetching delays- fetch connections
  NoteConnections: async () => {
    const { data, error } = await supabase
      .from('note_tags')
      .select(`
        note_id, 
        notes (title), 
        tag_id, 
        tags (name)
      `)

    if (error) throw error
    // console.log("tags:", data);
    return data
  },

  getAllNotes: async () => {
    //  think about pagination when the notes are many. research solutions
    // use count
    // getAllNotes: async (page = 1, pageSize = 20) => {
    // const from = (page - 1) * pageSize;
    // const to = from + pageSize - 1;


    const { data, error, count } = await supabase
      .from('notes')
      .select(`
        id, 
        title, 
        content, 
        filename, 
        created_at, 
        updated_at, 
        tags (id, name)
      `, { count: 'exact' })
      .order('created_at', { ascending: false });

    if (error) throw error;
    // console.log("notes:", data);
    return data;
    // return { data, totalCount: count };
  },
}