"use client"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './components/Toolbar'

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World!</p>',
  })

  return (
    <div className='flex flex-col'>
      <Toolbar />
      <EditorContent editor={editor} />
    </div>
  )
}

export default TiptapEditor