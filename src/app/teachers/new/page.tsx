import TeacherForm from '@/components/forms/TeacherForm'
import React from 'react'

const page = () => {
  return (
    <div className="m-4 bg-white dark:bg-gray-900 p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Add Teacher</h1>
      <TeacherForm />
    </div>
  )
}

export default page